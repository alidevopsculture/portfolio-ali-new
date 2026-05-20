
import React from 'react';
import { Youtube, Play, ArrowUpRight } from 'lucide-react';

const videos = [
  {
    id: 1,
    embedId: 'ZXnN690odrI',
    url: 'https://youtu.be/ZXnN690odrI',
    title: 'ArgoCD & Kubernetes: GitOps Continuous Delivery',
    description: 'A hands-on guide to setting up ArgoCD for GitOps-based continuous delivery on a Kubernetes cluster.',
    tag: 'Kubernetes',
  },
  {
    id: 2,
    embedId: 'Uz3q3hUu0qM',
    url: 'https://youtu.be/Uz3q3hUu0qM',
    title: 'Terraform for DevOps: Part 1',
    description: 'Get started with Terraform and learn how to provision and manage cloud infrastructure as code from scratch.',
    tag: 'Terraform',
  },
];

const CHANNEL_URL = 'https://www.youtube.com/@devopswithali';

const YouTube: React.FC = () => (
  <div className="min-h-screen bg-white pt-28 md:pt-36 pb-24">
    {/* Header */}
    <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 md:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-b border-slate-200 pb-12">
        <div className="lg:col-span-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">Training Library</p>
          <h1 className="text-4xl md:text-7xl serif text-slate-950 leading-tight">
            DevOps tutorials for practical implementation.
          </h1>
          <p className="text-slate-500 text-lg md:text-xl mt-6 max-w-3xl leading-relaxed">
            Structured video walkthroughs on Kubernetes, GitOps, Terraform, AWS, Docker, and CI/CD for engineers who need to build dependable delivery systems.
          </p>
        </div>
        <div className="lg:col-span-4 lg:flex lg:items-end lg:justify-end">
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-3 bg-slate-950 hover:bg-slate-800 text-white px-7 py-4 rounded-lg font-bold transition-all shrink-0 shadow-lg shadow-slate-900/10"
          >
            <Youtube size={20} />
            <span>Visit Channel</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </div>

    {/* Videos Grid */}
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {videos.map((video) => (
          <a
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noreferrer"
            className="group block border border-slate-200 rounded-xl overflow-hidden bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 transition-all"
          >
            <div className="aspect-video overflow-hidden relative bg-slate-100">
              <img
                src={`https://img.youtube.com/vi/${video.embedId}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-2xl">
                  <Play size={22} className="text-slate-900 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <span className="inline-flex mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 border border-slate-200 px-3 py-1 rounded-md">
                {video.tag}
              </span>
              <h2 className="font-bold text-slate-950 leading-snug group-hover:text-slate-600 transition-colors mb-3 text-xl">
                {video.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">{video.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 md:mt-20 bg-slate-950 rounded-xl py-12 md:py-16 px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 text-center md:text-left">
          <Youtube size={36} className="text-white mx-auto md:mx-0 mb-5" />
          <h2 className="text-3xl md:text-4xl serif text-white mb-4">More implementation guides are coming soon.</h2>
          <p className="text-slate-400 max-w-2xl">Subscribe for new tutorials on Kubernetes, AWS, CI/CD, automation, and production-oriented DevOps workflows.</p>
        </div>
        <div className="md:col-span-4 md:text-right">
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-3 bg-white hover:bg-slate-100 text-slate-950 px-8 py-4 rounded-lg font-bold transition-all"
          >
            <Youtube size={20} />
            <span>Subscribe</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default YouTube;
