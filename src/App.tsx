/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import HomeScreen from './components/HomeScreen';
import DoctorListScreen from './components/DoctorListScreen';
import DoctorDetailScreen from './components/DoctorDetailScreen';
import LandingPage from './components/LandingPage';
import { Doctor } from './types';
import { Home, Briefcase, MessageCircle, User, Bell, Search, Settings, LogOut } from 'lucide-react';

type Screen = 'landing' | 'home' | 'doctor-list' | 'doctor-detail' | 'schedule' | 'messages' | 'profile' | 'settings' | 'notifications';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [selectedSpecialization, setSelectedSpecialization] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [userName, setUserName] = useState<string>('Alexander');

  const startApp = (patientName?: string, directBooking?: boolean) => {
    if (patientName) {
      setUserName(patientName);
    }
    if (directBooking) {
      setCurrentScreen('doctor-list');
      setSelectedSpecialization('all'); // Use a dummy ID for 'all'
    } else {
      setCurrentScreen('home');
    }
  };

  const navigateToDoctorList = (specializationId: string) => {
    setSelectedSpecialization(specializationId);
    setCurrentScreen('doctor-list');
  };

  const navigateToDoctorDetail = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setCurrentScreen('doctor-detail');
  };

  const goBack = () => {
    if (currentScreen === 'doctor-list') {
      setCurrentScreen('home');
      setSelectedSpecialization(null);
    } else if (currentScreen === 'doctor-detail') {
      setCurrentScreen('doctor-list');
      setSelectedDoctor(null);
    }
  };

  const SidebarItem = ({ icon: Icon, label, active, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) => (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
        active 
          ? 'bg-primary text-white shadow-premium' 
          : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
      }`}
    >
      <Icon className="w-6 h-6" />
      <span className="font-bold text-sm uppercase tracking-widest">{label}</span>
    </button>
  );

  const handleSidebarClick = (screen: Screen) => {
    setCurrentScreen(screen);
    if (screen === 'home') {
      setSelectedSpecialization(null);
      setSelectedDoctor(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex">
      {/* Desktop Sidebar - Hidden on Landing Page */}
      {currentScreen !== 'landing' && (
        <aside className="hidden lg:flex flex-col w-80 bg-white border-r border-slate-100 p-8 sticky top-0 h-screen">
          <button 
            onClick={() => handleSidebarClick('home')}
            className="flex items-center gap-3 mb-12 px-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
              <Bell className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black text-slate-800 tracking-tight">MediConnect</h2>
          </button>

          <nav className="flex-1 space-y-2">
            <SidebarItem icon={Home} label="Home" active={currentScreen === 'home'} onClick={() => handleSidebarClick('home')} />
            <SidebarItem icon={Briefcase} label="Schedule" active={currentScreen === 'schedule'} onClick={() => handleSidebarClick('schedule')} />
            <SidebarItem icon={MessageCircle} label="Messages" active={currentScreen === 'messages'} onClick={() => handleSidebarClick('messages')} />
            <SidebarItem icon={User} label="Profile" active={currentScreen === 'profile'} onClick={() => handleSidebarClick('profile')} />
            <SidebarItem icon={Settings} label="Settings" active={currentScreen === 'settings'} onClick={() => handleSidebarClick('settings')} />
          </nav>

          <div className="pt-8 border-t border-slate-100">
            <SidebarItem icon={LogOut} label="Logout" onClick={() => setCurrentScreen('landing')} />
          </div>
        </aside>
      )}

      {/* Main Content */}
      <main className="flex-1 relative">
        <AnimatePresence mode="wait">
          {currentScreen === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LandingPage onStartApp={startApp} />
            </motion.div>
          )}

          {currentScreen === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <HomeScreen 
                userName={userName}
                onSpecializationClick={navigateToDoctorList} 
                onDoctorClick={navigateToDoctorDetail}
                onBookSessionClick={() => navigateToDoctorList('all')}
                onViewNetworkClick={() => navigateToDoctorList('all')}
                onEmergencyClick={() => navigateToDoctorList('all')}
                onLabTestClick={() => navigateToDoctorList('all')}
                onMedicineClick={() => navigateToDoctorList('all')}
                onViewAllDoctorsClick={() => navigateToDoctorList('all')}
                onHomeClick={() => handleSidebarClick('home')}
                onScheduleClick={() => handleSidebarClick('schedule')}
                onMessagesClick={() => handleSidebarClick('messages')}
                onProfileClick={() => handleSidebarClick('profile')}
                onNotificationsClick={() => handleSidebarClick('notifications')}
              />
            </motion.div>
          )}

          {currentScreen === 'doctor-list' && (
            <motion.div
              key="doctor-list"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <DoctorListScreen 
                specializationId={selectedSpecialization!} 
                onBack={goBack}
                onDoctorClick={navigateToDoctorDetail}
              />
            </motion.div>
          )}

          {currentScreen === 'doctor-detail' && (
            <motion.div
              key="doctor-detail"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <DoctorDetailScreen 
                doctor={selectedDoctor!} 
                onBack={goBack} 
              />
            </motion.div>
          )}

          {['schedule', 'messages', 'profile', 'settings', 'notifications'].includes(currentScreen) && (
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-12"
            >
              <h1 className="text-4xl font-black text-slate-900 capitalize mb-6">{currentScreen}</h1>
              <div className="bg-white rounded-[40px] p-12 shadow-premium border border-slate-100">
                <p className="text-slate-400 text-xl font-medium">The {currentScreen} feature is currently under development. Stay tuned for updates!</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
