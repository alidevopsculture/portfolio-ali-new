
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../constants';

const Profession: React.FC = () => {
  return (
    <div className="pt-28 md:pt-36 pb-24">
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end border-b border-slate-200 pb-12">
          <div className="lg:col-span-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">Professional Work</p>
            <h1 className="text-4xl md:text-7xl serif mb-8 leading-tight">Cloud, DevOps, and automation delivery.</h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-3xl leading-relaxed">
              A curated view of infrastructure projects across Kubernetes, AWS, CI/CD, containers, and automation, structured like an engineering capability portfolio.
            </p>
          </div>
          <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-3">
            {['Infrastructure as Code', 'Container Platforms', 'Release Automation'].map(item => (
              <div key={item} className="flex items-center gap-3 border border-slate-200 rounded-lg px-4 py-3 bg-white">
                <CheckCircle2 size={18} className="text-slate-900 shrink-0" />
                <span className="text-xs md:text-sm font-bold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project) => (
            <Link key={project.id} to={`/case-study/${project.id}`} className="group flex flex-col border border-slate-200 rounded-xl bg-white overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 transition-all">
              <div className="aspect-[16/10] overflow-hidden relative bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="bg-white/90 backdrop-blur px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-slate-800">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">{project.category}</p>
                <h2 className="text-xl md:text-2xl serif mb-4 group-hover:text-slate-600 transition-colors leading-tight">{project.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900">
                  Technical Details
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profession;
