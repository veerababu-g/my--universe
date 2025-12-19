
import React, { useState } from 'react';
import { PERSONAL_INFO, PROJECTS, SKILLS, EDUCATION, ACHIEVEMENTS } from './data';

type View = 'home' | 'projects' | 'certificates';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [projectFilter, setProjectFilter] = useState<'all' | 'software' | 'embedded'>('all');

  const navigateToSection = (sectionId: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const filteredProjects = projectFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === projectFilter);

  const SocialIcons = () => (
    <div className="flex flex-wrap gap-4 mt-6">
      <a href={PERSONAL_INFO.linkedin} target="_blank" className="glass p-3 rounded-xl hover:bg-blue-600/20 hover:scale-110 transition-all text-blue-400" title="LinkedIn">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </a>
      <a href={PERSONAL_INFO.github} target="_blank" className="glass p-3 rounded-xl hover:bg-slate-700 hover:scale-110 transition-all text-white" title="GitHub">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.472-4.041-1.472-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
      <a href={PERSONAL_INFO.leetcode} target="_blank" className="glass p-3 rounded-xl hover:bg-orange-500/20 hover:scale-110 transition-all text-orange-400" title="LeetCode">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 00-.961.414l-4.593 4.593a1.381 1.381 0 000 1.951l4.593 4.593a1.381 1.381 0 001.951 0 1.381 1.381 0 000-1.951l-4.593-4.593L13.483 1.374a1.381 1.381 0 00-1.951-1.951L8.835 2.119a1.381 1.381 0 000 1.951l2.648 2.648a1.381 1.381 0 001.951 0 1.381 1.381 0 000-1.951l-2.648-2.648L13.483 0zm-5.066 3.002a1.374 1.374 0 00-.961.414L.414 10.459a1.381 1.381 0 000 1.951l7.003 7.003a1.381 1.381 0 001.951 0 1.381 1.381 0 000-1.951L2.365 11.435l7.003-7.003a1.381 1.381 0 00-1.951-1.951L3.368 6.53a1.381 1.381 0 000 1.951l4.049 4.049a1.381 1.381 0 001.951 0 1.381 1.381 0 000-1.951l-4.049-4.049L7.417 3.416a1.374 1.374 0 00-.961-.414zM15.403 4.414a1.381 1.381 0 011.951 0l7.003 7.003a1.381 1.381 0 010 1.951l-7.003 7.003a1.381 1.381 0 01-1.951-1.951l7.003-7.003-7.003-7.003a1.381 1.381 0 010-1.951z"/></svg>
      </a>
      <a href={PERSONAL_INFO.codechef} target="_blank" className="glass p-3 rounded-xl hover:bg-amber-800/20 hover:scale-110 transition-all text-amber-600" title="CodeChef">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-4.706 17.581c-.567 0-1.026-.459-1.026-1.026 0-.567.459-1.026 1.026-1.026.567 0 1.026.459 1.026 1.026 0 .567-.459 1.026-1.026 1.026zm0-2.052c-.567 0-1.026-.459-1.026-1.026 0-.567.459-1.026 1.026-1.026.567 0 1.026.459 1.026 1.026 0 .567-.459 1.026-1.026 1.026zm4.706 4.104c-.567 0-1.026-.459-1.026-1.026 0-.567.459-1.026 1.026-1.026.567 0 1.026.459 1.026 1.026 0 .567-.459 1.026-1.026 1.026zm0-2.052c-.567 0-1.026-.459-1.026-1.026 0-.567.459-1.026 1.026-1.026.567 0 1.026.459 1.026 1.026 0 .567-.459 1.026-1.026 1.026zm4.706 0c-.567 0-1.026-.459-1.026-1.026 0-.567.459-1.026 1.026-1.026.567 0 1.026.459 1.026 1.026 0 .567-.459 1.026-1.026 1.026z"/></svg>
      </a>
    </div>
  );

  const HomeView = () => (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-in slide-in-from-left-8 duration-1000">
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Welcome to my universe</span>
            <h1 className="text-3xl sm:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-6">
              <span className="text-blue-400">Full Stack Software Engineer</span> & <span className="text-purple-400">Embedded Systems Engineer</span>.
            </p>
            <p className="max-w-xl text-slate-400 leading-relaxed mb-8 text-lg">
              {PERSONAL_INFO.summary}
            </p>
            <div className="flex flex-wrap gap-4 items-start">
              <button 
                onClick={() => {
                  setCurrentView('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-xl shadow-blue-600/30 flex items-center group"
              >
                Explore Projects
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <a 
                href={PERSONAL_INFO.resumeUrl} 
                download
                className="glass text-slate-200 px-8 py-3 rounded-xl font-bold hover:bg-blue-600/10 transition-all flex items-center group"
              >
                Download Resume
                <svg className="w-5 h-5 ml-2 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </a>
              <button onClick={() => navigateToSection('contact')} className="glass text-slate-200 px-8 py-3 rounded-xl font-bold hover:bg-white/5 transition-all">
                Let's Talk
              </button>
            </div>
            <SocialIcons />
          </div>
          
          <div className="relative group animate-in slide-in-from-right-8 duration-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass rounded-full overflow-hidden aspect-square flex items-center justify-center bg-slate-800/50 p-2">
              <img 
                src="https://i.ibb.co/xqTKr4qP/me.jpg" 
                alt="Profile Workspace" 
                className="w-full h-full object-cover rounded-xl  transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Expertise</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {SKILLS.map((group) => (
              <div key={group.category} className="glass p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
                <h3 className="text-blue-400 font-bold mb-6 uppercase text-xs tracking-widest group-hover:text-blue-300">{group.category}</h3>
                <ul className="space-y-3">
                  {group.items.map((skill) => (
                    <li key={skill} className="text-slate-300 flex items-center text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlighted Projects Preview */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
              <div className="h-1.5 w-16 bg-blue-600 rounded-full"></div>
            </div>
            <button 
              onClick={() => { setCurrentView('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 group"
            >
              See all projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map(project => (
              <div key={project.title} className="glass rounded-3xl overflow-hidden group hover:border-blue-500/20 transition-all">
                <div className="h-40 overflow-hidden relative">
                  <a href={project.liveUrl || project.githubUrl} target="_blank" className="block w-full h-full">
                  
                  <img src={project.image} alt={project.title}  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </a>
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-tighter shadow-lg">{project.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-500 text-xs mb-4 line-clamp-2">{project.description[0]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlighted Certificates Preview */}
      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Certifications</h2>
              <div className="h-1.5 w-16 bg-purple-600 rounded-full"></div>
            </div>
            <button 
              onClick={() => { setCurrentView('certificates'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1 group"
            >
              View all certs
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACHIEVEMENTS.slice(0, 3).map(ach => (
              <div key={ach.title} className="glass p-6 rounded-3xl hover:border-purple-500/20 transition-all group">
                <div className="bg-purple-600/10 w-12 h-12 rounded-2xl flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <a href={ach.certificateUrl} target="_blank" className="block w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </a>
                </div>
                <h3 className="font-bold text-white mb-2 line-clamp-1">{ach.title}</h3>
                <p className="text-slate-500 text-xs">{ach.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <svg className="w-8 h-8 mr-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="glass p-8 rounded-3xl border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-blue-400 font-semibold mb-2">{edu.institution}</p>
                <p className="text-slate-500 text-sm mb-4 font-medium">{edu.period} • GPA: {edu.gpa}</p>
                <div className="flex items-center text-slate-500 text-xs uppercase tracking-tighter">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                  {edu.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {[
                { label: 'Email', value: PERSONAL_INFO.email, icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { label: 'Phone', value: PERSONAL_INFO.phone, icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' }
              ].map(item => (
                <div key={item.label} className="glass p-6 rounded-3xl flex items-center space-x-5 border-white/5 group">
                  <div className="bg-blue-600/10 p-4 rounded-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-0.5">{item.label}</h4>
                    <p className="text-slate-200 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass p-8 rounded-[2rem] space-y-6 border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input required name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                  <input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                </div>
                <textarea required name="message" rows={5} value={formData.message} onChange={handleInputChange} placeholder="Enter Text Message Here" className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all" />
                <button type="submit" disabled={isSubmitting} className={`w-full py-5 rounded-2xl font-bold transition-all shadow-2xl ${submitted ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-500 hover:scale-[1.01] active:scale-[0.99] shadow-blue-600/30'}`}>
                  {isSubmitting ? "Processing..." : submitted ? "Email Ready to Send!" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ProjectsView = () => (
    <section className="pt-32 pb-24 px-4 md:px-8 min-h-screen animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl font-extrabold mb-4 tracking-tight">Project <span className="gradient-text">Details</span></h2>
            <p className="text-slate-400 text-lg">A deep dive into my engineering journey through software and silicon.</p>
          </div>
          <div className="flex gap-2 p-1.5 bg-slate-800/80 rounded-2xl border border-white/5 backdrop-blur-md">
            {(['all', 'software', 'embedded'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setProjectFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold capitalize transition-all ${
                  projectFilter === cat ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.title} 
              className="glass rounded-[2rem] overflow-hidden group hover:border-blue-500/30 transition-all flex flex-col h-full animate-in zoom-in-95 duration-700 border-white/5"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="h-56 relative overflow-hidden bg-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <div className="absolute top-5 left-5">
                  <span className={`text-[10px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-widest ${project.category === 'software' ? 'bg-blue-600' : 'bg-purple-600'} text-white shadow-xl`}>
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors tracking-tight">{project.title}</h3>
                <p className="text-slate-500 text-sm mb-6 font-medium">{project.subtitle}</p>
                <div className="space-y-3 flex-1 mb-8">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  ))}
                </div>
                
                <div className="flex gap-4 mb-6">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-3 rounded-xl transition-all text-center flex items-center justify-center group/btn">
                      Live Link
                      <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" className={`flex-1 glass text-white text-xs font-bold py-3 rounded-xl transition-all text-center flex items-center justify-center hover:bg-white/10 ${!project.liveUrl ? 'w-full' : ''}`}>
                      GitHub
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-900 text-slate-500 uppercase tracking-tighter">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <button 
             onClick={() => {
               setCurrentView('home');
               window.scrollTo({ top: 0, behavior: 'smooth' });
             }}
             className="glass text-slate-400 hover:text-white transition-all px-8 py-4 rounded-2xl font-bold flex items-end justify-end mx-auto group hover:border-blue-500/30"
           >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 group-hover:-translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
             </svg>
             Return Home
           </button>
           <button
             onClick={() => window.open('https://github.com/veerababu-g', '_blank')}
             className="glass text-slate-400 hover:text-white transition-all px-8 py-4 rounded-2xl font-bold flex items-end justify-end mx-auto group hover:border-blue-500/30 mt-4"
           >
             more on GitHub
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
           </button>
        </div>
      </div>
    </section>
  );

  const CertificatesView = () => (
    <section className="pt-32 pb-24 px-4 md:px-8 min-h-screen animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-extrabold mb-4 tracking-tight">Professional <span className="text-purple-500">Certificates</span></h2>
          <p className="text-slate-400 text-lg">A record of my continuous learning and verified skill acquisition.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((ach, idx) => (
            <div 
              key={ach.title} 
              className="glass p-8 rounded-[2rem] flex flex-col md:flex-row gap-8 hover:border-purple-500/30 transition-all group animate-in zoom-in-95 duration-700"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="bg-purple-600/10 w-20 h-20 rounded-3xl flex items-center justify-center text-purple-400 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{ach.title}</h3>
                  <p className="text-slate-400 font-medium mb-1">{ach.organization}</p>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">{ach.date}</p>
                </div>
                {ach.certificateUrl && (
                  <a 
                    href={ach.certificateUrl} 
                    target="_blank" 
                    className="mt-6 self-start bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all flex items-center group/btn"
                  >
                    View Credential
                    <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <button 
             onClick={() => {
               setCurrentView('home');
               window.scrollTo({ top: 0, behavior: 'smooth' });
             }}
             className="glass text-slate-400 hover:text-white transition-all px-8 py-4 rounded-2xl font-bold flex items-center justify-center mx-auto group hover:border-purple-500/30"
           >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 group-hover:-translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
             </svg>
             Return Home
           </button>
        </div>

      </div>
    </section>
  );

  return (
    <div className="min-h-screen selection:bg-blue-500/50 scroll-smooth">
      <nav className="fixed top-0 w-full z-40 glass border-b border-white/5 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <button onClick={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} className="font-black text-2xl tracking-tighter gradient-text hover:opacity-80 transition-opacity">VEERABABU GIRAJALA.</button>
            <div className="hidden md:flex space-x-8 text-xs font-black tracking-widest uppercase text-slate-400">
              <button 
                onClick={() => {
                  setCurrentView('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className={`px-3 py-1.5 transition-all rounded-lg hover:text-blue-400 ${currentView === 'home' ? 'text-blue-500 bg-blue-500/5' : ''}`}
              >
                About
              </button>
              <button 
                onClick={() => {
                  setCurrentView('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className={`px-3 py-1.5 transition-all rounded-lg hover:text-blue-400 ${currentView === 'projects' ? 'text-blue-500 bg-blue-500/5' : ''}`}
              >
                Projects
              </button>
              <button 
                onClick={() => {
                  setCurrentView('certificates');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className={`px-3 py-1.5 transition-all rounded-lg hover:text-purple-400 ${currentView === 'certificates' ? 'text-purple-500 bg-purple-500/5' : ''}`}
              >
                Certificate
              </button>
              <button 
                onClick={() => navigateToSection('skills')} 
                className="px-3 py-1.5 hover:text-blue-400 transition-all"
              >
                Skills
              </button>
              <button 
                onClick={() => navigateToSection('contact')} 
                className="px-3 py-1.5 hover:text-blue-400 transition-all"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {currentView === 'home' ? <HomeView /> : currentView === 'projects' ? <ProjectsView /> : <CertificatesView />}
      </main>

      <footer className="py-16 px-4 border-t border-white/5 text-center bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-left">
              <h2 className="text-2xl font-black gradient-text mb-2">Veerababu Girajala</h2>
              <p className="text-slate-500 font-medium">Full Stack & Embedded Systems Engineer</p>
            </div>
            <div className="flex gap-4">
               {[
                 { h: PERSONAL_INFO.linkedin, l: 'LINKEDIN' },
                 { h: PERSONAL_INFO.github, l: 'GHTHUB' },
                  
                 
               ].map(s => (
                 <a key={s.l} href={s.h} target="_blank" className="w-30 h-30 rounded-full glass flex items-center justify-center font-black text-xs hover:bg-blue-600 transition-all">{s.l}</a>
               ))}
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}</p>
            <p>Built with <span className="text-red-500">❤</span> using React</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
