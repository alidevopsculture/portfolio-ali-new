
import React from 'react';
import { Youtube, Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    embedId: 'ZXnN690odrI',
    url: 'https://youtu.be/ZXnN690odrI',
    title: 'ArgoCD & Kubernetes — GitOps Continuous Delivery',
    description: 'A hands-on guide to setting up ArgoCD for GitOps-based continuous delivery on a Kubernetes cluster.',
    tag: 'Kubernetes',
  },
  {
    id: 2,
    embedId: 'Uz3q3hUu0qM',
    url: 'https://youtu.be/Uz3q3hUu0qM',
    title: 'Terraform for DevOps — Part 1',
    description: 'Get started with Terraform — learn how to provision and manage cloud infrastructure as code from scratch.',
    tag: 'Terraform',
  },
];

const CHANNEL_URL = 'https://www.youtube.com/@devopswithali';

const YouTube: React.FC = () => (
  <div className="min-h-screen bg-white pt-32 pb-24">
    {/* Header */}
    <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">YouTube</p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            DevOps <span className="italic font-light">Tutorials</span>
          </h1>
          <p className="text-slate-500 text-lg mt-4 max-w-xl">
            Practical, no-fluff tutorials on Kubernetes, AWS, Docker, Terraform, and CI/CD , built for engineers who want to ship faster.
          </p>
        </div>
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all shrink-0"
        >
          <Youtube size={20} />
          <span>Subscribe</span>
        </a>
      </div>
    </div>

    {/* Videos Grid */}
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <a
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            {/* Thumbnail */}
            <div className="aspect-video rounded-[1.5rem] overflow-hidden mb-5 relative">
              <img
                src={`https://img.youtube.com/vi/${video.embedId}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <Play size={22} className="text-slate-900 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex items-start space-x-3">
              <span className="shrink-0 mt-1 text-[10px] font-bold uppercase tracking-widest text-red-500 bg-red-50 px-2.5 py-1 rounded-full">
                {video.tag}
              </span>
              <div>
                <h3 className="font-bold text-slate-900 leading-snug group-hover:text-slate-600 transition-colors mb-1 text-lg">
                  {video.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{video.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center bg-slate-900 rounded-[2.5rem] py-16 px-8">
        <Youtube size={40} className="text-red-500 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">More tutorials Soon</h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">Subscribe to get notified when new DevOps tutorials drop , Kubernetes, AWS, CI/CD and more.</p>
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold transition-all"
        >
          <Youtube size={20} />
          <span>Visit Channel</span>
        </a>
      </div>
    </div>
  </div>
);

export default YouTube;
