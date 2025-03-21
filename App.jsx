import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaBuilding, FaCopyright } from 'react-icons/fa';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const services = [
  {
    title: 'Previdenciário',
    description: 'Assessoria completa em direito previdenciário e benefícios do INSS.',
    image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Consumidor',
    description: 'Defesa dos seus direitos nas relações de consumo.',
    image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Cível',
    description: 'Resolução de conflitos e questões de direito civil.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Trabalhista',
    description: 'Proteção dos seus direitos trabalhistas. ',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Digital',
    description: 'Consultoria e proteção jurídica para questões digitais e tecnológicas.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Criminalista',
    description: 'Defesa criminal especializada e assessoria em processos penais.',
    image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&q=80&w=800'
  }
];

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('api.contacts')
        .insert([formData]);
      
      if (error) throw error;
      
      alert('Mensagem enviada com sucesso!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      alert('Erro ao enviar mensagem. Tente novamente.');
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5575992014213', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 fixed w-full z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Borges&Barreto</h1>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center"
          >
            <FaWhatsapp className="mr-2" />
            Entre em contato
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-900 text-white relative">
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 py-16 text-center relative z-1">
          <h2 className="text-4xl font-bold mb-4">Escritório de Advocacia Borges&Barreto</h2>
          <p className="text-xl mb-8">Excelência e compromisso em serviços jurídicos</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="h-48 mb-4 rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Serviço</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border"
                  required
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Mensagem</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border h-32"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Borges&Barreto</h3>
              <p className="text-gray-400">Excelência em serviços jurídicos</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <FaPhone className="mr-2" /> (75) 9 9201-4213
                </p>
                <p className="flex items-center">
                  <FaEnvelope className="mr-2" /> myerlembarretoadv@gmail.com
                </p>
                <p className="flex items-center">
                  <FaBuilding className="mr-2" /> Centro, 48780000 - Biritinga/BA
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
              <p className="text-gray-400">Segunda a Sexta: 8h às 18h</p>
              <p className="text-gray-400">Sábado: 8h às 12h</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p className="flex items-center justify-center">
              <FaCopyright className="mr-2" /> {new Date().getFullYear()} Borges&Barreto Advocacia e consultoria jurídica. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;