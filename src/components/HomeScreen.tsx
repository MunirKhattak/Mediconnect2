import React from 'react';
import { Search, Heart, Stethoscope, Activity, Smile, Clipboard, Brain, ArrowUpRight, Calendar, Clock, Home, Briefcase, User, Bell, SlidersHorizontal, Plus, Star, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { SPECIALIZATIONS, DOCTORS } from '../constants';

const ICON_MAP: Record<string, any> = {
  Heart,
  Stethoscope,
  Activity,
  Smile,
  Clipboard,
  Brain,
};

const QUICK_SERVICES = [
  { name: 'Emergency', icon: 'Plus', color: 'bg-rose-100 text-rose-600' },
  { name: 'Lab Test', icon: 'Clipboard', color: 'bg-blue-100 text-blue-600' },
  { name: 'Medicine', icon: 'Activity', color: 'bg-emerald-100 text-emerald-600' },
];

export default function HomeScreen({ 
  userName, 
  onSpecializationClick, 
  onDoctorClick,
  onBookSessionClick,
  onViewNetworkClick,
  onEmergencyClick,
  onLabTestClick,
  onMedicineClick,
  onViewAllDoctorsClick,
  onHomeClick,
  onScheduleClick,
  onMessagesClick,
  onProfileClick,
  onNotificationsClick
}: { 
  userName: string, 
  onSpecializationClick: (id: string) => void, 
  onDoctorClick: (doctor: any) => void,
  onBookSessionClick?: () => void,
  onViewNetworkClick?: () => void,
  onEmergencyClick?: () => void,
  onLabTestClick?: () => void,
  onMedicineClick?: () => void,
  onViewAllDoctorsClick?: () => void,
  onHomeClick?: () => void,
  onScheduleClick?: () => void,
  onMessagesClick?: () => void,
  onProfileClick?: () => void,
  onNotificationsClick?: () => void
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pb-32 pt-10 px-6 lg:px-16 max-w-[1800px] mx-auto min-h-screen bg-[#FDFDFD] relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Large Background Typography */}
        <motion.div 
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 0.02, x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-40 -right-40 text-[30vw] font-black leading-none select-none pointer-events-none whitespace-nowrap text-slate-900"
        >
          MEDIC
        </motion.div>
        
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-60 -right-60 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[180px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.25, 1],
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -left-60 w-[800px] h-[800px] bg-rose-500/5 rounded-full blur-[150px]"
        />
      </div>

      {/* Header & Search Bar */}
      <motion.header variants={itemVariants} className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-28 relative z-10">
        <div className="flex items-center gap-10">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="w-24 h-24 rounded-[40px] overflow-hidden border-[6px] border-white shadow-premium ring-1 ring-slate-200/50"
          >
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[12px] font-black uppercase tracking-[0.6em] text-slate-400 mb-3"
            >
              Health Overview
            </motion.p>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">
              Hi, {userName} <span className="text-primary italic">.</span>
            </h1>
          </div>
        </div>

        <div className="flex-1 max-w-3xl flex items-center gap-8">
          <div className="relative flex-1 group">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-7 h-7 text-slate-300 group-focus-within:text-primary transition-all" />
            <input 
              type="text" 
              placeholder="Search experts, clinics, or symptoms..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onViewAllDoctorsClick?.();
                }
              }}
              className="w-full bg-white/60 backdrop-blur-3xl border border-slate-100 rounded-[40px] py-8 pl-20 pr-10 text-slate-900 font-bold placeholder:text-slate-300 focus:outline-none focus:ring-8 focus:ring-primary/5 focus:border-primary/20 transition-all shadow-premium"
            />
          </div>
          <motion.button 
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNotificationsClick}
            className="w-20 h-20 bg-white/60 backdrop-blur-3xl rounded-[32px] flex items-center justify-center shadow-premium text-slate-600 hover:text-primary transition-all border border-white/50 relative"
          >
            <Bell className="w-8 h-8" />
            <span className="absolute top-6 right-6 w-4 h-4 bg-rose-500 border-[3px] border-white rounded-full"></span>
          </motion.button>
        </div>
      </motion.header>

      {/* Hero Section - Architectural Bento */}
      <div className="grid lg:grid-cols-12 gap-16 mb-32 relative z-10">
        {/* Main Hero Card */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-8 bg-[#08090A] rounded-[80px] p-16 lg:p-32 text-white shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-transparent to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-[2000ms]"></div>
          
          <div className="relative z-10 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-5 px-8 py-4 bg-white/5 backdrop-blur-3xl rounded-full text-[12px] font-black uppercase tracking-[0.3em] mb-16 border border-white/10"
            >
              <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
              Premium Medical Network
            </motion.div>
            
            <h2 className="text-8xl lg:text-[10rem] font-black mb-16 leading-[0.75] tracking-tighter">
              Health <br />
              <span className="text-primary italic">Reimagined.</span>
            </h2>
            
            <p className="text-white/30 text-2xl lg:text-4xl font-medium mb-20 max-w-xl leading-tight">
              Experience a new standard of personalized medical excellence.
            </p>
            
            <div className="flex flex-wrap gap-10">
              <motion.button 
                whileHover={{ scale: 1.05, y: -6 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBookSessionClick}
                className="bg-primary text-white px-16 py-8 rounded-[36px] font-black text-base uppercase tracking-widest shadow-[0_32px_64px_-16px_rgba(59,130,246,0.7)] hover:bg-primary-dark transition-all"
              >
                Book Session
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, y: -6 }}
                whileTap={{ scale: 0.95 }}
                onClick={onViewNetworkClick}
                className="bg-white/5 backdrop-blur-3xl text-white px-16 py-8 rounded-[36px] font-black text-base uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10"
              >
                View Network
              </motion.button>
            </div>
          </div>

          {/* Abstract 3D Element */}
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] group-hover:bg-primary/20 transition-all duration-[2000ms]"></div>
        </motion.div>

        {/* Side Bento Cards */}
        <div className="lg:col-span-4 flex flex-col gap-12">
          <motion.div 
            variants={itemVariants}
            className="flex-1 bg-white rounded-[80px] p-16 shadow-premium border border-slate-50 flex flex-col justify-between group hover:shadow-2xl transition-all duration-1000 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-1000" />
            <div className="relative z-10">
              <div className="w-28 h-28 bg-blue-50 rounded-[44px] flex items-center justify-center text-primary mb-12 group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000 shadow-inner">
                <Activity className="w-14 h-14" />
              </div>
              <h3 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter">Vitality</h3>
              <p className="text-slate-400 text-lg font-medium leading-relaxed">Your biometric profile is showing exceptional stability.</p>
            </div>
            
            <div className="relative z-10 mt-16">
              <div className="flex items-end gap-5">
                <span className="text-[10rem] font-black text-slate-900 tracking-tighter leading-none">98</span>
                <div className="flex flex-col mb-6">
                  <span className="text-emerald-500 font-black text-base uppercase tracking-widest flex items-center gap-2">
                    <ArrowUpRight className="w-5 h-5" /> +6.4%
                  </span>
                  <span className="text-slate-300 font-black text-[12px] uppercase tracking-widest">Score</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="h-80 bg-[#08090A] rounded-[80px] p-16 flex flex-col justify-between group hover:shadow-2xl transition-all duration-1000 cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-40"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="text-4xl font-black text-white tracking-tight mb-2">Health Journey</h4>
                  <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Current Milestone: Recovery</p>
                </div>
                <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/10 group-hover:scale-110 transition-all">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
              </div>
              
              {/* Architectural Progress Bar */}
              <div className="relative h-12 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                  className="h-full bg-primary rounded-full relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                </motion.div>
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-white/20 text-[10px] font-black uppercase tracking-widest">Start</span>
                <span className="text-primary text-[10px] font-black uppercase tracking-widest">75% Complete</span>
                <span className="text-white/20 text-[10px] font-black uppercase tracking-widest">Goal</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Actions - Editorial Bar */}
      <motion.section variants={itemVariants} className="mb-40 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {QUICK_SERVICES.map((service, i) => (
            <motion.button 
              key={service.name}
              whileHover={{ y: -16, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (service.name === 'Emergency') onEmergencyClick?.();
                if (service.name === 'Lab Test') onLabTestClick?.();
                if (service.name === 'Medicine') onMedicineClick?.();
              }}
              className="bg-white/80 backdrop-blur-3xl p-16 rounded-[64px] shadow-premium border border-white/50 flex flex-col items-center gap-10 group hover:shadow-2xl hover:bg-white transition-all duration-1000"
            >
              <div className={cn("w-28 h-28 rounded-[48px] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000 shadow-inner", service.color)}>
                {service.icon === 'Plus' && <Plus className="w-14 h-14" />}
                {service.icon === 'Clipboard' && <Clipboard className="w-14 h-14" />}
                {service.icon === 'Activity' && <Activity className="w-14 h-14" />}
              </div>
              <span className="font-black text-slate-900 text-sm uppercase tracking-[0.5em]">{service.name}</span>
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Specializations - Large Editorial Cards */}
      <motion.section variants={itemVariants} className="mb-40 relative z-10">
        <div className="flex items-center justify-between mb-24">
          <div>
            <h3 className="text-6xl font-black text-slate-900 tracking-tighter mb-6">Specializations</h3>
            <p className="text-slate-400 text-xl font-medium">World-class expertise across all medical domains</p>
          </div>
          <button 
            onClick={onViewAllDoctorsClick}
            className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-premium text-slate-400 hover:text-primary transition-all hover:shadow-2xl border border-slate-50"
          >
            <ArrowUpRight className="w-12 h-12" />
          </button>
        </div>

        <div className="flex gap-16 overflow-x-auto pb-20 no-scrollbar -mx-6 px-6 lg:grid lg:grid-cols-6 lg:overflow-visible lg:px-0 lg:mx-0">
          {SPECIALIZATIONS.map((spec, i) => {
            const Icon = ICON_MAP[spec.icon];
            return (
              <motion.div
                key={spec.id}
                whileHover={{ y: -24 }}
                onClick={() => onSpecializationClick(spec.id)}
                className="min-w-[260px] bg-white rounded-[72px] p-16 flex flex-col items-center gap-12 shadow-premium border border-slate-50 cursor-pointer hover:shadow-2xl hover:border-primary/20 transition-all group"
              >
                <div className={cn("w-32 h-32 rounded-[56px] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-[1500ms] shadow-inner", spec.color)}>
                  <Icon className={cn("w-16 h-16", spec.iconColor)} />
                </div>
                <div className="text-center">
                  <h4 className="font-black text-slate-900 text-2xl tracking-tight mb-4">{spec.name}</h4>
                  <div className="flex items-center justify-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                    <p className="text-slate-400 text-[12px] font-black uppercase tracking-[0.3em]">{spec.count} Experts</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Bottom Grid - Appointments & Doctors */}
      <div className="lg:grid lg:grid-cols-12 lg:gap-32 relative z-10">
        {/* Upcoming Visit */}
        <motion.section variants={itemVariants} className="mb-40 lg:col-span-5">
          <h3 className="text-5xl font-black text-slate-900 tracking-tighter mb-20">Next Appointment</h3>
          <motion.div 
            whileHover={{ y: -16 }}
            onClick={() => onDoctorClick(DOCTORS[0])}
            className="bg-white rounded-[80px] p-16 shadow-premium border border-slate-50 relative overflow-hidden group cursor-pointer"
          >
            <div className="flex items-center gap-16 mb-20">
              <div className="w-40 h-40 rounded-[56px] overflow-hidden border-[6px] border-slate-50 shadow-premium ring-1 ring-slate-100">
                <img 
                  src={DOCTORS[0].image} 
                  alt={DOCTORS[0].name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-5xl font-black text-slate-900 tracking-tight mb-4">{DOCTORS[0].name}</h4>
                <p className="text-primary font-black text-[14px] uppercase tracking-[0.5em] mb-8">{DOCTORS[0].specialization}</p>
                <div className="flex items-center gap-5 text-slate-400">
                  <MapPin className="w-7 h-7" />
                  <span className="text-lg font-bold">{DOCTORS[0].clinic}</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-12">
              <div className="bg-slate-50 rounded-[56px] p-12 border border-slate-100 group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-1000">
                <p className="text-slate-400 group-hover:text-white/40 text-[12px] uppercase font-black tracking-[0.3em] mb-5">Date</p>
                <p className="font-black text-slate-900 group-hover:text-white text-2xl">Oct 24, 2023</p>
              </div>
              <div className="bg-slate-50 rounded-[56px] p-12 border border-slate-100 group-hover:bg-primary group-hover:border-primary transition-all duration-1000">
                <p className="text-slate-400 group-hover:text-white/60 text-[12px] uppercase font-black tracking-[0.3em] mb-5">Time</p>
                <p className="font-black text-slate-900 group-hover:text-white text-2xl">10:30 AM</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Top Doctors */}
        <motion.section variants={itemVariants} className="mb-8 lg:col-span-7">
          <div className="flex items-center justify-between mb-20">
            <h3 className="text-5xl font-black text-slate-900 tracking-tighter">Top Rated</h3>
            <button 
              onClick={onViewAllDoctorsClick}
              className="text-primary font-black text-[12px] uppercase tracking-[0.5em] hover:opacity-70 transition-opacity"
            >
              View All
            </button>
          </div>
          <div className="space-y-12">
            {DOCTORS.slice(1).map((doctor, i) => (
              <motion.div
                key={doctor.id}
                whileHover={{ x: 24 }}
                onClick={() => onDoctorClick(doctor)}
                className="bg-white rounded-[72px] p-12 flex items-center gap-16 shadow-premium border border-slate-50 cursor-pointer group hover:shadow-2xl transition-all duration-1000"
              >
                <div className="w-44 h-44 rounded-[64px] overflow-hidden shrink-0 shadow-premium border-[6px] border-white">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h4 className="text-4xl font-black text-slate-900 tracking-tight mb-3">{doctor.name}</h4>
                      <p className="text-slate-400 text-[12px] font-black uppercase tracking-[0.4em]">{doctor.specialization}</p>
                    </div>
                    <div className="flex items-center gap-4 bg-amber-50 px-8 py-4 rounded-[32px] border border-amber-100 shadow-sm">
                      <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
                      <span className="text-xl font-black text-amber-700">{doctor.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5 text-slate-400">
                      <MapPin className="w-7 h-7" />
                      <span className="text-[14px] font-black uppercase tracking-widest">{doctor.clinic}</span>
                    </div>
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="w-20 h-20 rounded-[36px] bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-primary group-hover:text-white transition-all shadow-sm"
                    >
                      <ArrowUpRight className="w-10 h-10" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Bottom Nav - Architectural Glass Sculpture */}
      <nav className="fixed bottom-16 left-1/2 -translate-x-1/2 w-[calc(100%-100px)] max-w-xl bg-white/20 backdrop-blur-3xl rounded-[80px] shadow-[0_64px_128px_-32px_rgba(0,0,0,0.3)] px-16 py-8 flex justify-between items-center z-50 border border-white/30 lg:hidden">
        <button onClick={onHomeClick} className="relative group">
          <div className="bg-primary text-white p-7 rounded-[40px] shadow-premium group-hover:scale-110 transition-transform">
            <Home className="w-9 h-9" />
          </div>
          <motion.div layoutId="activeNav" className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
        </button>
        <button onClick={onScheduleClick} className="text-slate-400 hover:text-primary transition-colors p-7 rounded-[40px] hover:bg-white/40 group">
          <Briefcase className="w-9 h-9 group-hover:scale-110 transition-transform" />
        </button>
        <button onClick={onMessagesClick} className="text-slate-400 hover:text-primary transition-colors p-7 rounded-[40px] hover:bg-white/40 group">
          <MessageCircle className="w-9 h-9 group-hover:scale-110 transition-transform" />
        </button>
        <button onClick={onProfileClick} className="text-slate-400 hover:text-primary transition-colors p-7 rounded-[40px] hover:bg-white/40 group">
          <User className="w-9 h-9 group-hover:scale-110 transition-transform" />
        </button>
      </nav>
    </motion.div>
  );
}
