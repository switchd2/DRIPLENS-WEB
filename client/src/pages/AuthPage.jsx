import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, User, Briefcase, Instagram, Globe, Phone, Mail, Lock, Building } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import './agency.css';

// ───────────────────────────────────────────────────────────────────────────
// Sub-components (Moved outside to prevent focus loss on re-render)
// ───────────────────────────────────────────────────────────────────────────

const RoleSelector = ({ onRoleSelect, mode, setMode }) => {
  const [hoveredRole, setHoveredRole] = useState(null);

  const roles = [
    {
      id: 'brand',
      title: "I'm a Brand",
      desc: "Find the perfect creators for your campaigns, send briefs, and manage collaborations all in one place.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
      bgColor: "hover:bg-[#FACC15]",
      hoverBg: "#FACC15",
      doodles: [
        {
          className: "absolute -top-12 -left-16 rotate-[-12deg] z-20 pointer-events-none",
          svg: (
            <svg className="w-16 h-16 stroke-black fill-white shadow-md rounded-lg p-2 bg-white border-2 border-black" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          )
        },
        {
          className: "absolute -top-16 right-[-20px] rotate-[15deg] z-20 pointer-events-none",
          svg: (
            <svg className="w-14 h-14 stroke-black fill-white shadow-md rounded-lg p-2 bg-white border-2 border-black" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="2" y1="20" x2="22" y2="20" />
              <line x1="12" y1="17" x2="12" y2="20" />
            </svg>
          )
        },
        {
          className: "absolute bottom-[-30px] -left-10 rotate-[-10deg] z-20 pointer-events-none",
          svg: (
            <svg className="w-12 h-12 stroke-black fill-white shadow-md rounded-full p-2 bg-white border-2 border-black" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 11 2 2 4-4" />
            </svg>
          )
        },
        {
          className: "absolute bottom-20 -right-16 rotate-[25deg] z-20 pointer-events-none",
          svg: (
            <svg className="w-12 h-12 fill-[#0044ff] text-white border-2 border-black rounded-lg p-2 shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'creator',
      title: "I'm a Creator",
      desc: "Showcase your content, set your rates, and get discovered by top brands looking to collaborate.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
      bgColor: "hover:bg-[#F97316]",
      hoverBg: "#F97316",
      doodles: [
        {
          className: "absolute -top-16 -left-12 rotate-[-15deg] z-20 pointer-events-none",
          svg: (
            <svg className="w-16 h-16 stroke-black fill-white shadow-md rounded-lg p-2 bg-white border-2 border-black" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          )
        },
        {
          className: "absolute -top-12 -right-16 rotate-[10deg] z-20 pointer-events-none",
          svg: (
            <svg className="w-14 h-14 stroke-black fill-white shadow-md rounded-lg p-2 bg-white border-2 border-black" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )
        },
        {
          className: "absolute bottom-[-20px] -left-14 rotate-[8deg] z-20 pointer-events-none",
          svg: (
            <svg className="w-12 h-12 stroke-black fill-white shadow-md rounded-lg p-2 bg-white border-2 border-black" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
          )
        },
        {
          className: "absolute bottom-28 -right-12 rotate-[-20deg] z-20 pointer-events-none",
          svg: (
            <svg className="w-10 h-10 fill-yellow-400 stroke-black stroke-2" viewBox="0 0 24 24">
              <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'agent',
      title: "I'm a Talent Agent",
      desc: "Manage your roster of creators, handle deals, and support your talent's growth with ease.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
      bgColor: "hover:bg-[#3B82F6]",
      hoverBg: "#3B82F6",
      doodles: [
        {
          className: "absolute -top-14 -left-14 rotate-[12deg] z-20 pointer-events-none",
          svg: (
            <svg className="w-14 h-14 stroke-black fill-white shadow-md rounded-lg p-2 bg-white border-2 border-black" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          )
        },
        {
          className: "absolute -top-12 -right-12 rotate-[-15deg] z-20 pointer-events-none",
          svg: (
            <svg className="w-12 h-12 stroke-black fill-none shadow-md rounded-lg p-2 bg-white border-2 border-black" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          )
        },
        {
          className: "absolute bottom-[-24px] -right-6 rotate-[10deg] z-20 pointer-events-none",
          svg: (
            <svg className="w-14 h-14 stroke-black fill-white shadow-md rounded-lg p-2 bg-white border-2 border-black" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          )
        }
      ]
    }
  ];

  const bgStyle = hoveredRole 
    ? roles.find(r => r.id === hoveredRole)?.hoverBg 
    : '#fcfcfc';

  return (
    <div 
      className="min-h-screen w-full flex flex-col justify-between p-6 sm:p-10 transition-all duration-500 ease-in-out relative overflow-hidden select-none bg-gray-50/50"
      style={{ backgroundColor: bgStyle }}
    >
      {/* Top Navbar */}
      <div className="flex justify-between items-center max-w-6xl w-full mx-auto z-10">
        <h1 className="text-2xl font-black tracking-tighter uppercase text-black">DRIPLENS</h1>
        <div className="flex gap-4">
          <button 
            onClick={() => setMode('login')} 
            className={`px-6 py-2.5 border-2 border-black font-black uppercase text-[10px] tracking-widest transition-all ${
              mode === 'login' ? 'bg-black text-white' : 'bg-white text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            Sign In
          </button>
          <button 
            onClick={() => setMode('register')} 
            className={`px-6 py-2.5 border-2 border-black font-black uppercase text-[10px] tracking-widest transition-all ${
              mode === 'register' ? 'bg-black text-white' : 'bg-white text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl w-full mx-auto my-auto py-12 flex flex-col items-center z-10">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase text-center max-w-3xl leading-tight mb-2 text-black">
          CHOOSE YOUR ROLE IN DRIPLENS
        </h2>
        <p className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-widest text-center mb-16">
          Whether you're creating, hiring, or managing talent—start here.
        </p>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {roles.map(role => {
            const isHovered = hoveredRole === role.id;
            const isAnyHovered = hoveredRole !== null;
            const opacityClass = isAnyHovered && !isHovered ? 'opacity-40 scale-[0.98]' : 'opacity-100 scale-100';

            return (
              <div 
                key={role.id}
                className="relative"
              >
                {/* Floating Doodles (Only show when this card is hovered) */}
                <AnimatePresence>
                  {isHovered && role.doodles.map((doodle, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0, y: 10 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0, opacity: 0, y: 10 }}
                      transition={{ type: "spring", damping: 15, delay: i * 0.05 }}
                      className={doodle.className}
                    >
                      {doodle.svg}
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Role Card Button */}
                <button
                  onMouseEnter={() => setHoveredRole(role.id)}
                  onMouseLeave={() => setHoveredRole(null)}
                  onClick={() => {
                    if (role.id === 'agent') {
                      alert("Talent Agent platform is coming soon! Choose Creator or Brand for now.");
                      return;
                    }
                    onRoleSelect(role.id);
                  }}
                  className={`w-full bg-white border-2 border-black rounded-2xl p-6 text-left flex flex-col transition-all duration-300 ${opacityClass} ${
                    isHovered 
                      ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -translate-y-2' 
                      : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                  }`}
                >
                  {/* Photo Container */}
                  <div className="w-full aspect-[4/3] rounded-xl border-2 border-black overflow-hidden bg-gray-100 mb-6">
                    <img 
                      src={role.image} 
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        isHovered ? 'scale-105 filter-none' : 'grayscale'
                      }`}
                      alt={role.title} 
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2 text-black">
                    {role.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs font-bold text-gray-500 leading-relaxed">
                    {role.desc}
                  </p>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl w-full mx-auto flex flex-col sm:flex-row justify-between items-center z-10 border-t border-black/10 pt-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
        <span>© 2025–2026 DRIPLENS. All rights reserved.</span>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Use</a>
        </div>
      </div>
    </div>
  );
};

const AuthForm = ({ mode, selectedRole, formData, handleChange, handleSubmit, errors, apiError, loading, setSelectedRole, onGoogleSignIn }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="w-full max-w-md p-4"
  >
    <button
      onClick={() => {
        setSelectedRole(null);
        const newParams = new URLSearchParams(window.location.search);
        newParams.delete('role');
        window.history.replaceState(null, '', `${window.location.pathname}?${newParams.toString()}`);
      }}
      className="mb-8 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-[#0044ff]"
    >
      ← BACK TO ROLE SELECT
    </button>

    <h2 className="text-3xl font-black mb-2 tracking-tight uppercase">
      {mode === 'login' ? 'Welcome Back' : `Join as ${selectedRole}`}
    </h2>
    <p className="text-sm text-gray-500 mb-8 font-medium">
      {mode === 'login' ? 'Sign in to your account' : 'Create your professional profile'}
    </p>

    {apiError && <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs font-bold mb-6">{apiError}</div>}

    <form onSubmit={handleSubmit} className="space-y-4">
      {mode === 'register' && selectedRole === 'brand' && (
        <>
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Brand Name</label>
            <div className="relative">
              <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                placeholder="e.g. Acme Corp"
                className="w-full p-4 pl-12 border-2 border-black focus:border-[#0044ff] outline-none font-bold placeholder:font-normal"
              />
            </div>
            {errors.brandName && <span className="text-[10px] text-red-500 font-bold">{errors.brandName}</span>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Instagram</label>
              <div className="relative">
                <Instagram className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  name="instagramHandle"
                  value={formData.instagramHandle}
                  onChange={handleChange}
                  placeholder="@handle"
                  className="w-full p-4 pl-12 border-2 border-black focus:border-[#0044ff] outline-none font-bold"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Website</label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full p-4 pl-12 border-2 border-black focus:border-[#0044ff] outline-none font-bold"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Contact Person</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-4 pl-12 border-2 border-black focus:border-[#0044ff] outline-none font-bold"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+91 ..."
                className="w-full p-4 pl-12 border-2 border-black focus:border-[#0044ff] outline-none font-bold"
              />
            </div>
          </div>
        </>
      )}

      <div className="space-y-1">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full p-4 pl-12 border-2 border-black focus:border-[#0044ff] outline-none font-bold"
          />
        </div>
        {errors.email && <span className="text-[10px] text-red-500 font-bold">{errors.email}</span>}
      </div>

      <div className="space-y-1">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Password</label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full p-4 pl-12 border-2 border-black focus:border-[#0044ff] outline-none font-bold"
          />
        </div>
        {errors.password && <span className="text-[10px] text-red-500 font-bold">{errors.password}</span>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full p-5 bg-black text-white font-black uppercase tracking-widest border-2 border-black hover:bg-[#0044ff] hover:border-[#0044ff] transition-all disabled:opacity-50"
      >
        {loading ? 'Processing...' : (mode === 'login' ? 'Sign In' : 'Create Account')}
      </button>

      {mode === 'register' && selectedRole === 'creator' && (
        <div className="pt-4 space-y-4">
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-[10px] font-bold text-gray-400 uppercase">Or continue with</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button type="button" className="p-4 border-2 border-black font-bold text-xs uppercase hover:bg-gray-50">Google</button>
            <button type="button" className="p-4 border-2 border-black font-bold text-xs uppercase hover:bg-gray-50">Instagram</button>
          </div>
        </div>
      )}
    </form>
  </motion.div>
);

export default function AuthPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { login, register, isLoggedIn, user } = useAuth();

  const initialMode = searchParams.get('mode') === 'register' ? 'register' : 'login';
  const initialRole = searchParams.get('role'); // 'creator' or 'brand'
  const [mode, setMode] = useState(initialMode);
  const [selectedRole, setSelectedRole] = useState(initialRole);

  const [formData, setFormData] = useState({
    // Shared
    email: '',
    password: '',
    // Brand specific
    brandName: '',
    instagramHandle: '',
    website: '',
    contactName: '',
    phoneNumber: '',
    // Creator specific
    username: '', // for fallback
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoggedIn && user) {
      if (user.role === 'creator' && !user.onboarding_complete) {
        navigate('/onboarding/step-1', { replace: true });
      } else {
        const dashboardPath = user.role === 'creator' ? '/dashboard' : `/dashboard/${user.role}`;
        const from = location.state?.from?.pathname || dashboardPath;
        navigate(from, { replace: true });
      }
    }
  }, [isLoggedIn, user, navigate, location.state]);

  const handleChange = (e) => {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(p => ({ ...p, [e.target.name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!formData.email.trim()) e.email = 'Required';
    if (formData.password.length < 8) e.password = 'Min 8 characters';

    if (mode === 'register') {
      if (selectedRole === 'brand') {
        // Brand fields are now optional as requested
      } else {
        // Creator basic validation
      }
    }
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) { setErrors(validationErrors); return; }

    setLoading(true);
    try {
      if (mode === 'register') {
        let userData;
        if (selectedRole === 'brand') {
          const baseName = formData.brandName
            ? formData.brandName.toLowerCase().replace(/[^a-z0-9_.]/g, '_')
            : formData.email.split('@')[0].replace(/[^a-z0-9_.]/g, '_');
          const randomSuffix = Math.random().toString(36).substring(2, 6);
          const derivedUsername = `${baseName}_${randomSuffix}`.slice(0, 30);

          userData = await register(derivedUsername, formData.email, formData.password, 'brand', {
            brand_name: formData.brandName,
            instagram_handle: formData.instagramHandle,
            website: formData.website,
            contact_person: formData.contactName,
            phone_number: formData.phoneNumber,
          });
        } else {
          const baseName = formData.email.split('@')[0].replace(/[^a-z0-9_.]/g, '_');
          const randomSuffix = Math.random().toString(36).substring(2, 6);
          const derivedUsername = `${baseName}_${randomSuffix}`.slice(0, 30);
          userData = await register(derivedUsername, formData.email, formData.password, 'creator');
        }

        // Redirect after register
        if (userData.role === 'creator') {
          navigate('/onboarding/step-1', { replace: true });
        } else {
          navigate('/dashboard/brand', { replace: true });
        }
      } else {
        const userData = await login(formData.email, formData.password);

        // Redirect after login
        if (userData.role === 'creator' && !userData.onboarding_complete) {
          navigate('/onboarding/step-1', { replace: true });
        } else {
          const dashboardPath = userData.role === 'creator' ? '/dashboard' : `/dashboard/${userData.role}`;
          navigate(dashboardPath, { replace: true });
        }
      }
    } catch (err) {
      setApiError(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    const newParams = new URLSearchParams(searchParams);
    newParams.set('role', role);
    setSearchParams(newParams);
  };

  if (!selectedRole) {
    return (
      <>
        <Helmet>
          <title>Choose Your Role — Driplens</title>
        </Helmet>
        <RoleSelector onRoleSelect={handleRoleSelect} mode={mode} setMode={setMode} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      <Helmet>
        <title>{mode === 'register' ? 'Join' : 'Sign In'} — Driplens</title>
      </Helmet>

      {/* Hero Section */}
      <div className="md:w-[40%] bg-black text-white p-8 md:p-16 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <Link to="/" className="text-2xl font-black tracking-tighter relative z-10 text-white">DRIPLENS</Link>

        <div className="relative z-10">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-4 text-white">
              THE<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>ELITE</span><br />
              CLUB
            </h1>
            <p className="text-xs uppercase tracking-[0.3em] font-bold opacity-60 text-white">Professional Creator Network</p>
          </motion.div>
        </div>

        <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 relative z-10">
          © 2026 DRIPLENS TECHNOLOGY PVT LTD
        </div>
      </div>

      {/* Interaction Area */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <motion.div
          key="form"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="w-full flex justify-center"
        >
          <AuthForm 
            mode={mode}
            selectedRole={selectedRole}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            apiError={apiError}
            loading={loading}
            setSelectedRole={setSelectedRole}
            onGoogleSignIn={handleGoogleSignIn}
          />
        </motion.div>
      </div>
    </div>
  );
}
