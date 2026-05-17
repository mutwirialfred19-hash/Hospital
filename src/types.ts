export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  education: string;
  availability: string[];
  rating: number;
  image: string;
  description: string;
}

export interface Department {
  id: string;
  name: string;
  icon: string;
  description: string;
  services: string[];
  image: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  departmentId: string;
}
