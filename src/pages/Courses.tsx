
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Course data
const coursesData = [
  {
    id: 1,
    title: 'Python негіздері',
    category: 'programming',
    level: 'beginner',
    instructor: 'Азамат Болатов',
    description: 'Python бағдарламалау тілінің негіздерін үйреніңіз. Бағдарламалау әлеміне енудің ең тиімді жолдары.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    title: 'JavaScript негіздері',
    category: 'programming',
    level: 'beginner',
    instructor: 'Айгүл Сапарова',
    description: 'JavaScript тілін меңгеру арқылы веб-әзірлеу негіздерін үйреніңіз.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    title: 'HTML/CSS негіздері',
    category: 'web',
    level: 'beginner',
    instructor: 'Саят Нұрланов',
    description: 'Веб-сайттар жасаудың негізі болған HTML және CSS технологияларын үйреніңіз.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 4,
    title: 'Веб-дизайн',
    category: 'web',
    level: 'intermediate',
    instructor: 'Дана Серікова',
    description: 'Заманауи веб-сайттарды дизайнын жасауды және пайдаланушы интерфейсін құру негіздерін үйреніңіз.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 5,
    title: 'Компьютерлік дағдылар',
    category: 'digital',
    level: 'beginner',
    instructor: 'Мақсат Жұмабаев',
    description: 'Цифрлық сауаттылық негіздерін үйреніңіз. Компьютерлік дағдылар, интернет қауіпсіздігі.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 6,
    title: 'Интернет қауіпсіздігі',
    category: 'digital',
    level: 'intermediate',
    instructor: 'Бауыржан Тоқтаров',
    description: 'Интернетте қауіпсіз жұмыс істеу және қауіп-қатерден қорғану әдістерін үйреніңіз.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=400'
  }
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = coursesData.filter(course => {
    return (selectedCategory === 'all' || course.category === selectedCategory) &&
           (selectedLevel === 'all' || course.level === selectedLevel) &&
           (course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            course.description.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  const getLevelName = (level: string) => {
    switch (level) {
      case 'beginner': return 'Бастапқы';
      case 'intermediate': return 'Орта';
      case 'advanced': return 'Жоғары';
      default: return level;
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'programming': return 'Бағдарламалау';
      case 'web': return 'Веб-әзірлеу';
      case 'digital': return 'Цифрлық сауаттылық';
      default: return category;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-eduspace-800 to-eduspace-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Курстар бөлімi</h1>
          <p className="text-xl max-w-3xl mx-auto">
            IT саласындағы әр түрлі бағыттар бойынша біздің курстарымызды қараңыз және өзіңізге қажетті білімді алыңыз
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Категория</label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md px-3 py-2 focus:ring-eduspace-500 focus:border-eduspace-500"
                >
                  <option value="all">Барлығы</option>
                  <option value="programming">Бағдарламалау</option>
                  <option value="web">Веб-әзірлеу</option>
                  <option value="digital">Цифрлық сауаттылық</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Деңгей</label>
                <select 
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md px-3 py-2 focus:ring-eduspace-500 focus:border-eduspace-500"
                >
                  <option value="all">Барлығы</option>
                  <option value="beginner">Бастапқы</option>
                  <option value="intermediate">Орта</option>
                  <option value="advanced">Жоғары</option>
                </select>
              </div>
            </div>
            
            <div className="w-full md:w-auto flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  placeholder="Курсты іздеу..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md block w-full pl-10 p-2.5 focus:ring-eduspace-500 focus:border-eduspace-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-12 bg-gray-50 flex-grow">
        <div className="container mx-auto px-6">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <Badge className="bg-eduspace-100 text-eduspace-800 hover:bg-eduspace-200">
                        {getCategoryName(course.category)}
                      </Badge>
                      <Badge variant="outline">
                        {getLevelName(course.level)}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-500 text-sm mb-2">Оқытушы: {course.instructor}</p>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <Button asChild className="w-full bg-eduspace-600 hover:bg-eduspace-700">
                      <Link to={`/contact#register`}>Курсқа жазылу</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">Курстар табылмады</h3>
              <p className="text-gray-500">Іздеу параметрлерін өзгертіп көріңіз</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
