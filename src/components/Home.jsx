import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Importing icons
import Navigation from './Navigation';
import './Home.css';
import gsap from 'gsap';

function Home() {
  useEffect(() => {
    gsap.fromTo('.hero-overlay', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
    );

    gsap.fromTo('.relative.z-10', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="HomeContainer">
      <Navigation />
      <div className="hero-overlay">
        <div className="relative flex flex-col lg:flex-row overflow-hidden flex-grow">
          <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 lg:py-20 xl:py-28">
            <div className="relative z-10 pb-8 rounded-lg">
              <main className="flex flex-col justify-center h-full">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Welcome to</span>{' '}
                    <span className="block xl:inline">Warden's Space</span>
                  </h1>
                  <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Efficiently manage hostel operations and student information with our comprehensive system.
                  </p>
                  <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Stay organized and ensure a smooth experience for both the warden and students.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow-lg">
                      <Link
                        to="/about"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out"
                      >
                        Learn More
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link
                        to="/contact"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */} 
<footer className="footer bg-gray-900 text-white py-8">
  <div className="footer-content container mx-auto flex flex-col items-center">

    {/* Creators Section */}
    <div className="creators-section flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12">
    
      {/* Creator 1 */}
      <div className="flex flex-col items-center space-y-4">
        <img 
          src="/images/myphoto.jpg" 
          alt="Debasish Maharana" 
          className="creator-photo rounded-full w-20 h-20 object-cover border-4 border-gray-700 shadow-lg"
        />
        <div className="creator-info text-center">
          <p className="footer-text font-bold text-lg">Created by Debasish Maharana</p>
          <p className="footer-text text-sm text-gray-400">© 2024 Warden's Space. All rights reserved.</p>
        </div>
        {/* Social Icons for Creator 1 */}
        <div className="social-icons flex space-x-6">
          <a 
            href="https://www.linkedin.com/in/debasish-maharana-a90872218/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://x.com/Debasis00236812" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a 
            href="mailto:debasishmaharana28@gmail.com"
            className="text-gray-400 hover:text-red-500 transition duration-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      {/* Creator 2 */}
      <div className="flex flex-col items-center space-y-4">
        <img 
          src="/images/tej.jpg" 
          alt="Creator 2" 
          className="creator-photo rounded-full w-20 h-20 object-cover border-4 border-gray-700 shadow-lg"
        />
        <div className="creator-info text-center">
          <p className="footer-text font-bold text-lg">Created by Tejeswar Maharana</p>
          <p className="footer-text text-sm text-gray-400">© 2024 Warden's Space. All rights reserved.</p>
        </div>
        {/* Social Icons for Creator 2 */}
        <div className="social-icons flex space-x-6">
          <a 
            href="https://www.linkedin.com/in/creator2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://x.com/creator2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a 
            href="mailto:creator2@example.com"
            className="text-gray-400 hover:text-red-500 transition duration-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      {/* Creator 3 */}
      <div className="flex flex-col items-center space-y-4">
        <img 
          src="/images/creator3.jpg" 
          alt="Creator 3" 
          className="creator-photo rounded-full w-20 h-20 object-cover border-4 border-gray-700 shadow-lg"
        />
        <div className="creator-info text-center">
          <p className="footer-text font-bold text-lg">Created by Amlan Jyoti</p>
          <p className="footer-text text-sm text-gray-400">© 2024 Warden's Space. All rights reserved.</p>
        </div>
        {/* Social Icons for Creator 3 */}
        <div className="social-icons flex space-x-6">
          <a 
            href="https://www.linkedin.com/in/creator3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://x.com/creator3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a 
            href="mailto:creator3@example.com"
            className="text-gray-400 hover:text-red-500 transition duration-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

    </div>

  </div>
</footer>





    </div>
  );
}

export default Home;
