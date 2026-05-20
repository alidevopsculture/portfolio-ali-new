
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ThoughtsCarousel from '../components/ThoughtsCarousel';

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

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-28 md:pt-36 pb-24">
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-14 md:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-b border-slate-200 pb-12">
          <div className="lg:col-span-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">Engineering Insights</p>
            <h1 className="text-4xl md:text-7xl serif text-slate-950 leading-tight mb-6">
              Practical writing on cloud delivery and systems thinking.
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-3xl">
              Notes, tutorials, and implementation guides for DevOps engineers working with Kubernetes, CI/CD, infrastructure automation, and reliability.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end lg:items-end">
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              <div className="border border-slate-200 rounded-lg p-4">
                <p className="text-3xl serif text-slate-950">{posts.length}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Articles</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <p className="text-3xl serif text-slate-950">DevOps</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Carousel */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <ThoughtsCarousel />
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {posts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="group block border border-slate-200 rounded-xl p-6 md:p-7 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 transition-all">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{post.tag}</span>
              </div>
              <h2 className="text-xl md:text-2xl serif text-slate-950 mb-4 group-hover:text-slate-600 transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm mb-6">{post.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900">
                Read Article
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
