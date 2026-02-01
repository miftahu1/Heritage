'use client'

import { useReducer, useCallback, FC, FormEvent, ChangeEvent } from 'react';
import { Clock, User, Calendar, MessageSquare, Phone } from 'lucide-react';
import Image from 'next/image';

// --- FORM LOGIC ---
type State = { name: string; guests: string; date: string; time: string; requests: string; };
type Action = { type: 'SET_FIELD'; field: keyof State; value: string };

const initialState: State = { name: '', guests: '2', date: '', time: '', requests: '' };
const formReducer = (state: State, action: Action): State => {
    if (action.type === 'SET_FIELD') return { ...state, [action.field]: action.value };
    return state;
};

// --- REUSABLE COMPONENTS ---

const SectionHeader: FC = () => (
    <div className="text-center mb-10">
        <h2 id="reservations-heading" className="font-playfair text-4xl md:text-5xl text-emerald-900 mb-4">Make a Reservation</h2>
        <p className="text-gray-700 max-w-lg mx-auto">Secure your table for an unforgettable dining experience.</p>
    </div>
);

interface FormFieldProps {
    id: string; name: keyof State; label: string; type: string;
    value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    icon: React.ElementType; required?: boolean;
}

const FormField: FC<FormFieldProps> = ({ id, name, label, type, value, onChange, icon: Icon, required }) => (
    <div className="relative">
        <input
            id={id} name={name} type={type} value={value} onChange={onChange}
            // Use peer to connect input state to the label
            className="peer w-full pl-11 pr-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder-transparent focus:outline-none focus:border-emerald-500 transition-all"
            placeholder={label}
            required={required}
        />
        <label
            htmlFor={id}
            // Styling for the floating label
            className="absolute left-11 top-3 text-gray-500 transition-all text-base peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-emerald-600 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-emerald-600 bg-white px-1 pointer-events-none"
        >
            {label}
        </label>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="text-gray-400 peer-focus:text-emerald-600" size={20} />
        </div>
    </div>
);

const ReservationForm: FC = () => {
    const [formState, dispatch] = useReducer(formReducer, initialState);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch({ type: 'SET_FIELD', field: e.target.name as keyof State, value: e.target.value });
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const { name, guests, date, time, requests } = formState;
        const message = `Hello! I'd like to make a reservation for *${name}*.
- Guests: *${guests}*
- Date: *${date}*
- Time: *${time}*
- Special Requests: *${requests || 'None'}*`;
        const whatsappUrl = `https://wa.me/919864020240?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FormField id="name" name="name" label="Full Name" type="text" value={formState.name} onChange={handleChange} icon={User} required />
                <FormField id="guests" name="guests" label="Number of Guests" type="number" value={formState.guests} onChange={handleChange} icon={User} required />
                <FormField id="date" name="date" label="Date" type="date" value={formState.date} onChange={handleChange} icon={Calendar} required />
                <FormField id="time" name="time" label="Time" type="time" value={formState.time} onChange={handleChange} icon={Clock} required />
            </div>
            <div className="relative">
                <textarea id="requests" name="requests" value={formState.requests} onChange={handleChange} placeholder="Any special requests?" rows={3}
                  className="peer w-full pl-11 pr-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder-transparent focus:outline-none focus:border-emerald-500 transition-all"
                ></textarea>
                <label htmlFor="requests" className="absolute left-11 top-3 text-gray-500 transition-all text-base peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-emerald-600 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-emerald-600 bg-white px-1 pointer-events-none">Special Requests</label>
                <div className="absolute top-3 left-0 pl-3 flex items-center pointer-events-none"><MessageSquare className="text-gray-400 peer-focus:text-emerald-600" size={20} /></div>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-emerald-700 to-emerald-900 text-white font-bold py-4 px-6 rounded-lg hover:from-emerald-600 hover:to-emerald-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">Reserve via WhatsApp</button>
        </form>
    );
};

const ContactInfo: FC = () => (
    <div className="mt-10 text-center">
        <p className="text-gray-600 mb-4">For same-day reservations or large groups, please call us.</p>
        <a href="tel:+919864020240" className="inline-flex items-center justify-center bg-white border-2 border-emerald-800 text-emerald-800 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-md hover:shadow-lg">
            <Phone size={18} className="mr-3" />
            Call for Reservation
        </a>
    </div>
);

// --- MAIN COMPONENT ---
export default function Reservations() {
    return (
        <section id="reservations" className="py-16 md:py-24" style={{background: 'linear-gradient(to bottom, #f0fdf4, #fefce8)'}}>
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="w-full lg:w-3/5 order-2 lg:order-1 bg-white/70 backdrop-blur-xl p-4 md:p-12 rounded-2xl shadow-2xl">
                        <SectionHeader />
                        <ReservationForm />
                    </div>
                    <div className="w-full lg:w-2/5 order-1 lg:order-2 flex flex-col items-center">
                        <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
                             <Image src="/Images/ambience/interior2.jpg" alt="Elegant restaurant interior" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
                        </div>
                         <ContactInfo />
                    </div>
                </div>
            </div>
        </section>
    );
}