import { Doctor, Department } from './types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    icon: 'Heart',
    description: 'Advanced heart care services including diagnostics, treatment, and rehabilitation.',
    services: ['ECG', 'Echocardiogram', 'Stress Test', 'Cardio Surgery'],
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    icon: 'Baby',
    description: 'Comprehensive healthcare for infants, children, and adolescents.',
    services: ['Vaccinations', 'Growth Monitoring', 'Child Nutrition', 'Emergency Care'],
    image: 'https://images.unsplash.com/photo-1581594632702-f2ff23a28c33?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'neurology',
    name: 'Neurology',
    icon: 'Brain',
    description: 'Specialized diagnosis and treatment of disorders of the nervous system.',
    services: ['Sleep Study', 'EEG', 'Neuro Surgery', 'Stroke Care'],
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    icon: 'Stethoscope',
    description: 'Expert treatment for bone, joint, ligament, and muscle conditions.',
    services: ['Joint Replacement', 'Sports Medicine', 'Physiotherapy', 'Spine Care'],
    image: 'https://images.unsplash.com/photo-1579389083395-4507e9847e67?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'maternity',
    name: 'Maternity',
    icon: 'Users',
    description: 'Compassionate prenatal, childbirth, and postnatal care.',
    services: ['Prenatal Screening', 'Labor & Delivery', 'Lactation Support', 'Neonatal Care'],
    image: '/src/assets/images/maternity_ward_1779033580169.png'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    experience: '15+ Years',
    education: 'Johns Hopkins University',
    availability: ['Mon', 'Wed', 'Fri'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400',
    description: 'Specialist in interventional cardiology and advanced heart failure management.'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Neurology',
    experience: '12+ Years',
    education: 'Stanford Medical School',
    availability: ['Tue', 'Thu', 'Sat'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    description: 'Expert in treating complex neurological disorders and neurodegenerative diseases.'
  },
  {
    id: '3',
    name: 'Dr. Emily Brown',
    specialty: 'Pediatrics',
    experience: '10+ Years',
    education: 'Harvard Medical School',
    availability: ['Mon', 'Tue', 'Thu'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
    description: 'Dedicated to providing gentle and thorough pediatric care for children of all ages.'
  }
];
