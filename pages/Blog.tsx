
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
}

const postModules = import.meta.glob('../posts/*.mdx', { eager: true }) as Record<
  string,
  { frontmatter: Omit<PostMeta, 'slug'> }
>;

const posts: PostMeta[] = Object.entries(postModules)
  .map(([path, mod]) => ({
    slug: path.replace('../posts/', '').replace('.mdx', ''),
    ...mod.frontmatter,
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const Blog: React.FC = () => (
  <div className="min-h-screen bg-white pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
    <div className="mb-16">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Blog</p>
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
        My Thoughts &<br />Writings
      </h1>
    </div>

    <div className="divide-y divide-slate-100">
      {posts.map((post) => (
        <Link to={`/blog/${post.slug}`} key={post.slug} className="block py-10 group">
          <div className="flex items-center space-x-4 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{post.tag}</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-600 transition-colors">
            {post.title}
          </h2>
          <p className="text-slate-500 leading-relaxed">{post.excerpt}</p>
        </Link>
      ))}
    </div>
  </div>
);

export default Blog;
