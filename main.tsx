import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Book, Trophy, Terminal, Image } from 'lucide-react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      <div 
        className="fixed w-4 h-4 bg-purple-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference z-50"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div 
        className="fixed w-8 h-8 border border-purple-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference z-50"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
          transition: 'transform 0.2s ease-out'
        }}
      />
    </>
  );
};

const PosterPlaceholder = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg border-2 border-dashed border-purple-400">
    <Image className="w-16 h-16 text-purple-400 mb-4" />
    <p className="text-purple-200 text-center px-4">
      Replace placeholder with your poster image<br/>
      <span className="text-sm opacity-75">Recommended size: 600x800px (3:4 ratio)</span>
    </p>
  </div>
);

const HackClubEvent = () => {
  const GOOGLE_FORM_URL = "https://forms.gle/your-form-id";
  
  const schedule = [
    {
      day: "Day 1 (Jan 15)",
      time: "7:00 PM",
      topics: [
        "Introduction to the event",
        "Python Installation",
        "Git Installation",
        "Python Basics: Syntax, Data Structures",
        "Basic operations and loops",
        "File Handling + projects",
        "Git pushing"
      ]
    },
    {
      day: "Day 2 (Jan 16)",
      time: "7:00 PM",
      topics: [
        "Advanced topics",
        "Project selection",
        "Brainstorming session"
      ]
    },
    {
      day: "Day 3 (Jan 17)",
      time: "7:00 PM",
      topics: [
        "Final Project Presentation",
        "Best Project Award Ceremony"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white cursor-none">
      <CustomCursor />
      
      {/* Hero Section */}
      <div className="h-screen grid grid-cols-2">
        {/* Left Side - Title */}
        <div className="flex flex-col justify-center px-12 bg-gradient-to-br from-purple-900 to-black">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/api/placeholder/40/40" 
                alt="HackClub Logo" 
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">HackClub ASIET</span>
            </div>
            
            <h1 className="text-6xl font-bold leading-tight">
              Project
              <br />
              A.S.A.P
            </h1>
            
            <p className="text-xl text-gray-300">
              An intensive Python bootcamp to kickstart your development journey
            </p>

            <a 
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-purple-700 transform transition hover:-translate-y-0.5"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Right Side - Poster with 3:4 ratio */}
        <div className="relative flex items-center justify-center bg-purple-900 overflow-hidden">
          <div className="w-[75%] relative" style={{ aspectRatio: '3/4' }}>
            {/* Replace the src attribute with your poster image path */}
            <img 
              src="/api/placeholder/600/800" 
              alt="Event Poster"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl opacity-0"
            />
            <PosterPlaceholder />
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-purple-500/10 rounded-lg -z-10"></div>
            <div className="absolute -inset-2 bg-purple-500/20 rounded-lg -z-20"></div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Event Details</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 hover:text-purple-400 transition-colors">
                <Calendar className="w-6 h-6 text-purple-400" />
                <span>January 15-17, 2025</span>
              </div>
              
              <div className="flex items-center space-x-3 hover:text-purple-400 transition-colors">
                <Clock className="w-6 h-6 text-purple-400" />
                <span>7:00 PM onwards</span>
              </div>
              
              <div className="flex items-center space-x-3 hover:text-purple-400 transition-colors">
                <User className="w-6 h-6 text-purple-400" />
                <span>Mentor: Nandhu Krishnan (M.Sc AI & Data Science)</span>
              </div>
              
              <div className="flex items-center space-x-3 hover:text-purple-400 transition-colors">
                <Trophy className="w-6 h-6 text-purple-400" />
                <span>Best Project Award & Certificates for all participants</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">What you'll learn:</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Python Programming',
                  'Git & Version Control',
                  'Creative Thinking',
                  'Project Development',
                  'Collaborative Skills',
                  'Problem Solving'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
                    <Terminal className="w-4 h-4 text-purple-400" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Schedule</h2>
            <div className="space-y-8">
              {schedule.map((day, index) => (
                <div key={index} className="bg-purple-900/30 p-6 rounded-lg hover:bg-purple-900/40 transition-colors">
                  <h3 className="text-xl font-semibold mb-4">{day.day}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span>{day.time}</span>
                  </div>
                  <ul className="space-y-2">
                    {day.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackClubEvent;
