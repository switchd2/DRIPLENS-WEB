import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './agency.css';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#030205] text-white overflow-hidden relative selection:bg-red-500 selection:text-white font-sans flex flex-col justify-between">
      <Helmet>
        <title>Driplens — Choose Your Role</title>
        <meta name="description" content="AI-powered creator-brand collaboration platform. Select your role to get started." />
      </Helmet>

      {/* ── Background Glow Streaks & Gradients ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Neon Purple Ambient Glow */}
        <div className="absolute top-[-100px] left-[-200px] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/10 blur-[130px]" />
        {/* Neon Red Ambient Glow */}
        <div className="absolute top-[200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-red-600/20 to-purple-600/10 blur-[150px]" />
        {/* Cyber Diagonal Light Streaks */}
        <div className="absolute top-[10%] left-[20%] w-[1px] h-[500px] bg-gradient-to-b from-transparent via-purple-500/40 to-transparent rotate-[35deg] blur-[2px]" />
        <div className="absolute top-[15%] right-[20%] w-[1px] h-[600px] bg-gradient-to-b from-transparent via-red-500/30 to-transparent rotate-[-35deg] blur-[2px]" />
      </div>

      {/* ── Header / Navigation ── */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#030205]/40 border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter uppercase text-white hover:opacity-90 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-purple-600 animate-pulse" />
          DRIPLENS
        </Link>
        <nav className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
          <Link to="/for-brands" className="hover:text-white transition">For Brands</Link>
          <Link to="/for-creators" className="hover:text-white transition">For Creators</Link>
        </nav>
        <div className="flex gap-4">
          <Link to="/auth" className="px-5 py-2 border border-white/10 rounded-full font-black uppercase text-[10px] tracking-widest bg-white/5 hover:bg-white/10 transition">
            Sign In
          </Link>
          <Link to="/auth?mode=register" className="px-5 py-2 rounded-full font-black uppercase text-[10px] tracking-widest bg-gradient-to-r from-red-500 to-purple-600 hover:opacity-95 shadow-[0_0_15px_rgba(239,68,68,0.3)] transition text-white">
            Get Started
          </Link>
        </div>
      </header>

      {/* ── Main Choice Container ── */}
      <main className="relative z-10 pt-32 pb-16 px-6 md:px-12 max-w-6xl w-full mx-auto my-auto flex flex-col items-center justify-center">
        {/* Floating Accent Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-[10px] font-black uppercase tracking-widest mb-6 text-center"
        >
          ⚡ The Future of Creator Collaborations
        </motion.div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase text-center max-w-3xl leading-tight mb-2 text-white">
          CHOOSE YOUR ROLE IN DRIPLENS
        </h2>
        <p className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-widest text-center mb-12">
          Whether you're creating or hiring—start here.
        </p>

        {/* Two Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl z-20">
          {/* Option 1: Brand */}
          <Link 
            to="/for-brands"
            className="group bg-white/5 border border-white/10 rounded-[32px] p-6 flex flex-col transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_40px_rgba(239,68,68,0.25)] hover:-translate-y-2 text-left"
          >
            {/* Image Container */}
            <div className="w-full aspect-[4/3] rounded-2xl border border-white/10 overflow-hidden bg-white/5 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:filter-none grayscale"
                alt="I'm a Brand" 
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2 flex items-center justify-between">
              I'm a Brand
              <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-red-500" size={20} />
            </h3>

            {/* Description */}
            <p className="text-xs font-bold text-gray-400 leading-relaxed">
              Find the perfect creators for your campaigns, send briefs, and manage collaborations all in one place.
            </p>
          </Link>

          {/* Option 2: Creator */}
          <Link 
            to="/for-creators"
            className="group bg-white/5 border border-white/10 rounded-[32px] p-6 flex flex-col transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:-translate-y-2 text-left"
          >
            {/* Image Container */}
            <div className="w-full aspect-[4/3] rounded-2xl border border-white/10 overflow-hidden bg-white/5 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:filter-none grayscale"
                alt="I'm a Creator" 
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2 flex items-center justify-between">
              I'm a Creator
              <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-purple-500" size={20} />
            </h3>

            {/* Description */}
            <p className="text-xs font-bold text-gray-400 leading-relaxed">
              Showcase your content, set your rates, and get discovered by top brands looking to collaborate.
            </p>
          </Link>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 py-8 px-6 md:px-12 border-t border-white/5 bg-[#030205]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-red-500 to-purple-600" />
            <span>DRIPLENS © 2026. All rights reserved.</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">X.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
