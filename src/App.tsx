import React from 'react';
import { MessageSquare, Calendar, ClipboardList, Bell, Download, Mail, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">CareConnect –</span>
                <span className="block text-blue-600">Empowering Nurses,</span>
                <span className="block text-blue-600">Enhancing Care</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                CareConnect simplifies patient care with real-time communication, scheduling, and digital records for nurses.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                {/* download apk file */}
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" 
                  onClick={() => window.open('http://localhost:5173/careconnect.apk', '_blank')}
                >
                  <Download className="w-5 h-5 mr-2"  />
                  Download APK
                </button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <img
                className="w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                alt="Nurse using mobile app"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Features that make a difference
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Feature
              icon={<Bell className="w-8 h-8 text-blue-500" />}
              title="Real-time Updates"
              description="Stay informed with instant patient status notifications and updates."
            />
            <Feature
              icon={<MessageSquare className="w-8 h-8 text-blue-500" />}
              title="Secure Messaging"
              description="Communicate securely with your team and patients' families."
            />
            <Feature
              icon={<Calendar className="w-8 h-8 text-blue-500" />}
              title="Smart Scheduling"
              description="Efficiently manage shifts and appointments with intelligent scheduling."
            />
            <Feature
              icon={<ClipboardList className="w-8 h-8 text-blue-500" />}
              title="Digital Records"
              description="Access and manage patient records seamlessly from your device."
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
            Hear from nurses using CareConnect
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Testimonial
              quote="CareConnect has revolutionized how I manage my daily tasks. It's intuitive and saves me so much time."
              author="Sarah Johnson"
              role="RN, Emergency Department"
            />
            <Testimonial
              quote="The real-time updates feature is a game-changer. I can provide better care with instant access to patient information."
              author="Michael Chen"
              role="Nurse Practitioner"
            />
            <Testimonial
              quote="Scheduling shifts has never been easier. The app is truly designed with nurses in mind."
              author="Emily Rodriguez"
              role="ICU Nurse"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact Us</h3>
              <div className="mt-4 space-y-4">
                <a href="mailto:contact@careconnect.com" className="text-base text-gray-500 hover:text-gray-900 flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  contact@careconnect.com
                </a>
                <a href="tel:+1234567890" className="text-base text-gray-500 hover:text-gray-900 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  (123) 456-7890
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Follow Us</h3>
              <div className="mt-4 space-y-4">
                <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
                <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
                <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <div className="mt-4 space-y-4">
                <a href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy Policy</a>
                <br />
                <a href="#" className="text-base text-gray-500 hover:text-gray-900">Terms of Service</a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; {new Date().getFullYear()} CareConnect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="relative p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="absolute top-6 left-6">{icon}</div>
      <div className="pl-12">
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
}

function Testimonial({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <p className="text-gray-600 italic">"{quote}"</p>
      <div className="mt-4">
        <p className="font-medium text-gray-900">{author}</p>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a href={href} className="text-gray-400 hover:text-gray-500 flex items-center">
      {icon}
      <span className="ml-2">{label}</span>
    </a>
  );
}

export default App;