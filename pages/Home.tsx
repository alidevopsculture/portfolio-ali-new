
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Cloud, Activity, Layers3, ShieldCheck } from 'lucide-react';
import { TECH_STACK, SKILLS, PROJECTS, CASE_STUDIES } from '../constants';
import ThoughtsCarousel from '../components/ThoughtsCarousel';

const postModules = import.meta.glob('../posts/*.mdx', { eager: true }) as Record<
  string,
  { frontmatter: { title: string; date: string; tag: string; excerpt: string } }
>;

const blogPosts = Object.entries(postModules)
  .map(([path, mod]) => ({
    slug: path.replace('../posts/', '').replace('.mdx', ''),
    ...mod.frontmatter,
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

const Home: React.FC = () => {
  const proofPoints = [
    { value: '8+', label: 'production apps automated' },
    { value: '70%', label: 'faster delivery cycles' },
    { value: '24/7', label: 'reliability mindset' },
  ];

  const operatingPrinciples = [
    { icon: ShieldCheck, title: 'Reliability first', copy: 'Health checks, repeatable releases, and infrastructure designed for recovery.' },
    { icon: Layers3, title: 'Cloud-native systems', copy: 'Kubernetes, Docker, Terraform, and AWS patterns that scale cleanly.' },
    { icon: Activity, title: 'Automation mindset', copy: 'CI/CD pipelines and scripts that remove operational drag from teams.' },
  ];

  const heroHighlights = [
    'DevOps Engineer',
    'AWS Cloud',
    'Kubernetes',
    'Docker',
    'Terraform',
    'CI/CD Automation',
    'Jenkins',
    'GitHub Actions',
    'Linux',
    'Production Reliability',
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16 lg:min-h-[calc(100vh-5rem)] lg:flex lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
          <div className="lg:col-span-7 lg:max-w-[720px]">
            <div className="relative max-w-xl overflow-hidden border border-slate-200 bg-slate-50 rounded-full mb-7 py-2.5">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10" />
              <div className="hero-marquee flex w-max items-center gap-6">
                {[...heroHighlights, ...heroHighlights].map((item, index) => (
                  <div key={`${item}-${index}`} className="flex items-center gap-3 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.22em] text-slate-500 whitespace-nowrap">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,5.8rem)] serif leading-[1.02] mb-8 text-slate-950 w-full">
              Enterprise-grade cloud infrastructure for modern teams.
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Hi, I'm Ali Murtaza. I design resilient AWS, Kubernetes, and CI/CD systems that help product teams ship with speed, confidence, and fewer operational surprises.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/profession" className="bg-slate-950 text-white px-7 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all text-sm md:text-base inline-flex items-center gap-2 shadow-lg shadow-slate-900/10">
                <span>View Selected Work</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="border border-slate-300 text-slate-900 px-7 py-4 rounded-lg font-semibold hover:border-slate-900 hover:bg-slate-50 transition-all text-sm md:text-base">
                Collaborate
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-2xl border-y border-slate-200 py-6">
              {proofPoints.map((point) => (
                <div key={point.label}>
                  <p className="text-2xl md:text-3xl serif text-slate-950">{point.value}</p>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 leading-relaxed">{point.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 lg:self-center">
            <div className="relative lg:max-w-[500px] lg:ml-auto lg:-mt-10">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 shadow-2xl shadow-slate-900/10">
                <img
                  src="/img/home/IMG_8721.jpg"
                  alt="Ali Murtaza"
                  className="w-full h-full object-cover scale-110 -translate-y-10 lg:-translate-y-14"
                />
              </div>
              <div className="absolute -bottom-6 left-4 right-4 bg-white/95 backdrop-blur border border-slate-200 rounded-xl p-5 shadow-xl shadow-slate-900/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">Core Stack</p>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.map(tech => (
                    <span key={tech} className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-md">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {operatingPrinciples.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="border border-slate-200 bg-white rounded-xl p-6 md:p-7 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 transition-all">
              <div className="w-11 h-11 rounded-lg bg-slate-950 text-white flex items-center justify-center mb-6">
                <Icon size={20} />
              </div>
              <h2 className="text-lg font-bold text-slate-950 mb-3">{title}</h2>
              <p className="text-sm leading-relaxed text-slate-500">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Thoughts Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Thoughts</p>
            <h2 className="text-4xl md:text-5xl serif leading-tight mb-5">Field notes from the build journey.</h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Short reflections on discipline, patience, and the quiet work behind visible outcomes.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ThoughtsCarousel />
          </div>
        </div>
      </section>

      {/* Blog Teaser Section */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">From the Blog</p>
            <h2 className="text-4xl md:text-6xl serif">Engineering <span className="italic text-slate-500">insights</span></h2>
          </div>
          <Link to="/blog" className="hidden md:inline-flex items-center space-x-2 font-bold text-slate-900 hover:text-slate-600 transition-colors border-b-2 border-slate-900 pb-1">
            <span>All Posts</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="group h-full border border-slate-200 rounded-xl bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300">
              <div className="h-full p-7 md:p-8 flex flex-col">
                <div className="flex items-center space-x-3 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{post.tag}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-600 transition-colors leading-snug flex-1">{post.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6">{post.excerpt}</p>
                <span className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:translate-x-1 transition-transform">
                  <span>Read More</span>
                  <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link to="/blog" className="inline-flex items-center space-x-2 font-bold text-slate-900 border-b-2 border-slate-900 pb-1">
            <span>All Posts</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">About Me</p>
            <h2 className="text-4xl md:text-5xl serif leading-tight">
              Building the <span className="italic">infrastructure</span> that powers innovation
            </h2>
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                I'm Ali Murtaza, a DevOps Engineer specializing in cloud-native architectures and automation. 
                Based in Bangalore, India. I help teams ship better software faster through 
                resilient infrastructure and intelligent CI/CD pipelines.
              </p>
              <p>
                My expertise spans AWS cloud services, Kubernetes orchestration, Docker containerization, 
                and Infrastructure as Code with Terraform. I've successfully deployed production-grade 
                applications ranging from 3-tier web platforms to microservices architectures, always 
                prioritizing scalability, security, and automation.
              </p>
              <p>
                Beyond DevOps, I explore AI-driven development with tools like Amazon Q, accelerating 
                full-stack projects while maintaining enterprise-grade quality. When I'm not automating 
                infrastructure, you'll find me capturing street photography or designing minimalist branding.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-slate-100 rounded-md text-sm font-semibold text-slate-700">AWS Certified</span>
              <span className="px-4 py-2 bg-slate-100 rounded-md text-sm font-semibold text-slate-700">Kubernetes Expert</span>
              <span className="px-4 py-2 bg-slate-100 rounded-md text-sm font-semibold text-slate-700">Open to Remote</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200">
              <img 
                src="/img/home/IMG_8714.jpg" 
                alt="Ali Murtaza" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-2 md:-left-6 bg-white p-6 rounded-xl shadow-xl shadow-slate-900/10 border border-slate-200 max-w-xs">
              <p className="text-sm font-bold text-slate-900 mb-2">Currently Seeking</p>
              <p className="text-xs text-slate-600">DevOps Engineer / Cloud Engineer roles with focus on Kubernetes, AWS, and automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="bg-slate-50 py-20 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          <div className="lg:col-span-4 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl serif mb-6">Technical Expertise</h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              My core strengths lie at the intersection of developer productivity and system reliability. I specialize in cloud-native ecosystems and Infrastructure as Code.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 hover:shadow-lg hover:shadow-slate-900/5 transition-all text-center lg:text-left">
                <p className="text-slate-900 font-bold mb-1 text-sm md:text-base">{skill.name}</p>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-12 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16 text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Selected Work</p>
            <h2 className="text-4xl md:text-6xl serif">Selected Engineering Work</h2>
          </div>
          <p className="text-slate-500 max-w-md text-base md:text-lg">
            A glimpse into the complex engineering challenges I've solved using modern automation tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {PROJECTS.slice(0, 3).map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <Link to={`/case-study/${project.id}`}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 relative shadow-sm border border-slate-200">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-white text-slate-900 px-6 py-3 rounded-lg font-bold shadow-xl text-sm">
                      View Project
                    </span>
                  </div>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">{project.category}</p>
                <h3 className="text-xl md:text-2xl serif font-medium group-hover:text-slate-600 transition-colors leading-snug">{project.title}</h3>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Link to="/profession" className="inline-flex items-center space-x-2 text-slate-900 font-bold hover:text-slate-600 transition-colors py-4">
            <span>Explore Full Professional Work</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-slate-50 py-20 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-20 text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Deep Dives</p>
            <h2 className="text-4xl md:text-6xl serif italic">In-depth Case Studies</h2>
          </div>

          <div className="space-y-24 md:space-y-32">
            {CASE_STUDIES.map((study, index) => (
              <div key={study.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 md:gap-16 items-center`}>
                <div className="flex-1 w-full">
                  <Link to={`/case-study/${study.id}`} className="block">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-white">
                      <img src={study.image} alt={study.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                    </div>
                  </Link>
                </div>
                <div className="flex-1 space-y-6 text-center lg:text-left">
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {study.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-white border border-slate-200 rounded-md text-[9px] font-bold text-slate-500 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                  <p className="text-base md:text-lg font-medium text-slate-400">{study.subtitle}</p>
                  <h3 className="text-3xl md:text-4xl serif leading-tight">{study.title}</h3>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">{study.description}</p>
                  <Link to={`/case-study/${study.id}`} className="inline-flex items-center space-x-2 font-bold hover:translate-x-2 transition-transform py-2 border-b-2 border-slate-900 mx-auto lg:mx-0">
                    <span>Read Full Case Study</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Contact Form Home Section */}
      <section className="bg-slate-50 py-20 md:py-32 mt-20 md:mt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div className="text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Get in Touch</p>
            <h2 className="text-4xl md:text-6xl serif mb-8 leading-tight">
              Let's build reliable systems for real business impact.
            </h2>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-12 max-w-md mx-auto lg:mx-0">
              Whether you have a question about my work or just want to discuss cloud architecture, I'd love to hear from you.
            </p>
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <div className="flex items-center space-x-4 bg-white p-6 rounded-xl border border-slate-200 w-full md:w-fit shadow-sm">
                <div className="w-10 h-10 bg-slate-950 flex items-center justify-center rounded-lg text-white"><Globe size={20} /></div>
                <div className="text-left">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Me</p>
                   <a href="mailto:connect.alimurtaza@gmail.com" className="text-sm md:text-base font-bold text-slate-900 break-all md:break-normal">connect.alimurtaza@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white p-6 rounded-xl border border-slate-200 w-full md:w-fit shadow-sm">
                <div className="w-10 h-10 bg-slate-950 flex items-center justify-center rounded-lg text-white"><Cloud size={20} /></div>
                <div className="text-left">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Location</p>
                   <p className="text-sm md:text-base font-bold text-slate-900">Bangalore, India / Remote</p>
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden group border border-slate-200 relative z-0 shadow-2xl shadow-slate-900/10">
            <img 
              src="/img/home/Hero.jpg" 
              alt="Cloud Infrastructure" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Internal Form Component for reusability
const ContactForm: React.FC = () => {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Using Web3Forms for the contact form
    formData.append('access_key', 'YOUR_ACCESS_KEY_HERE');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <input 
          required 
          name="name" 
          type="text" 
          placeholder="Name" 
          className="bg-slate-50 px-6 md:px-8 py-4 md:py-5 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all text-slate-900 placeholder:text-slate-400 text-sm md:text-base" 
        />
        <input 
          required 
          name="email" 
          type="email" 
          placeholder="Email" 
          className="bg-slate-50 px-6 md:px-8 py-4 md:py-5 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all text-slate-900 placeholder:text-slate-400 text-sm md:text-base" 
        />
      </div>
      <textarea 
        required 
        name="message" 
        rows={4} 
        placeholder="Your Message" 
        className="w-full bg-slate-50 px-6 md:px-8 py-4 md:py-5 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all text-slate-900 placeholder:text-slate-400 text-sm md:text-base"
      ></textarea>
      <button 
        disabled={status === 'loading'}
        className="w-full bg-slate-900 text-white py-5 md:py-6 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95 disabled:opacity-50 text-sm md:text-base"
      >
        {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
      </button>
      {status === 'error' && <p className="text-red-500 text-center font-bold text-xs md:text-sm">Failed to send. Try again.</p>}
    </form>
  );
};

export default Home;
