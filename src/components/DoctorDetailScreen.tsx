import React, { useState } from 'react';
import { ArrowLeft, Star, Clock, MapPin, Calendar, Phone, MessageCircle, MoreVertical, ShieldCheck, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Doctor } from '../types';
import { cn } from '../lib/utils';

export default function DoctorDetailScreen({ doctor, onBack }: { doctor: Doctor, onBack: () => void }) {
  const [selectedDate, setSelectedDate] = useState('Wed');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    setIsBooked(true);
    setTimeout(() => {
      onBack();
    }, 2000);
  };

  const days = [
    { day: 'Mon', date: '21' },
    { day: 'Tue', date: '22' },
    { day: 'Wed', date: '23' },
    { day: 'Thu', date: '24' },
    { day: 'Fri', date: '25' },
  ];

  const times = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM'];

  return (
    <div className="pb-32 max-w-7xl mx-auto min-h-screen bg-white relative">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start lg:pt-12 lg:px-12">
        {/* Immersive Header / Image Section */}
        <div className="relative h-80 w-full lg:h-[600px] lg:rounded-[40px] lg:overflow-hidden lg:sticky lg:top-12">
          <img 
            src={doctor.image} 
            alt={doctor.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent lg:hidden"></div>
          
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
            <button 
              onClick={onBack}
              className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-white/30 hover:bg-white/40 transition-all"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => alert('Options: Share, Report, Block')}
              className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-white/30 hover:bg-white/40 transition-all"
            >
              <MoreVertical className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="px-6 -mt-20 lg:mt-0 relative z-10 lg:px-0">
          {/* Doctor Info Card */}
          <div className="bg-white rounded-[40px] p-6 shadow-premium border border-slate-50 mb-8 lg:shadow-none lg:border-none lg:p-0">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-2xl font-extrabold text-slate-800">{doctor.name}</h2>
                <ShieldCheck className="w-5 h-5 text-blue-500 fill-blue-50" />
              </div>
              <p className="text-slate-400 font-semibold text-sm">{doctor.specialization} • {doctor.clinic}</p>
            </div>
            <div className="bg-amber-50 px-3 py-1.5 rounded-2xl flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-bold text-amber-700">{doctor.rating}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={() => alert(`Calling ${doctor.name}...`)}
              className="flex-1 bg-primary text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-premium hover:bg-primary-dark transition-all"
            >
              <Phone className="w-4 h-4" />
              Voice Call
            </button>
            <button 
              onClick={() => alert(`Opening chat with ${doctor.name}...`)}
              className="flex-1 bg-slate-50 text-slate-600 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Message
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-center">
              <p className="text-slate-800 font-bold">1.2k+</p>
              <p className="text-slate-400 text-[10px] font-bold uppercase">Patients</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-center">
              <p className="text-slate-800 font-bold">10 yrs</p>
              <p className="text-slate-400 text-[10px] font-bold uppercase">Experience</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600">
              <Star className="w-6 h-6" />
            </div>
            <div className="text-center">
              <p className="text-slate-800 font-bold">{doctor.reviews}</p>
              <p className="text-slate-400 text-[10px] font-bold uppercase">Reviews</p>
            </div>
          </div>
        </div>

        {/* About */}
        <section className="mb-10">
          <h3 className="text-xl font-bold text-slate-800 mb-4">About Doctor</h3>
          <p className="text-slate-500 leading-relaxed text-sm font-medium">
            {doctor.about} <span className="text-primary cursor-pointer hover:underline" onClick={() => alert('Full bio feature coming soon!')}>Read more</span>
          </p>
        </section>

        {/* Booking - Date */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800">Schedules</h3>
            <div className="flex items-center gap-2 text-slate-400 text-sm font-bold">
              October 2023 <ArrowLeft className="w-4 h-4 rotate-180" />
            </div>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar -mx-6 px-6">
            {days.map((item) => (
              <motion.button
                key={item.day}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDate(item.day)}
                className={cn(
                  "min-w-[70px] aspect-[4/5] rounded-3xl flex flex-col items-center justify-center gap-1 transition-all border-2",
                  selectedDate === item.day 
                    ? "bg-primary border-primary text-white shadow-premium" 
                    : "bg-slate-50 border-transparent text-slate-400 hover:bg-slate-100"
                )}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest">{item.day}</span>
                <span className="text-lg font-extrabold">{item.date}</span>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Booking - Time */}
        <section className="mb-10">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Time Slots</h3>
          <div className="grid grid-cols-3 gap-3">
            {times.map((time) => (
              <motion.button
                key={time}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTime(time)}
                className={cn(
                  "py-3 rounded-2xl font-bold text-xs transition-all border-2",
                  selectedTime === time
                    ? "bg-primary border-primary text-white shadow-premium"
                    : "bg-white border-slate-100 text-slate-500 hover:border-primary/20"
                )}
              >
                {time}
              </motion.button>
            ))}
          </div>
        </section>
      </div>

        {/* Action Button */}
        <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-xl border-t border-slate-100 max-w-7xl mx-auto z-50 lg:relative lg:bg-transparent lg:border-none lg:p-0 lg:mt-12">
          <button 
            onClick={handleBooking}
            disabled={isBooked}
            className={cn(
              "w-full py-5 rounded-[24px] font-bold text-lg shadow-premium transition-all transform hover:scale-[1.02] active:scale-[0.98] lg:max-w-md",
              isBooked ? "bg-emerald-500 text-white" : "bg-primary text-white hover:bg-primary-dark"
            )}
          >
            {isBooked ? "Appointment Booked!" : "Book Appointment"}
          </button>
        </div>
      </div>
    </div>
  );
}
