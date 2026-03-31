import React from 'react';
import { ArrowLeft, Star, Clock, MapPin, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { Doctor } from '../types';
import { DOCTORS, SPECIALIZATIONS } from '../constants';

export default function DoctorListScreen({ specializationId, onBack, onDoctorClick }: { specializationId: string, onBack: () => void, onDoctorClick: (doctor: Doctor) => void }) {
  const specialization = SPECIALIZATIONS.find(s => s.id === specializationId);
  
  const doctors = specializationId === 'all' 
    ? DOCTORS 
    : DOCTORS.filter(d => d.specialization.toLowerCase().includes(specialization?.name.toLowerCase() || ''));

  return (
    <div className="pb-24 pt-4 px-6 max-w-7xl mx-auto min-h-screen bg-slate-50">
      <header className="flex items-center gap-4 mb-8 max-w-md mx-auto lg:max-w-none">
        <button onClick={onBack} className="p-2 hover:bg-white rounded-full transition-colors shadow-sm">
          <ArrowLeft className="w-6 h-6 text-slate-800" />
        </button>
        <h1 className="text-xl font-bold text-slate-800">
          {specializationId === 'all' ? 'All Specialists' : `${specialization?.name} Specialists`}
        </h1>
      </header>

      <div className="space-y-4 max-w-md mx-auto lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
        {doctors.map((doctor) => (
          <motion.div
            key={doctor.id}
            whileTap={{ scale: 0.98 }}
            onClick={() => onDoctorClick(doctor)}
            className="bg-white rounded-3xl p-4 flex gap-4 shadow-sm border border-slate-100 cursor-pointer"
          >
            <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col justify-between py-1">
              <div>
                <h3 className="font-bold text-lg text-slate-800">{doctor.name}</h3>
                <p className="text-slate-400 text-sm">{doctor.specialization} • {doctor.clinic}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-bold">{doctor.rating}</span>
                </div>
                <span className="text-slate-300 text-sm">({doctor.reviews} reviews)</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
