
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  GraduationCap, 
  MessageCircle, 
  Users, 
  CheckCircle, 
  Award 
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mentor data
const mentors = [
  {
    id: 1,
    name: 'Алмас Сәрсенбаев',
    position: 'Senior Software Engineer',
    company: 'Tech Company',
    specialization: 'Бағдарламалау (Python, Java)',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 2,
    name: 'Динара Қасымова',
    position: 'UX/UI Designer',
    company: 'Design Studio',
    specialization: 'Веб-дизайн және пайдаланушы интерфейсі',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 3,
    name: 'Ерлан Мұратов',
    position: 'Frontend Developer',
    company: 'IT Company',
    specialization: 'Веб-әзірлеу (JavaScript, React)',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 4,
    name: 'Айжан Бердібаева',
    position: 'Data Scientist',
    company: 'Analytics Inc',
    specialization: 'Деректерді талдау және машиналық оқыту',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=300',
  }
];

const Mentorship = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-eduspace-800 to-eduspace-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Тәлімгерлік жүйесі</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Тәжірибелі мамандар мен студенттер оқушыларға онлайн түрде көмек көрсетеді. Тәлімгерлер жеке бағыттар бойынша консультациялар беріп, білімдерін бөліседі.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Қалай жұмыс істейді</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-eduspace-100 rounded-full flex items-center justify-center mx-auto mb-4 text-eduspace-600">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Тәлімгерді таңдаңыз</h3>
              <p className="text-gray-600">
                Сізге қажетті бағыт бойынша тәжірибелі тәлімгерді таңдаңыз
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-eduspace-100 rounded-full flex items-center justify-center mx-auto mb-4 text-eduspace-600">
                <Calendar size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Кездесу жоспарлаңыз</h3>
              <p className="text-gray-600">
                Сізге ыңғайлы уақытта онлайн кездесу жоспарлаңыз
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-eduspace-100 rounded-full flex items-center justify-center mx-auto mb-4 text-eduspace-600">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Кеңес алыңыз</h3>
              <p className="text-gray-600">
                Онлайн кеңес алып, сұрақтарыңызға жауап алыңыз
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Тәлімгерлік артықшылықтары</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="mr-4 text-eduspace-600">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Жеке көмек</h3>
                <p className="text-gray-600">
                  Сіздің қажеттіліктеріңізге сәйкес келетін жеке көмек пен кеңес алу
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="mr-4 text-eduspace-600">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Тәжірибелі мамандар</h3>
                <p className="text-gray-600">
                  Өз саласында тәжірибелі мамандардан сапалы кеңес алу
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="mr-4 text-eduspace-600">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Үздіксіз қолдау</h3>
                <p className="text-gray-600">
                  Оқу процесінде үздіксіз қолдау және көмек алу
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="mr-4 text-eduspace-600">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Жетістікке жету</h3>
                <p className="text-gray-600">
                  Мақсаттарыңызға жетуге көмек беретін жолдарды табу
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mentors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Біздің тәлімгерлер</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md card-hover">
                <div className="p-4 text-center">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                  <p className="text-eduspace-600 font-medium mb-1">{mentor.position}</p>
                  <p className="text-gray-500 text-sm mb-3">{mentor.company}</p>
                  <p className="text-gray-600 mb-4">{mentor.specialization}</p>
                  <Button asChild className="w-full bg-eduspace-600 hover:bg-eduspace-700">
                    <Link to="/contact#register">Байланысу</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Mentor */}
      <section className="py-16 bg-eduspace-50 border-t border-eduspace-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <div className="w-14 h-14 bg-eduspace-100 rounded-full flex items-center justify-center mb-6 text-eduspace-600">
                  <Award size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Тәлімгер болғыңыз келе ме?</h3>
                <p className="text-gray-600 mb-6">
                  Өз білімдеріңіз бен тәжірибеңізді бөлісіп, ауыл мектептерінің оқушыларына көмек көрсетіңіз. Тәлімгер ретінде тіркеліп, оқушыларға көмек көрсетіңіз.
                </p>
                <Button asChild className="bg-eduspace-600 hover:bg-eduspace-700">
                  <Link to="/contact#register">Тәлімгер ретінде тіркелу</Link>
                </Button>
              </div>
              <div className="md:w-1/2 bg-eduspace-600 p-8 text-white flex items-center">
                <div>
                  <h4 className="text-xl font-bold mb-4">Тәлімгер артықшылықтары</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-2 mt-1 flex-shrink-0" />
                      <span>Оқушылар мен студенттерге көмектесу арқылы қоғамға үлес қосу</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-2 mt-1 flex-shrink-0" />
                      <span>Оқыту және көшбасшылық дағдыларыңызды дамыту</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-2 mt-1 flex-shrink-0" />
                      <span>Кәсіби желіңізді кеңейту және жаңа байланыстар орнату</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mentorship;
