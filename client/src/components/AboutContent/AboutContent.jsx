/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function AboutContent() {
  
  const aboutRef = useRef(null);
  const cardRef = useRef(null);

  // 3D card tilt effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateY = (x - centerX) / 25;
      const rotateX = (centerY - y) / 25;
      
      gsap.to(card, {
        rotationY: rotateY,
        rotationX: rotateX,
        transformPerspective: 1000,
        ease: "power2.out",
        duration: 0.5
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        ease: "power2.out",
        duration: 1
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Floating animation
  useEffect(() => {
    if (aboutRef.current) {
      gsap.to(aboutRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center w-full text-center text-white py-20 px-4">
      {/* Animated background elements */}
      <div className="absolute top-10 left-1/4 w-20 h-20 rounded-full bg-zinc-800/50 blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-24 h-24 rounded-full bg-zinc-800/50 blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div ref={aboutRef} className="relative z-10 max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            About <span className="text-teal-400">OneVote</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-4"></div>
        </div>

        {/* Main Card Container - Matching the Hero style */}
        <div 
          ref={cardRef}
          className="relative bg-zinc-900/80 backdrop-blur-md rounded-3xl border border-teal-500/10 p-8 transform-gpu shadow-xl"
          style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 0.3s ease'
          }}
        >
          {/* Mission Section */}
          <div className="relative z-5 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-400 mb-6">
              Our Mission
            </h2>
            <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              At OneVote, our mission is to create a simple and secure online voting
              platform that empowers citizens to exercise their democratic rights. We
              aim to make the voting process accessible, transparent, and efficient,
              ensuring that every voice is heard.
            </p>
          </div>

          {/* Team Section */}
          <div className="relative z-5 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-400 mb-6">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-zinc-800/40 p-6 rounded-xl border border-teal-500/20 hover:border-teal-500/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-teal-400 font-bold text-lg">AC</span>
                </div>
                <h3 className="text-lg font-bold text-teal-300 mb-2">Anmol Chauhan</h3>
                <p className="text-gray-300 text-sm">Backend Developer</p>
              </div>
              <div className="bg-zinc-800/40 p-6 rounded-xl border border-teal-500/20 hover:border-teal-500/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-teal-400 font-bold text-lg">AR</span>
                </div>
                <h3 className="text-lg font-bold text-teal-300 mb-2">Anmol Rai</h3>
                <p className="text-gray-300 text-sm">Frontend Developer</p>
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="relative z-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-400 mb-6">
              Technologies Used
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { name: "React", icon: "⚛️", id: 1 },
                { name: "Django", icon: "🐍", id: 2 },
                { name: "Tailwind CSS", icon: "🎨", id: 3 },
                { name: "Vite", icon: "⚡", id: 4 },
                { name: "Webcam API", icon: "📷", id: 5 },
                { name: "GSAP", icon: "✨", id: 6 }
              ].map((tech) => (
                <div 
                  key={tech.id}
                  className="bg-zinc-800/40 p-4 rounded-xl border border-teal-500/20 hover:border-teal-500/30 hover:scale-105 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-sm font-medium text-teal-300">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-zinc-900/80 backdrop-blur-md rounded-xl p-6 border border-teal-500/10 hover:border-teal-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-teal-400 text-xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-teal-400 mb-2">Security First</h3>
            <p className="text-gray-300 text-sm">End-to-end encryption and biometric verification ensure your vote is secure.</p>
          </div>

          <div className="bg-zinc-900/80 backdrop-blur-md rounded-xl p-6 border border-teal-500/10 hover:border-teal-500/20 transition-all duration-300">
            <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-teal-400 text-xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-teal-400 mb-2">Lightning Fast</h3>
            <p className="text-gray-300 text-sm">Built with modern technologies for a smooth and responsive voting experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContent;