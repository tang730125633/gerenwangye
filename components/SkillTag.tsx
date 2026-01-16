import React from 'react';

interface SkillTagProps {
  name: string;
  darkMode: boolean;
}

export const SkillTag: React.FC<SkillTagProps> = ({ name, darkMode }) => {
  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full border
      ${darkMode
        ? 'bg-slate-800 text-brand-300 border-slate-700'
        : 'bg-brand-50 text-brand-700 border-brand-100'
      }`}
    >
      {name}
    </span>
  );
};