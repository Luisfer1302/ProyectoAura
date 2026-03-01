import React, { useState } from 'react';
import { 
  Bell, 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Calendar, 
  Brain, 
  Moon, 
  Droplets, 
  Home, 
  Activity, 
  User,
  ArrowLeft,
  CheckCircle2,
  Stethoscope,
  MapPin,
  CalendarPlus,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Screen = 'home' | 'booking' | 'confirmation';

// --- Components ---

const BottomNav = ({ activeScreen, setScreen }: { activeScreen: Screen, setScreen: (s: Screen) => void }) => (
  <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-6 py-3 pb-8 max-w-md mx-auto z-50">
    <div className="flex justify-between items-center">
      <button 
        onClick={() => setScreen('home')}
        className={`flex flex-col items-center gap-1 ${activeScreen === 'home' ? 'text-primary' : 'text-slate-400'}`}
      >
        <Home size={24} />
        <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
      </button>
      <button 
        onClick={() => setScreen('booking')}
        className={`flex flex-col items-center gap-1 ${activeScreen === 'booking' ? 'text-primary' : 'text-slate-400'}`}
      >
        <Calendar size={24} />
        <span className="text-[10px] font-bold uppercase tracking-wider">Schedule</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-slate-400">
        <Activity size={24} />
        <span className="text-[10px] font-bold uppercase tracking-wider">Health</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-slate-400">
        <User size={24} />
        <span className="text-[10px] font-bold uppercase tracking-wider">Profile</span>
      </button>
    </div>
  </nav>
);

const HomeScreen = ({ onBook }: { onBook: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="pb-32"
  >
    {/* Header */}
    <header className="flex items-center justify-between px-6 py-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
          <img 
            src="https://picsum.photos/seed/alex/100/100" 
            alt="Profile" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <p className="text-xs text-slate-500 font-medium">Good morning,</p>
          <h1 className="text-xl font-bold text-aura-indigo dark:text-white">Alex Rivera</h1>
        </div>
      </div>
      <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative">
        <Bell size={20} className="text-aura-indigo dark:text-white" />
        <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white dark:border-slate-800"></span>
      </button>
    </header>

    {/* Wellness Score Card */}
    <section className="px-6 mb-8">
      <div className="bg-aura-emerald/10 dark:bg-aura-emerald/20 border border-aura-emerald/20 rounded-3xl p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Daily Wellness Score</h2>
          <div className="w-5 h-5 rounded-full border border-primary/40 flex items-center justify-center text-[10px] text-primary font-bold">i</div>
        </div>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-7xl font-bold text-aura-indigo dark:text-white">84</span>
          <span className="text-primary font-bold flex items-center text-sm">
            <ChevronRight size={14} className="-rotate-45" /> +5%
          </span>
        </div>
        <div className="h-2 w-full bg-aura-indigo/10 dark:bg-white/10 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-primary w-[84%] rounded-full"></div>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          You're doing better than <span className="font-bold text-aura-indigo dark:text-white">82%</span> of users today. Keep it up!
        </p>
      </div>
    </section>

    {/* Core Features */}
    <section className="px-6 mb-8">
      <h2 className="text-lg font-bold text-aura-indigo dark:text-white mb-4">Core Features</h2>
      <div className="space-y-3">
        <button className="w-full flex items-center justify-between p-4 bg-[#0d9488] rounded-2xl text-white group active:scale-[0.98] transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Heart size={24} fill="white" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-lg">Health Monitoring</h3>
              <p className="text-xs text-white/70">Check vitals and biometrics</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-white/50 group-hover:text-white" />
        </button>

        <button 
          onClick={onBook}
          className="w-full flex items-center justify-between p-4 bg-[#4f46e5] rounded-2xl text-white group active:scale-[0.98] transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Calendar size={24} fill="white" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-lg">Schedule</h3>
              <p className="text-xs text-white/70">Next: Dr. Smith at 2:00 PM</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-white/50 group-hover:text-white" />
        </button>

        <button className="w-full flex items-center justify-between p-4 bg-[#166534] rounded-2xl text-white group active:scale-[0.98] transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Brain size={24} className="text-aura-emerald" fill="currentColor" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-lg">Mental Wellness</h3>
              <p className="text-xs text-white/70">Meditation and mood tracking</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-white/50 group-hover:text-white" />
        </button>
      </div>
    </section>

    {/* Quick Stats */}
    <section className="px-6 grid grid-cols-2 gap-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl">
        <Moon size={20} className="text-orange-500 mb-2" />
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Sleep</p>
        <p className="text-xl font-bold text-aura-indigo dark:text-white">7h 20m</p>
      </div>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl">
        <Droplets size={20} className="text-blue-500 mb-2" />
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Hydration</p>
        <p className="text-xl font-bold text-aura-indigo dark:text-white">1.2L / 2L</p>
      </div>
    </section>
  </motion.div>
);

const BookingScreen = ({ onConfirm, onBack }: { onConfirm: () => void, onBack: () => void }) => {
  const [selectedDate, setSelectedDate] = useState(4);
  const [selectedTime, setSelectedTime] = useState('10:30 AM');

  const dates = [
    { day: 'Mon', date: 2 },
    { day: 'Tue', date: 3 },
    { day: 'Wed', date: 4 },
    { day: 'Thu', date: 5 },
    { day: 'Fri', date: 6 },
    { day: 'Sat', date: 7 },
  ];

  const times = [
    { time: '09:00 AM', status: 'Available', icon: 'morning' },
    { time: '10:30 AM', status: 'Selected', icon: 'morning' },
    { time: '11:15 AM', status: 'Available', icon: 'morning' },
    { time: '02:00 PM', status: 'Available', icon: 'afternoon' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="pb-40"
    >
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button onClick={onBack} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
            <ArrowLeft size={24} className="text-aura-indigo dark:text-primary" />
          </button>
          <h1 className="text-xl font-extrabold text-aura-indigo dark:text-white">Book Appointment</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="px-6 py-6">
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-aura-indigo dark:text-white">Select Date</h2>
            <div className="flex items-center gap-2">
              <ChevronLeft size={18} className="text-slate-400" />
              <span className="text-sm font-bold">October 2023</span>
              <ChevronRight size={18} className="text-slate-400" />
            </div>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar">
            {dates.map((d) => (
              <button 
                key={d.date}
                onClick={() => setSelectedDate(d.date)}
                className={`flex flex-col items-center justify-center min-w-[70px] h-24 rounded-2xl border-2 transition-all ${
                  selectedDate === d.date 
                  ? 'border-primary bg-primary/10' 
                  : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900'
                }`}
              >
                <span className={`text-xs font-bold uppercase ${selectedDate === d.date ? 'text-aura-emerald' : 'text-slate-400'}`}>
                  {d.day}
                </span>
                <span className={`text-xl font-bold ${selectedDate === d.date ? 'text-aura-emerald' : 'text-aura-indigo dark:text-white'}`}>
                  {d.date < 10 ? `0${d.date}` : d.date}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-aura-indigo dark:text-white mb-4">Available Time Slots</h2>
          <div className="space-y-3">
            {times.map((t) => (
              <button 
                key={t.time}
                onClick={() => setSelectedTime(t.time)}
                className={`w-full flex items-center justify-between p-5 rounded-xl border-2 transition-all ${
                  selectedTime === t.time
                  ? 'border-primary bg-primary/10'
                  : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-4">
                  {t.icon === 'morning' ? <Moon size={20} className="text-slate-400" /> : <Bell size={20} className="text-slate-400" />}
                  <span className={`text-lg font-bold ${selectedTime === t.time ? 'text-aura-emerald' : 'text-aura-indigo dark:text-white'}`}>
                    {t.time}
                  </span>
                </div>
                {selectedTime === t.time ? (
                  <CheckCircle2 size={20} className="text-aura-emerald" />
                ) : (
                  <span className="text-sm font-semibold text-slate-400">Available</span>
                )}
              </button>
            ))}
          </div>
        </section>
      </main>

      <div className="fixed bottom-24 left-0 right-0 px-6 max-w-md mx-auto z-40">
        <button 
          onClick={onConfirm}
          className="w-full py-5 bg-aura-indigo dark:bg-primary text-white dark:text-aura-indigo rounded-2xl shadow-xl flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
        >
          <span className="text-lg font-black uppercase tracking-wider">Confirm Appointment</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </motion.div>
  );
};

const ConfirmationScreen = ({ onHome }: { onHome: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.1 }}
    className="min-h-screen flex flex-col px-6 pt-12 pb-10"
  >
    <div className="flex-1 flex flex-col items-center">
      <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-8">
        <CheckCircle2 size={64} className="text-primary" />
      </div>
      <h1 className="text-3xl font-bold text-center text-aura-indigo dark:text-white mb-2">Appointment Confirmed</h1>
      <p className="text-slate-500 dark:text-slate-400 text-center mb-10">Your wellness journey with Aura is all set!</p>

      <div className="w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="h-40 bg-slate-200 relative">
          <img 
            src="https://picsum.photos/seed/map/600/300" 
            alt="Map" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
        </div>
        
        <div className="p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center shrink-0">
              <Stethoscope size={28} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1">Specialist</p>
              <h3 className="text-xl font-bold text-aura-indigo dark:text-white">Dr. Helena Sterling</h3>
              <p className="text-sm text-slate-500">Holistic Wellness Expert</p>
            </div>
          </div>

          <div className="space-y-5 pt-6 border-t border-slate-50 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <Calendar size={24} className="text-primary" />
              <div>
                <p className="text-xs text-slate-400 font-medium">Date & Time</p>
                <p className="font-bold text-aura-indigo dark:text-white">Thursday, Oct 24 • 10:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={24} className="text-primary" />
              <div>
                <p className="text-xs text-slate-400 font-medium">Location</p>
                <p className="font-bold text-aura-indigo dark:text-white">Aura Wellness, 123 Health St.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="space-y-4 mt-8">
      <button className="w-full py-4 bg-primary text-aura-indigo rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-[0.98] transition-all">
        <CalendarPlus size={20} />
        Add to Calendar
      </button>
      <button 
        onClick={onHome}
        className="w-full py-4 border-2 border-aura-indigo dark:border-primary text-aura-indigo dark:text-primary rounded-2xl font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
      >
        <Home size={20} />
        Return to Home
      </button>
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');

  return (
    <div className="min-h-screen max-w-md mx-auto bg-[#f6f8f6] dark:bg-background-dark relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {screen === 'home' && (
          <HomeScreen key="home" onBook={() => setScreen('booking')} />
        )}
        {screen === 'booking' && (
          <BookingScreen 
            key="booking" 
            onConfirm={() => setScreen('confirmation')} 
            onBack={() => setScreen('home')} 
          />
        )}
        {screen === 'confirmation' && (
          <ConfirmationScreen key="confirmation" onHome={() => setScreen('home')} />
        )}
      </AnimatePresence>

      <BottomNav activeScreen={screen} setScreen={setScreen} />
      
      {/* iOS style home indicator */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full z-50 pointer-events-none"></div>
    </div>
  );
}
