import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  DollarSign, 
  ShoppingBag, 
  FileText, 
  Gift, 
  Sparkles, 
  TrendingUp, 
  CheckCircle 
} from 'lucide-react';
import './agency.css';

export default function ForBrandsPage() {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6 text-red-500" />,
      title: "Transparent Rates Up Front",
      desc: "Say goodbye to ghosting and guesswork. Access real pricing insight to budget smarter and lock in collabs fast."
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-purple-500" />,
      title: "Add to Cart & Order",
      desc: "Browse creator rates, select deliverables, and place campaign orders instantly in under 60 seconds."
    },
    {
      icon: <FileText className="w-6 h-6 text-pink-500" />,
      title: "Media Kits at Hand",
      desc: "Get instant access to creators' verified stats, engagement metrics, and completed brand partnerships."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-500" />,
      title: "Flexible Payments",
      desc: "Driplens secures your budget. Creators are paid only when milestones are approved, protecting your capital."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030205] text-white overflow-hidden relative selection:bg-red-500 selection:text-white font-sans flex flex-col justify-between">
      <Helmet>
        <title>Driplens — For Brands</title>
        <meta name="description" content="Discover how Driplens connects visionary brands with world-class creators." />
      </Helmet>

      {/* ── Background Glows ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-100px] left-[-200px] w-[600px] h-[600px] bg-gradient-to-r from-red-600/20 to-purple-600/10 blur-[130px]" />
        <div className="absolute bottom-[100px] right-[-200px] w-[600px] h-[600px] bg-gradient-to-r from-purple-600/20 to-pink-500/10 blur-[150px]" />
        <div className="absolute top-[30%] left-[10%] w-[1px] h-[600px] bg-gradient-to-b from-transparent via-red-500/20 to-transparent rotate-[30deg] blur-[2px]" />
      </div>

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#030205]/40 border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter uppercase text-white flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-purple-600 animate-pulse" />
          DRIPLENS
        </Link>
        <nav className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
          <Link to="/for-brands" className="text-white hover:text-white transition">For Brands</Link>
          <Link to="/for-creators" className="hover:text-white transition">For Creators</Link>
        </nav>
        <div className="flex gap-4">
          <Link to="/auth?role=brand" className="px-5 py-2 rounded-full font-black uppercase text-[10px] tracking-widest bg-gradient-to-r from-red-500 to-purple-600 hover:opacity-95 shadow-[0_0_15px_rgba(239,68,68,0.3)] transition text-white">
            Get Started
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <main className="relative z-10 pt-32 pb-16 px-6 md:px-12 max-w-6xl w-full mx-auto flex flex-col items-center">
        <div className="text-center max-w-4xl mt-12 mb-20">
          <span className="px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
            ⚡ DRIPLENS FOR BRANDS
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-white leading-none mb-6">
            WHERE VISIONARY BRANDS <br/>
            MEET WORLD CLASS CREATORS
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Join the platform where ambitious brands team up with top-tier creators to launch bold ideas, craft authentic content, and drive real impact.
          </p>
          <Link to="/auth?role=brand" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white font-black uppercase text-xs tracking-widest rounded-full shadow-[0_0_25px_rgba(239,68,68,0.4)] hover:scale-105 transition">
            Sign Up as a Brand <ArrowRight size={14} />
          </Link>
        </div>

        {/* ── Transparent Rates ── */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 border-t border-white/5">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
              Close deals faster with transparent creator rates
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed font-bold">
              Say goodbye to ghosting and guesswork. Our database gives you real insight into creators' pricing so you can move faster, budget smarter, and spend where it counts. Whether you're booking a macro or micro—know the cost upfront.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                <div className="mb-4">{f.icon}</div>
                <h3 className="font-black text-sm uppercase text-white mb-2">{f.title}</h3>
                <p className="text-xs text-gray-400 font-bold leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Product Gifting ── */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 border-t border-white/5">
          <div className="order-2 lg:order-1 bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 blur-2xl" />
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Gifting Statistics</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Opted-in Pool</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-black text-white">4x Engagement</div>
                  <p className="text-xs text-gray-400 font-bold">Product gifting leads to 4x the engagement of traditional brand content.</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-purple-400">92% Openness</div>
                  <p className="text-xs text-gray-400 font-bold">Of creators say they're open to product gifting if the brand is a good fit.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
              Trade Product for Promotion. No Cold Outreach Needed.
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed font-bold">
              These aren't cold leads. They're creators who've raised their hand, ready to promote your brand in exchange for your product or service. It's fast, low-lift, and surprisingly effective.
            </p>
            <Link to="/auth?role=brand" className="inline-flex items-center gap-2 text-xs font-black uppercase text-red-500 tracking-widest hover:underline">
              Get Started Now <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* ── pipeline to big creative ── */}
        <section className="w-full text-center py-20 border-t border-white/5">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 mb-6">
            WE'RE NOT JUST A PLATFORM. <br className="hidden sm:inline"/>
            WE'RE A PIPELINE TO BIG CREATIVE.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12 font-bold">
            Creators aren't just making content—they're pitching films, web series, stunts, and global projects. We built a place where brands can back those ideas, plug in strategically, and be part of culture-making stories from the ground up.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-black text-base uppercase text-white mb-2">Brand as Creative Partner</h3>
              <p className="text-xs text-gray-400 font-bold leading-relaxed">
                You're not just sponsoring—you're shaping the story. Strategic integration puts your brand at the heart of the content.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-black text-base uppercase text-white mb-2">Ideas That Don't Blend In</h3>
              <p className="text-xs text-gray-400 font-bold leading-relaxed">
                From docuseries to live events to viral social formats, these aren't templated collabs. They're creative concepts built to break through.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 py-8 px-6 md:px-12 border-t border-white/5 bg-[#030205]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-red-500 to-purple-600" />
            <span>DRIPLENS © 2026. All rights reserved.</span>
          </div>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
