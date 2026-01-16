import React, { useState } from 'react';
import { Github, Twitter, Linkedin, Mail, MapPin, ExternalLink, Moon, Sun, Heart } from 'lucide-react';
import { SocialLink } from './components/SocialLink';
import { ProjectCard } from './components/ProjectCard';
import { SkillTag } from './components/SkillTag';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode classes on the wrapper
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const themeClass = darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900';
  const cardClass = darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200';
  const textMuted = darkMode ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClass} font-sans flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8`}>
      
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6">
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' : 'bg-white hover:bg-slate-100 text-slate-600 shadow-sm border border-slate-200'}`}
          aria-label="Toggle Theme"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <main className="w-full max-w-2xl space-y-8">
        
        {/* Header / Profile Section */}
        <div className={`flex flex-col items-center text-center space-y-4 p-8 rounded-2xl border shadow-sm transition-all duration-300 ${cardClass}`}>
          <div className="relative group">
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-200 blur`}></div>
            <img 
              src="https://picsum.photos/200/200" 
              alt="Profile" 
              className="relative w-32 h-32 rounded-full border-4 border-white object-cover shadow-md"
            />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Alex Developer</h1>
            <p className={`text-lg font-medium ${darkMode ? 'text-brand-400' : 'text-brand-600'}`}>
              Frontend Engineer & UI/UX Enthusiast
            </p>
            <div className={`flex items-center justify-center space-x-2 text-sm ${textMuted}`}>
              <MapPin size={16} />
              <span>San Francisco, CA</span>
            </div>
          </div>

          <p className={`max-w-md mx-auto leading-relaxed ${textMuted}`}>
            I build accessible, pixel-perfect, and performant web experiences. 
            Passionate about React, modern CSS, and clean code architecture.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 pt-4">
            <SocialLink href="https://github.com" icon={Github} label="GitHub" darkMode={darkMode} />
            <SocialLink href="https://twitter.com" icon={Twitter} label="Twitter" darkMode={darkMode} />
            <SocialLink href="https://linkedin.com" icon={Linkedin} label="LinkedIn" darkMode={darkMode} />
            <SocialLink href="mailto:hello@example.com" icon={Mail} label="Email" darkMode={darkMode} />
          </div>
        </div>

        {/* Skills Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold pl-2 border-l-4 border-brand-500">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Next.js', 'GraphQL', 'Figma', 'Git'].map((skill) => (
              <SkillTag key={skill} name={skill} darkMode={darkMode} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold pl-2 border-l-4 border-brand-500">Featured Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <ProjectCard 
              title="E-Commerce Dashboard"
              description="A responsive analytics dashboard using Recharts and Tailwind."
              link="#"
              darkMode={darkMode}
            />
            <ProjectCard 
              title="AI Chat Interface"
              description="Real-time chat application powered by Gemini API."
              link="#"
              darkMode={darkMode}
            />
            <ProjectCard 
              title="Task Manager"
              description="Collaborative kanban board with drag-and-drop support."
              link="#"
              darkMode={darkMode}
            />
            <ProjectCard 
              title="Portfolio v1"
              description="The first iteration of my personal website built with vanilla JS."
              link="#"
              darkMode={darkMode}
            />
          </div>
        </section>

        {/* Footer */}
        <footer className={`pt-12 pb-6 text-center text-sm ${textMuted}`}>
          <div className="flex items-center justify-center space-x-1">
            <span>© {new Date().getFullYear()} Alex Developer. Made with</span>
            <Heart size={14} className="text-red-500 fill-current" />
            <span>using React.</span>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;