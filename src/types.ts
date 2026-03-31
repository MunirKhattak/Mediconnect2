export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  clinic: string;
  rating: number;
  reviews: number;
  image: string;
  about: string;
}

export interface Specialization {
  id: string;
  name: string;
  icon: string;
  count: number;
  color: string;
  iconColor: string;
  description?: string;
  doctors?: string[]; // For avatars
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  specialization: string;
  clinic: string;
  date: string;
  time: string;
  doctorImage: string;
}
