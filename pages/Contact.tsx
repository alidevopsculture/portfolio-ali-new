
import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append('access_key', '4a8921c2-b327-4f17-9011-db2ff076c3e6');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      <div className="lg:col-span-6 text-center lg:text-left">
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Contact</p>
        <h1 className="text-4xl md:text-7xl serif mb-8 leading-tight">
          Discuss cloud architecture, DevOps delivery, or a role.
        </h1>
        <p className="text-lg md:text-xl text-slate-500 mb-10 md:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Share the business problem, platform context, or hiring requirement. I will respond with a clear next step and relevant technical context.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {['AWS and Kubernetes', 'CI/CD Automation', 'Remote Friendly'].map(item => (
            <div key={item} className="border border-slate-200 rounded-lg p-4 flex items-center gap-3 bg-white text-left">
              <CheckCircle2 size={18} className="text-slate-900 shrink-0" />
              <span className="text-xs font-bold text-slate-700">{item}</span>
            </div>
          ))}
        </div>

        <div className="space-y-5">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">Email Me</p>
            <a href="mailto:connect.alimurtaza@gmail.com" className="text-base md:text-lg font-bold text-slate-900 hover:text-slate-600 transition-colors flex items-center space-x-3 break-all">
              <Mail size={20} className="shrink-0" />
              <span>connect.alimurtaza@gmail.com</span>
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">Location</p>
            <div className="flex items-center space-x-3 text-slate-900">
              <MapPin size={20} />
              <span className="font-bold text-base md:text-lg">Bangalore, India / Remote</span>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 space-y-6">
        <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Professional Profiles</p>
          <div className="space-y-4">
            <a href="https://linkedin.com/in/alimurtazadevops/" target="_blank" rel="noreferrer" className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-all border border-slate-200">
              <Linkedin size={24} className="text-slate-900" />
              <div>
                <p className="font-bold text-slate-900">LinkedIn</p>
                <p className="text-xs text-slate-500">Connect professionally</p>
              </div>
            </a>
            <a href="https://github.com/alidevopsculture" target="_blank" rel="noreferrer" className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-all border border-slate-200">
              <Github size={24} className="text-slate-900" />
              <div>
                <p className="font-bold text-slate-900">GitHub</p>
                <p className="text-xs text-slate-500">View my code</p>
              </div>
            </a>
          </div>

          <div className="pt-8 mt-8 border-t border-slate-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Availability</p>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-sm font-bold text-slate-900">Open to new opportunities</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Send a Message</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input required name="name" type="text" placeholder="Your Name" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-slate-900 transition-all text-sm" />
            <input required name="email" type="email" placeholder="Your Email" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-slate-900 transition-all text-sm" />
            <textarea required name="message" rows={4} placeholder="Project, role, or architecture context" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-slate-900 transition-all text-sm"></textarea>
            <button type="submit" disabled={status === 'loading'} className="w-full bg-slate-950 text-white py-3 rounded-lg font-bold flex items-center justify-center space-x-2 hover:bg-slate-800 transition-all disabled:opacity-50">
              <Send size={16} />
              <span>{status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}</span>
            </button>
            {status === 'error' && <p className="text-red-500 text-xs text-center">Failed to send. Please email directly.</p>}
          </form>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">What I Can Help With</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
              <div>
                <p className="font-bold text-slate-900">Cloud Infrastructure</p>
                <p className="text-sm text-slate-500">AWS, Azure, GCP architecture & migration</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
              <div>
                <p className="font-bold text-slate-900">CI/CD Pipelines</p>
                <p className="text-sm text-slate-500">Automated deployment & testing workflows</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
              <div>
                <p className="font-bold text-slate-900">Container Orchestration</p>
                <p className="text-sm text-slate-500">Kubernetes, Docker, microservices</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
              <div>
                <p className="font-bold text-slate-900">Infrastructure as Code</p>
                <p className="text-sm text-slate-500">Terraform, CloudFormation, Ansible</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
              <div>
                <p className="font-bold text-slate-900">Web Development</p>
                <p className="text-sm text-slate-500">React, Node, Python</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
              <div>
                <p className="font-bold text-slate-900">Custom Software Development</p>
                <p className="text-sm text-slate-500">AI and custom feature development</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-950 text-white p-6 md:p-8 rounded-xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Response Time</p>
          <p className="text-2xl serif mb-2">Usually within 24 hours</p>
          <p className="text-sm text-slate-400">I aim to respond to all inquiries promptly</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
