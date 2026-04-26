
import React, { useState } from 'react';
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

const quotes = [
  { text: "What you don't see today… will be impossible to ignore tomorrow.", tags: ['#Mindset', '#Growth'] },
  { text: "The quiet work writes a future no one expects.", tags: ['#Hustle', '#Patience'] },
  { text: "Built in silence. Revealed in time.", tags: ['#Discipline', '#Focus'] },
  { text: "What's hidden now… won't stay hidden for long.", tags: ['#Grind', '#Winning'] },
  { text: "The unseen grind decides what the world eventually sees.", tags: ['#Mindset', '#Success'] },
  { text: "Silence today. Impact tomorrow.", tags: ['#Hustle', '#Resilience'] },
  { text: "Not everything worth building is meant to be seen early.", tags: ['#Motivation', '#Journey'] },
  { text: "The work you overlook today becomes the story you admire tomorrow.", tags: ['#Discipline', '#Growth'] },
];

const Blog: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [liked, setLiked] = useState<boolean[]>(quotes.map(() => false));
  const [likeCounts, setLikeCounts] = useState<number[]>([9800, 4200, 6100, 3300, 7700, 5500, 8200, 4900]);
  const [copied, setCopied] = useState(false);

  const handleLike = () => {
    const isLiked = liked[current];
    setLiked(prev => { const n = [...prev]; n[current] = !n[current]; return n; });
    setLikeCounts(prev => { const n = [...prev]; n[current] += isLiked ? -1 : 1; return n; });
  };

  const handleShare = () => {
    navigator.clipboard.writeText('http://localhost:3000/blog').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const prev = () => setCurrent(i => (i - 1 + quotes.length) % quotes.length);
  const next = () => setCurrent(i => (i + 1) % quotes.length);

  const q = quotes[current];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="mb-16">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Blog</p>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
          My Thoughts &<br />Writings
        </h1>
      </div>

      {/* Quote Carousel */}
      <div className="mb-16">
        <div className="p-[2px] rounded-[1.5rem] bg-gradient-to-r from-blue-500 to-blue-400">
          <div className="bg-white rounded-[1.4rem] p-6">
            {/* Header */}
            <div className="flex items-center mb-3">
              <div className="flex items-center gap-3">
                <img src="/img/home/IMG_8714.jpg" alt="Ali Murtaza" className="w-12 h-12 rounded-full object-cover" />
                <div className="flex items-center gap-1">
                  <span className="font-bold text-slate-900 text-sm">Ali Murtaza</span>
                  <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span className="text-slate-400 text-sm">&nbsp;@alimurtazadevops</span>
                </div>
              </div>
            </div>

            {/* Tweet text */}
            <p className="text-slate-900 text-base leading-relaxed mb-3 min-h-[3rem]">
              {q.text}{' '}
              {q.tags.map(tag => <span key={tag} className="text-blue-500">{tag} </span>)}
            </p>

            {/* Actions */}
            <div className="flex items-center gap-8 text-slate-400 text-sm">
              <button
                onClick={handleLike}
                className={`flex items-center gap-1.5 transition-colors ${liked[current] ? 'text-red-500' : 'hover:text-red-500'}`}
              >
                <svg className="w-5 h-5" fill={liked[current] ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"/>
                </svg>
                <span>{likeCounts[current].toLocaleString()}</span>
              </button>
              <button
                onClick={handleShare}
                className={`flex items-center gap-1.5 transition-colors ${copied ? 'text-green-500' : 'hover:text-blue-500'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/>
                </svg>
                <span>{copied ? 'Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dots + Nav outside the box */}
        <div className="flex items-center justify-between mt-3 px-1">
          <div className="flex gap-1.5">
            {quotes.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-blue-500 w-4' : 'bg-slate-200 w-1.5'}`} />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={prev} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-900">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
            </button>
            <span className="text-xs text-slate-400 font-bold">{current + 1}/{quotes.length}</span>
            <button onClick={next} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-900">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
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
};

export default Blog;
