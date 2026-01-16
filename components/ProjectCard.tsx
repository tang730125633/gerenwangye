import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  darkMode: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, darkMode }) => {
  return (
    <a 
      href={link}
      className={`block p-5 rounded-xl border transition-all duration-200 hover:shadow-lg group
        ${darkMode 
          ? 'bg-slate-800 border-slate-700 hover:border-brand-500' 
          : 'bg-white border-slate-200 hover:border-brand-300'
        }`}
    >
      <div className="flex items-start justify-between">
        <h3 className={`font-semibold text-lg group-hover:text-brand-500 transition-colors ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
          {title}
        </h3>
        <ExternalLink size={16} className={`opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? 'text-slate-400' : 'text-slate-400'}`} />
      </div>
      <p className={`mt-2 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
        {description}
      </p>
    </a>
  );
};