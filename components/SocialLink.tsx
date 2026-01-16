import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  darkMode: boolean;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label, darkMode }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-2.5 rounded-full transition-all duration-200 transform hover:scale-110 
        ${darkMode 
          ? 'bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white' 
          : 'bg-white hover:bg-brand-500 text-slate-600 hover:text-white shadow-sm border border-slate-200 hover:border-brand-500'
        }`}
      aria-label={label}
    >
      <Icon size={20} />
    </a>
  );
};