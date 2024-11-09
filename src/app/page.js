'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Skills from './components/Skills';

const Header = dynamic(() => import('./components/Header'), { ssr: false });
const Footer = dynamic(() => import('./components/Footer'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-800 via-teal-500 to-blue-800 text-white text-center py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 10 }}
        transition={{ duration: 2 }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-extrabold mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-2xl font-light mb-8 max-w-lg mx-auto">
            Where creativity meets technology and ideas come to life.
          </p>
          <motion.div
            className="flex justify-center space-x-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <a
              href="#about"
              className="bg-teal-600 text-white py-3 px-8 rounded-lg text-xl font-semibold hover:bg-teal-500 transition-all"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg text-xl font-semibold hover:bg-white hover:text-teal-600 transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100 text-center px-6 sm:px-16">
        <motion.h2
          className="text-4xl font-extrabold mb-8 text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 mb-6">
          I am a passionate developer with expertise in creating responsive, user-centered web applications.
          I specialize in HTML, CSS, JavaScript, and frameworks like Next.js and React. My goal is to build intuitive
          and high-quality solutions that cater to modern digital needs.
        </p>
        <div className="flex justify-center mt-8">
          <img
            src="/image.png"
            alt="My Profile"
            className="rounded-full h-48 w-48 border-4 border-teal-500 shadow-lg"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white text-center px-6 sm:px-16">
        <motion.h2
          className="text-4xl font-extrabold mb-8 text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 text-center px-6 sm:px-16">
        <motion.h2
          className="text-4xl font-extrabold mb-6 text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>
        <p className="text-lg mb-8 text-gray-700">
          I’m open to new opportunities and collaborations. Let’s connect and create something amazing together.
        </p>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <a
            href="mailto:anamanwer268@gmail.com"
            className="bg-teal-600 text-white py-3 px-8 rounded-lg text-xl font-semibold hover:bg-teal-500 transition-all"
          >
            Email Me
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
