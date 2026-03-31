import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Stethoscope, 
  UserPlus, 
  Calendar, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2,
  Mail,
  User,
  Lock,
  MapPin,
  Briefcase,
  Star
} from 'lucide-react';
import { cn } from '../lib/utils';

interface LandingPageProps {
  onStartApp: (patientName?: string, directBooking?: boolean) => void;
}

type ViewMode = 'tabs' | 'specialist-reg' | 'patient-reg' | 'direct-booking';

interface RegistrationFormProps {
  key?: string;
  type: 'specialist' | 'patient';
  onBack: () => void;
  onSubmit: (name: string, type: 'specialist' | 'patient') => void;
}

const RegistrationForm = ({ type, onBack, onSubmit }: RegistrationFormProps) => {
  const [regName, setRegName] = useState('');

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(regName || (type === 'patient' ? 'New Patient' : 'Specialist'), type);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-md bg-white rounded-[40px] p-8 shadow-premium border border-slate-50"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-primary mb-6 font-bold text-sm uppercase tracking-widest transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>
      
      <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
        {type === 'specialist' ? 'Join as Specialist' : 'Create Patient Account'}
      </h2>
      <p className="text-slate-400 text-sm font-medium mb-8">Please fill in your details to get started.</p>
      
      <form className="space-y-4" onSubmit={handleRegistration}>
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
            <input 
              type="text" 
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
              placeholder="John Doe" 
              className="w-full py-4 pl-12 pr-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/10 transition-all text-slate-600 placeholder:text-slate-300" 
              required 
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
            <input type="email" placeholder="john@example.com" className="w-full py-4 pl-12 pr-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/10 transition-all text-slate-600 placeholder:text-slate-300" required />
          </div>
        </div>

        {type === 'specialist' && (
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Specialization</label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
              <select className="w-full py-4 pl-12 pr-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/10 transition-all text-slate-600 appearance-none" required>
                <option value="">Select Specialization</option>
                <option value="cardiology">Cardiology</option>
                <option value="dermatology">Dermatology</option>
                <option value="pediatrics">Pediatrics</option>
              </select>
            </div>
          </div>
        )}

        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
            <input type="password" placeholder="••••••••" className="w-full py-4 pl-12 pr-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/10 transition-all text-slate-600 placeholder:text-slate-300" required />
          </div>
        </div>

        <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-premium hover:bg-primary-dark transition-all mt-4">
          Register Now
        </button>
      </form>
    </motion.div>
  );
};

export default function LandingPage({ onStartApp }: LandingPageProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('tabs');
  const [patientName, setPatientName] = useState('');

  const handleDirectBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (patientName.trim()) {
      onStartApp(patientName, true);
    }
  };

  const handleRegistration = (name: string) => {
    onStartApp(name);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] font-sans flex items-center justify-center p-6 lg:p-20 relative overflow-hidden">
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large Background Typography - Editorial Style */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.05, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -left-20 top-0 text-[35vw] font-black tracking-tighter text-white leading-none select-none whitespace-nowrap"
        >
          CARE
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.05, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="absolute -right-20 bottom-0 text-[30vw] font-black tracking-tighter text-white leading-none select-none whitespace-nowrap"
        >
          PLUS
        </motion.div>

        {/* Dynamic Gradient Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-rose-500/10 rounded-full blur-[120px]"
        />

        {/* Grid Lines - Architectural Feel */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col gap-12 lg:gap-20">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-8"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">Next-Gen Healthcare</span>
            </motion.div>
            <h1 className="text-7xl lg:text-[10rem] font-black text-white leading-[0.85] tracking-tighter mb-8">
              Medi<span className="text-primary italic">Connect.</span>
            </h1>
            <p className="text-white/40 text-xl lg:text-3xl font-medium max-w-xl leading-snug">
              An architectural approach to modern medicine. Seamless connections, premium care.
            </p>
          </motion.div>

          {/* Animated Social Proof */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="bg-white/5 backdrop-blur-2xl p-8 rounded-[40px] border border-white/10 flex items-center gap-6 shadow-2xl"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10, zIndex: 10 }}
                  className="w-14 h-14 rounded-2xl border-4 border-[#0A0A0B] overflow-hidden bg-white/10"
                >
                  <img 
                    src={`https://i.pravatar.cc/150?img=${i + 20}`} 
                    alt="User" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-primary fill-primary" />)}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Verified</span>
              </div>
              <p className="text-white font-black text-xl tracking-tight">100,000+ <span className="text-white/40 font-medium">Patients</span></p>
            </div>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {viewMode === 'tabs' && (
            <motion.div 
              key="tabs"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-8"
            >
              {/* Direct Booking - Full Width Top Bento */}
              <motion.button 
                onClick={() => setViewMode('direct-booking')}
                whileHover={{ y: -10 }}
                className="lg:col-span-12 group bg-primary p-12 rounded-[64px] transition-all flex flex-col lg:flex-row lg:items-center justify-between text-left relative overflow-hidden min-h-[300px] shadow-[0_40px_80px_-20px_rgba(59,130,246,0.5)]"
              >
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-10">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-[32px] flex items-center justify-center text-white group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 shrink-0">
                    <Calendar className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-5xl lg:text-7xl font-black text-white mb-4 tracking-tighter leading-none">Book Appointment <br className="hidden lg:block" /><span className="italic">Instantly.</span></h3>
                    <p className="text-white/60 text-xl font-medium max-w-xl">Skip the queue. Instant access to our elite medical network with zero registration required.</p>
                  </div>
                </div>
                <div className="relative z-10 flex items-center justify-between mt-10 lg:mt-0">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 lg:hidden">Instant Access</span>
                  <div className="w-24 h-24 rounded-full bg-white text-primary flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-12 h-12" />
                  </div>
                </div>
              </motion.button>

              {/* Specialist Tab - Half Width Bento */}
              <motion.button 
                onClick={() => setViewMode('specialist-reg')}
                whileHover={{ y: -10 }}
                className="lg:col-span-6 group bg-white/5 backdrop-blur-3xl p-12 rounded-[64px] border border-white/10 hover:border-primary/30 transition-all flex flex-col justify-between text-left relative overflow-hidden min-h-[400px]"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-1000" />
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-primary/10 rounded-[32px] flex items-center justify-center text-primary mb-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                    <Stethoscope className="w-12 h-12" />
                  </div>
                  <h3 className="text-5xl font-black text-white mb-4 tracking-tighter leading-none">Join as a <br /><span className="text-primary italic">Specialist.</span></h3>
                  <p className="text-white/40 text-lg font-medium max-w-[240px]">Expand your practice with our premium network.</p>
                </div>
                <div className="relative z-10 flex items-center justify-between mt-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Professional Network</span>
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-primary transition-all">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                </div>
              </motion.button>

              {/* Patient Tab - Half Width Bento */}
              <motion.button 
                onClick={() => setViewMode('patient-reg')}
                whileHover={{ y: -10 }}
                className="lg:col-span-6 group bg-white/5 backdrop-blur-3xl p-12 rounded-[64px] border border-white/10 hover:border-rose-500/30 transition-all flex flex-col justify-between text-left relative overflow-hidden min-h-[400px]"
              >
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[80px] group-hover:bg-rose-500/20 transition-all duration-1000" />
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-rose-500/10 rounded-[32px] flex items-center justify-center text-rose-500 mb-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                    <UserPlus className="w-12 h-12" />
                  </div>
                  <h3 className="text-5xl font-black text-white mb-4 tracking-tighter leading-none">Register as <br /><span className="text-rose-500 italic">Patient.</span></h3>
                  <p className="text-white/40 text-lg font-medium max-w-[240px]">Your health journey starts with a single click.</p>
                </div>
                <div className="relative z-10 flex items-center justify-between mt-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Personal Care</span>
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-rose-500 transition-all">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                </div>
              </motion.button>
            </motion.div>
          )}

          {(viewMode === 'specialist-reg' || viewMode === 'patient-reg') && (
            <div className="flex justify-center">
              <RegistrationForm 
                key={viewMode} 
                type={viewMode === 'specialist-reg' ? 'specialist' : 'patient'} 
                onBack={() => setViewMode('tabs')} 
                onSubmit={handleRegistration} 
              />
            </div>
          )}

          {viewMode === 'direct-booking' && (
            <div className="flex justify-center">
              <motion.div
                key="direct"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="w-full max-w-2xl bg-white/5 backdrop-blur-3xl rounded-[64px] p-16 border border-white/10 shadow-2xl"
              >
                <button 
                  onClick={() => setViewMode('tabs')}
                  className="flex items-center gap-3 text-white/40 hover:text-primary mb-12 font-black text-[10px] uppercase tracking-[0.4em] transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to options
                </button>
                
                <h2 className="text-6xl font-black text-white mb-4 tracking-tighter">Book Appointment <span className="text-primary italic">Instantly.</span></h2>
                <p className="text-white/40 text-xl font-medium mb-16">Enter your name to browse our elite medical network.</p>
                
                <form onSubmit={handleDirectBooking} className="space-y-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 ml-4">Patient Identity</label>
                    <div className="relative group">
                      <User className="absolute left-8 top-1/2 -translate-y-1/2 w-8 h-8 text-white/10 group-focus-within:text-primary transition-all" />
                      <input 
                        type="text" 
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="Full Name" 
                        className="w-full py-8 pl-24 pr-8 bg-white/5 border border-white/10 rounded-[32px] focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary/40 transition-all text-white text-2xl font-bold placeholder:text-white/10" 
                        required 
                        autoFocus
                      />
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-primary text-white py-10 rounded-[32px] font-black text-xl uppercase tracking-widest shadow-[0_32px_64px_-16px_rgba(59,130,246,0.5)] hover:bg-primary-dark transition-all flex items-center justify-center gap-6">
                    See Specialists
                    <ArrowRight className="w-8 h-8" />
                  </button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
