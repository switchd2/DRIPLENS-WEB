import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  DollarSign, 
  Zap, 
  Layers, 
  Gift, 
  Sparkles, 
  TrendingUp, 
  CheckCircle 
} from 'lucide-react';
import './agency.css';

export default function ForCreatorsPage() {
  const steps = [
    {
      icon: <Layers className="w-6 h-6 text-purple-500" />,
      title: "1. Sign Up for Free",
      desc: "Create your profile, import your channels, and complete your verification in minutes."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-red-500" />,
      title: "2. List Your Rates",
      desc: "Specify exact deliverables (reels, posts, stories) and set your custom starting budgets."
    },
    {
      icon: <Zap className="w-6 h-6 text-pink-500" />,
      title: "3. Manage Orders Easily",
      desc: "Receive pre-paid collaboration orders from verified brands directly in your inbox."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-emerald-500" />,
      title: "4. Secure Payments",
      desc: "Payouts are automated and deposited directly to your bank account upon brief completion."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030205] text-white overflow-hidden relative selection:bg-purple-500 selection:text-white font-sans flex flex-col justify-between">
      <Helmet>
        <title>Driplens — For Creators</title>
        <meta name="description" content="Discover how Driplens helps creators build portfolios, pitch ideas, and get paid." />
      </Helmet>

      {/* ── Background Glows ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-100px] left-[-200px] w-[600px] h-[600px] bg-gradient-to-r from-purple-600/20 to-pink-500/10 blur-[130px]" />
        <div className="absolute bottom-[100px] right-[-200px] w-[600px] h-[600px] bg-gradient-to-r from-red-600/20 to-purple-600/10 blur-[150px]" />
        <div className="absolute top-[40%] right-[10%] w-[1px] h-[600px] bg-gradient-to-b from-transparent via-purple-500/20 to-transparent rotate-[-30deg] blur-[2px]" />
      </div>

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#030205]/40 border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter uppercase text-white flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-purple-600 animate-pulse" />
          DRIPLENS
        </Link>
        <nav className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
          <Link to="/for-brands" className="hover:text-white transition">For Brands</Link>
          <Link to="/for-creators" className="text-white hover:text-white transition">For Creators</Link>
        </nav>
        <div className="flex gap-4">
          <Link to="/auth?role=creator" className="px-5 py-2 rounded-full font-black uppercase text-[10px] tracking-widest bg-gradient-to-r from-red-500 to-purple-600 hover:opacity-95 shadow-[0_0_15px_rgba(239,68,68,0.3)] transition text-white">
            Get Started
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <main className="relative z-10 pt-32 pb-16 px-6 md:px-12 max-w-6xl w-full mx-auto flex flex-col items-center">
        <div className="text-center max-w-4xl mt-12 mb-20">
          <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
            ⚡ DRIPLENS FOR CREATORS
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-white leading-none mb-6">
            YOUR SPACE TO GET <br/>
            DISCOVERED AND PAID
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Driplens gives you the tools to build your brand, pitch creative ideas, and land paid collaborations—all in one clean platform built for creators first.
          </p>
          <Link to="/auth?role=creator" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black uppercase text-xs tracking-widest rounded-full shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:scale-105 transition">
            Sign Up as a Creator <ArrowRight size={14} />
          </Link>
        </div>

        {/* ── Rates and Listings ── */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 border-t border-white/5">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
              List your rates. Look pro. Land deals.
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed font-bold">
              Whether you're posting on Instagram, YouTube, or TikTok, Driplens makes it easy to set clear rates, outline deliverables, and showcase your services—so brands know exactly what you offer and what it costs. One profile. Multiple platforms. Zero confusion.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                <div className="mb-4">{s.icon}</div>
                <h3 className="font-black text-sm uppercase text-white mb-2">{s.title}</h3>
                <p className="text-xs text-gray-400 font-bold leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Product Gifting ── */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 border-t border-white/5">
          <div className="order-2 lg:order-1 bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-2xl" />
            <h3 className="font-black text-sm uppercase text-white border-b border-white/5 pb-4 mb-4">Gifting Benefits</h3>
            <ul className="space-y-4 text-xs font-bold text-gray-400">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1" />
                <span>Receive products you love — no strings attached.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1" />
                <span>Create content on your terms, in your own signature style.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1" />
                <span>Grow your portfolio and attract premium sponsored deals.</span>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
              Get Free Products in Exchange for Content
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed font-bold">
              Product gifting is your chance to try new products, build authentic relationships with brands, and get rewarded for your creativity — without negotiating upfront rates. If a brand loves your content, it could lead to paid collabs down the line.
            </p>
            <Link to="/auth?role=creator" className="inline-flex items-center gap-2 text-xs font-black uppercase text-purple-400 tracking-widest hover:underline">
              Get Started Now <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* ── Pitch Your Ideas ── */}
        <section className="w-full text-center py-20 border-t border-white/5">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
            PITCH YOUR IDEAS. OWN THE VISION.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12 font-bold">
            Whether you want to make a movie, host an event, or plan a cross-country road trip, you're able to list specific creative proposals for brands to sponsor. Detail your ideas, pitch to the right brands, and raise custom project budgets directly on Driplens.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-black text-sm uppercase text-white mb-2">Showcase Showcase</h3>
              <p className="text-xs text-gray-400 font-bold leading-relaxed">
                Add videos, photos, and previous brand campaign case studies to stand out.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-black text-sm uppercase text-white mb-2">Track Metrics</h3>
              <p className="text-xs text-gray-400 font-bold leading-relaxed">
                Track views, engagements, and click-through rates to pitch with confidence.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-black text-sm uppercase text-white mb-2">List Offerings</h3>
              <p className="text-xs text-gray-400 font-bold leading-relaxed">
                Structure your current availability, deliverable options, and packages in a brand-ready format.
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
