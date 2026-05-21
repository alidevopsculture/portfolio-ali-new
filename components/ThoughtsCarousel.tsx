import React, { useEffect, useState } from 'react';
import { Copy, Heart, Share2 } from 'lucide-react';

const thoughts = [
  { text: "What you don't see today... will be impossible to ignore tomorrow.", tags: ['#Mindset', '#Growth'] },
  { text: "The quiet work writes a future no one expects.", tags: ['#Hustle', '#Patience'] },
  { text: "Built in silence. Revealed in time.", tags: ['#Discipline', '#Focus'] },
  { text: "What's hidden now... won't stay hidden for long.", tags: ['#Grind', '#Winning'] },
  { text: "The unseen grind decides what the world eventually sees.", tags: ['#Mindset', '#Success'] },
  { text: "Silence today. Impact tomorrow.", tags: ['#Hustle', '#Resilience'] },
  { text: "Not everything worth building is meant to be seen early.", tags: ['#Motivation', '#Journey'] },
  { text: "The work you overlook today becomes the story you admire tomorrow.", tags: ['#Discipline', '#Growth'] },
];

interface ThoughtsCarouselProps {
  className?: string;
}

const ThoughtsCarousel: React.FC<ThoughtsCarouselProps> = ({ className = '' }) => {
  const [current, setCurrent] = useState(0);
  const [liked, setLiked] = useState<boolean[]>(thoughts.map(() => false));
  const [likeCounts, setLikeCounts] = useState<number[]>([9800, 4200, 6100, 3300, 7700, 5500, 8200, 4900]);
  const [copied, setCopied] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const thought = thoughts[current];

  const handleLike = () => {
    const isLiked = liked[current];
    setLiked(prev => {
      const next = [...prev];
      next[current] = !next[current];
      return next;
    });
    setLikeCounts(prev => {
      const next = [...prev];
      next[current] += isLiked ? -1 : 1;
      return next;
    });
  };

  const handleShare = () => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const prev = () => setCurrent(index => (index - 1 + thoughts.length) % thoughts.length);
  const next = () => setCurrent(index => (index + 1) % thoughts.length);

  const finishDrag = () => {
    if (!isDragging) return;

    if (dragOffset > 60) {
      prev();
    } else if (dragOffset < -60) {
      next();
    }

    setIsDragging(false);
    setDragStartX(0);
    setDragOffset(0);
    setIsPaused(false);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest('button') || event.button !== 0) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    setIsPaused(true);
    setDragStartX(event.clientX);
    setDragOffset(0);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const offset = event.clientX - dragStartX;
    setDragOffset(Math.max(-140, Math.min(140, offset)));
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setCurrent(index => (index + 1) % thoughts.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className={className}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => !isDragging && setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => !isDragging && setIsPaused(false)}
    >
      <div className="border border-slate-200 rounded-xl bg-slate-50 p-4 md:p-6 overflow-hidden">
        <div
          className={`bg-white rounded-lg border border-slate-200 p-5 md:p-8 touch-pan-y select-none cursor-grab active:cursor-grabbing ${isDragging ? '' : 'transition-transform duration-300 ease-out'}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
          style={{ transform: `translateX(${dragOffset}px)` }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <img src="/img/home/IMG_8714.jpg" alt="Ali Murtaza" className="w-12 h-12 rounded-lg object-cover" draggable={false} />
              <div>
                <p className="font-bold text-slate-900 text-sm md:text-base">Ali Murtaza</p>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">Ali Murtaza | DevSecOps & Cloud Engineer</p>
              </div>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{current + 1}/{thoughts.length}</span>
          </div>

          <p className="text-slate-950 text-xl md:text-3xl leading-relaxed mb-8 min-h-[7rem] md:min-h-[5rem]">
            {thought.text}{' '}
            {thought.tags.map(tag => (
              <span key={tag} className="text-slate-500 text-base md:text-lg font-bold">{tag} </span>
            ))}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 transition-colors ${liked[current] ? 'text-slate-950' : 'hover:text-slate-950'}`}
              type="button"
            >
              <Heart size={19} fill={liked[current] ? 'currentColor' : 'none'} />
              <span>{likeCounts[current].toLocaleString()}</span>
            </button>
            <button
              onClick={handleShare}
              className={`flex items-center gap-2 transition-colors ${copied ? 'text-green-600' : 'hover:text-slate-950'}`}
              type="button"
            >
              {copied ? <Copy size={19} /> : <Share2 size={19} />}
              <span>{copied ? 'Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 px-1">
        <div className="flex gap-1.5">
          {thoughts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === current ? 'bg-slate-950 w-5' : 'bg-slate-200 w-1.5'}`}
              aria-label={`Show thought ${index + 1}`}
              type="button"
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={prev} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white transition-colors text-slate-400 hover:text-slate-900 border border-transparent hover:border-slate-200" type="button" aria-label="Previous thought">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button onClick={next} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white transition-colors text-slate-400 hover:text-slate-900 border border-transparent hover:border-slate-200" type="button" aria-label="Next thought">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThoughtsCarousel;
