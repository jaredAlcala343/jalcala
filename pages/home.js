import Image from 'next/image';
import './index.module.css';
import Navbar from './navbar';

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="about-container bg-gray-900 min-h-screen text-gray-200">
        {/* Hero Section */}
        <section className="hero bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 px-6 md:px-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            {/* Left Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                Hola, Soy Jared
              </h1>
              <p className="text-xl md:text-2xl mb-6 animate-slide-up">
                Desarrollador Web Full Stack - Construyo experiencias increíbles en la web.
              </p>
              <a
                href="#skills"
                className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition duration-300"
              >
                Descubre mi trabajo
              </a>
            </div>
            {/* Right Image */}
            <div className="w-full md:w-1/2 mt-10 md:mt-0 animate-fade-in-slow">
              <Image
                src="/profile-image.jpg" // Pon tu imagen aquí
                width={500}
                height={500}
                className="rounded-full shadow-lg"
                alt="Jared Profile"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-800 text-gray-200">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Mis Habilidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {/* Skill Cards */}
              <div className="skill-card animate-zoom">
                <div className="text-6xl mb-4">⚛️</div>
                <h3 className="text-xl font-semibold">React</h3>
              </div>
              <div className="skill-card animate-zoom">
                <div className="text-6xl mb-4">💻</div>
                <h3 className="text-xl font-semibold">Next.js</h3>
              </div>
              <div className="skill-card animate-zoom">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold">Tailwind CSS</h3>
              </div>
              <div className="skill-card animate-zoom">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold">HTML & CSS</h3>
              </div>
              <div className="skill-card animate-zoom">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold">JavaScript</h3>
              </div>
              <div className="skill-card animate-zoom">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold">Node.js</h3>
              </div>
              <div className="skill-card animate-zoom">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold">c#</h3>
              </div>
              <div className="skill-card animate-zoom">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold">.Net</h3>
              </div>
              <div className="skill-card animate-zoom">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold">SQL</h3>
              </div>
              <div className="skill-card animate-zoom">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold">sql server</h3>
              </div>
              <div className="skill-card animate-zoom">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold">Visual Basic</h3>
              </div>
              <div className="skill-card animate-zoom">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold">PL/SQL</h3>
              </div>
              <div className="skill-card animate-zoom">
                <div className="text-6xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold">APIs & Backend</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-gray-800 py-20 text-gray-200">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Experiencia y Logros</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="experience-card p-6 bg-gray-700 rounded shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold mb-2">Proyecto 1</h3>
                <p>
                  Desarrollo de una aplicación PWA con React y Node.js que automatiza procesos.
                </p>
              </div>
              <div className="experience-card p-6 bg-gray-700 rounded shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold mb-2">Logro 1</h3>
                <p>Colaboración en equipos ágiles entregando soluciones rápidas y eficientes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para trabajar juntos?</h2>
          <a
            href="#contact"
            className="bg-white text-orange-500 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition duration-300"
          >
            Contáctame
          </a>
        </section>
      </div>
    </div>
  );
}
