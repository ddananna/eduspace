
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Book, Code, GraduationCap, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-eduspace-800 to-eduspace-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 space-y-6 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                EduSpace — ауылдық мектеп оқушыларына арналған тегін IT білім беру платформасы
              </h1>
              <p className="text-xl text-eduspace-100 mb-8">
                Бұл сайт ауыл оқушыларына заманауи IT мамандықтарын үйрену мүмкіндігін ұсынады. Тіркеліп, білім алу жолын бастаңыз!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-eduspace-700 hover:bg-eduspace-50">
                  <Link to="/courses">Курстарды қарау</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact#register">Тіркелу</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Students learning"
                className="w-full max-w-md rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Біздің мақсатымыз</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ауылдық аймақтардағы балаларға сапалы білім беру, оларға болашақта жоғары оқу орындарына түсуге немесе еңбек нарығында табысты жұмыс істеуге мүмкіндік беру.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Қызметтер</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="w-14 h-14 bg-eduspace-100 rounded-full flex items-center justify-center mb-4 text-eduspace-600">
                <Book size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Тегін онлайн курстар</h3>
              <p className="text-gray-600">
                IT саласы бойынша сапалы және тегін курстар
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="w-14 h-14 bg-eduspace-100 rounded-full flex items-center justify-center mb-4 text-eduspace-600">
                <Code size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Заманауи IT дағдылар</h3>
              <p className="text-gray-600">
                Веб-әзірлеу, бағдарламалау және цифрлық дағдыларды меңгеру
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="w-14 h-14 bg-eduspace-100 rounded-full flex items-center justify-center mb-4 text-eduspace-600">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Тәлімгерлік байланыс</h3>
              <p className="text-gray-600">
                Тәжірибелі мамандардан жеке кеңес алу мүмкіндігі
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="w-14 h-14 bg-eduspace-100 rounded-full flex items-center justify-center mb-4 text-eduspace-600">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">ЖОО-ға түсуге көмек</h3>
              <p className="text-gray-600">
                Жоғары оқу орындарына түсуге дайындық және кеңес беру
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-eduspace-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Қатысу</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Біздің курстарымызға қосылып, жаңа дағдыларды үйреніңіз!
          </p>
          <Button asChild size="lg" className="bg-white text-eduspace-700 hover:bg-eduspace-50">
            <Link to="/contact#register">Қазір тіркелу</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
