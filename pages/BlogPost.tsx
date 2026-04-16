
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Link2, Twitter, Linkedin, Check } from 'lucide-react';

const postModules = import.meta.glob('../posts/*.mdx', { eager: true }) as Record<
  string,
  { default: React.ComponentType; frontmatter: { title: string; date: string; tag: string } }
>;

const ShareButtons: React.FC<{ title: string }> = ({ title }) => {
  const [copied, setCopied] = useState(false);
  const url = window.location.href;

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mr-2">Share</span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank" rel="noreferrer"
        className="p-2.5 rounded-full border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-900 transition-all"
      >
        <Twitter size={15} />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank" rel="noreferrer"
        className="p-2.5 rounded-full border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-900 transition-all"
      >
        <Linkedin size={15} />
      </a>
      <button
        onClick={copyLink}
        className="p-2.5 rounded-full border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-900 transition-all"
      >
        {copied ? <Check size={15} className="text-green-500" /> : <Link2 size={15} />}
      </button>
    </div>
  );
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const entry = postModules[`../posts/${slug}.mdx`];

  if (!entry) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-slate-500">
        <p className="text-2xl font-bold mb-4">Post not found</p>
        <Link to="/blog" className="text-sm underline">Back to Blog</Link>
      </div>
    );
  }

  const Content = entry.default;
  const { title, date, tag } = entry.frontmatter;

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
      <Link to="/blog" className="inline-flex items-center space-x-2 text-slate-400 hover:text-slate-900 transition-colors mb-12 text-sm font-medium">
        <ArrowLeft size={16} />
        <span>Back to Blog</span>
      </Link>

      <div className="flex items-center space-x-4 mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
          {new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </span>
        <span className="w-1 h-1 rounded-full bg-slate-300" />
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{tag}</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-12">{title}</h1>

      <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-li:text-slate-600">
        <Content />
      </div>

      {/* Footer */}
      <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p className="text-slate-500 text-sm">
          Written by <span className="font-bold text-slate-900">Ali Murtaza</span>
        </p>
        <ShareButtons title={title} />
      </div>
    </div>
  );
};

export default BlogPost;
