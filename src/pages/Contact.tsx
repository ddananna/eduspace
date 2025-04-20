
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('contact');
  
  // Form states
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    role: 'student',
    interest: '',
    school: ''
  });
  
  useEffect(() => {
    // Check if we should show the register tab based on URL hash
    if (window.location.hash === '#register') {
      setActiveTab('register');
    }
  }, [searchParams]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Хабарлама жіберілді",
      description: "Біз сізбен жақын арада байланысамыз.",
    });
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Тіркелу сәтті аяқталды",
      description: "Сіз EduSpace платформасына сәтті тіркелдіңіз!",
    });
    setRegisterForm({
      name: '',
      email: '',
      phone: '',
      location: '',
      role: 'student',
      interest: '',
      school: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-eduspace-800 to-eduspace-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Байланыс және тіркелу</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Бізбен байланысып, сұрақтарыңызға жауап алыңыз немесе платформаға тіркеліңіз
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-eduspace-100 rounded-full flex items-center justify-center mx-auto mb-4 text-eduspace-600">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (7XX) XXX-XX-XX</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-eduspace-100 rounded-full flex items-center justify-center mx-auto mb-4 text-eduspace-600">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Электрондық пошта</h3>
              <p className="text-gray-600">info@eduspace.kz</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-eduspace-100 rounded-full flex items-center justify-center mx-auto mb-4 text-eduspace-600">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Мекенжай</h3>
              <p className="text-gray-600">Нұр-Сұлтан, Қазақстан</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form / Registration Form */}
      <section className="py-12 bg-gray-50 flex-grow">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="contact">Байланыс формасы</TabsTrigger>
                <TabsTrigger value="register">Тіркелу</TabsTrigger>
              </TabsList>
              
              <TabsContent value="contact">
                <Card>
                  <CardHeader>
                    <CardTitle>Бізбен байланыс</CardTitle>
                    <CardDescription>
                      Сұрақтарыңыз болса немесе қосымша ақпарат қажет болса, бізге хабарласыңыз
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Аты-жөніңіз</Label>
                          <Input 
                            id="name" 
                            placeholder="Аты-жөніңізді енгізіңіз" 
                            value={contactForm.name}
                            onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Электрондық пошта</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="email@example.com" 
                            value={contactForm.email}
                            onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="message">Хабарлама</Label>
                          <Textarea 
                            id="message" 
                            placeholder="Хабарламаңызды енгізіңіз" 
                            rows={5}
                            value={contactForm.message}
                            onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                      
                      <Button type="submit" className="w-full bg-eduspace-600 hover:bg-eduspace-700">
                        Жіберу
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="register">
                <Card>
                  <CardHeader>
                    <CardTitle>Тіркелу формасы</CardTitle>
                    <CardDescription>
                      Оқушылар мен мұғалімдер үшін тіркелу формасы. Өзіңіздің аты-жөніңізді, байланыс деректеріңізді енгізіп, біздің тегін курстарға қатыса бастаңыз.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleRegisterSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="reg-name">Аты-жөніңіз</Label>
                          <Input 
                            id="reg-name" 
                            placeholder="Аты-жөніңізді енгізіңіз" 
                            value={registerForm.name}
                            onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="reg-email">Электрондық пошта</Label>
                          <Input 
                            id="reg-email" 
                            type="email" 
                            placeholder="email@example.com" 
                            value={registerForm.email}
                            onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон</Label>
                          <Input 
                            id="phone" 
                            placeholder="+7 (XXX) XXX-XX-XX" 
                            value={registerForm.phone}
                            onChange={(e) => setRegisterForm({...registerForm, phone: e.target.value})}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="location">Қала/Ауыл</Label>
                          <Select
                            value={registerForm.location}
                            onValueChange={(value) => setRegisterForm({...registerForm, location: value})}
                          >
                            <SelectTrigger id="location">
                              <SelectValue placeholder="Таңдаңыз" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="city">Қала</SelectItem>
                              <SelectItem value="village">Ауыл</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Label>Рөліңіз</Label>
                        <RadioGroup 
                          value={registerForm.role}
                          onValueChange={(value) => setRegisterForm({...registerForm, role: value})}
                          className="flex space-x-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="student" id="student" />
                            <Label htmlFor="student" className="cursor-pointer">Оқушы</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="teacher" id="teacher" />
                            <Label htmlFor="teacher" className="cursor-pointer">Мұғалім</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="mentor" id="mentor" />
                            <Label htmlFor="mentor" className="cursor-pointer">Тәлімгер</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      {registerForm.role === 'student' && (
                        <div className="space-y-2">
                          <Label htmlFor="school">Мектеп атауы</Label>
                          <Input 
                            id="school" 
                            placeholder="Мектебіңіздің атауын енгізіңіз" 
                            value={registerForm.school}
                            onChange={(e) => setRegisterForm({...registerForm, school: e.target.value})}
                          />
                        </div>
                      )}
                      
                      <div className="space-y-2">
                        <Label htmlFor="interest">Қызығушылық</Label>
                        <Select
                          value={registerForm.interest}
                          onValueChange={(value) => setRegisterForm({...registerForm, interest: value})}
                        >
                          <SelectTrigger id="interest">
                            <SelectValue placeholder="Таңдаңыз" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="programming">Бағдарламалау</SelectItem>
                            <SelectItem value="web">Веб-әзірлеу</SelectItem>
                            <SelectItem value="design">Дизайн</SelectItem>
                            <SelectItem value="digital">Цифрлық сауаттылық</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <Button type="submit" className="w-full bg-eduspace-600 hover:bg-eduspace-700">
                        Тіркелу
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
