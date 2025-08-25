/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

function Contact() {

  //VARIABLE DECLEARTION
  const [formData, setFormData] = useState({ name: "", email: "", query: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const contactRef = useRef(null);
  const cardRef = useRef(null);

  // HANDLE CHANGES
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // FORM HANDLING
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Show success animation
    setIsSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", query: "" });
      setIsSubmitted(false);
    }, 3000);
  };

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
        duration: 0.5,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        ease: "power2.out",
        duration: 1,
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
    if (contactRef.current) {
      gsap.to(contactRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center w-full text-center text-white py-20 px-4">
      {/* Animated background elements */}
      <div className="absolute top-10 left-1/4 w-20 h-20 rounded-full bg-zinc-800/50 blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-24 h-24 rounded-full bg-zinc-800/50 blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <div ref={contactRef} className="relative z-10 max-w-4xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-4">
            Get In <span className="text-white">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Have questions or feedback? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        {/* 3D Card Form */}
        <div
          ref={cardRef}
          className="relative bg-zinc-900/80 backdrop-blur-md rounded-3xl border border-teal-500/10 p-8 transform-gpu"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.3s ease",
          }}
        >
          {/* Success message */}
          {isSubmitted && (
            <div className="absolute inset-0 bg-zinc-900/95 backdrop-blur-md rounded-3xl flex items-center justify-center z-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-teal-400 mb-2">Message Sent!</h3>
                <p className="text-gray-200">We&apos;ll get back to you soon.</p>
              </div>
            </div>
          )}

          {/*FORM SECTION STARTS HERE */}
          <form onSubmit={handleSubmit} className="relative z-5">
            <div className="space-y-6">

              {/* NAME FIELD STARTS HERE */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-zinc-800/40 border border-teal-500/20 rounded-xl text-gray-200 focus:outline-none focus:border-teal-400 transition-all duration-300"
                  placeholder="enter your name...."
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 transform origin-left"
                >
                  
                </label>
              </div>
              {/* NAME FIELD ENDS HERE */}

              {/* EMAIL FIELD STARTS HERE */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-zinc-800/40 border border-teal-500/20 rounded-xl text-gray-200 focus:outline-none focus:border-teal-400 transition-all duration-300"
                  placeholder="enter email...."
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 transform origin-left"
                >
                  
                </label>
              </div>
              {/* EMAIL FIELD ENDS HERE */}

              {/* QUERY FIELD STARTS HERE */}
              <div className="relative">
                <textarea
                  id="query"
                  value={formData.query}
                  onChange={handleChange}
                  className="w-full p-4 bg-zinc-800/40 border border-teal-500/20 rounded-xl text-gray-200 focus:outline-none focus:border-teal-400 transition-all duration-300 resize-none"
                  rows="4"
                  placeholder="query......"
                  required
                ></textarea>
                <label
                  htmlFor="query"
                  className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 transform origin-left"
                >
                  
                </label>
              </div>
              {/* QUERY FIELD ENDS HERE */}

              {/* BUTTON SECTION STARTS HERE */}
              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:scale-105 disabled:hover:scale-100 disabled:opacity-50 transition-all duration-300 group relative overflow-hidden cursor-pointer"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              {/* BUTTON SECTION ENDS HERE */}

            </div>

          </form>
          {/* FORM SECTION ENDS HERE */}
        </div>

        {/* Contact information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-zinc-900/80 backdrop-blur-md rounded-xl p-6 border border-teal-500/10 hover:border-teal-500/30 transition-all duration-300">
            <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-teal-400 mb-2">Email</h3>
            <p className="text-gray-200">contact@onevote.com</p>
          </div>

          <div className="bg-zinc-900/80 backdrop-blur-md rounded-xl p-6 border border-teal-500/10 hover:border-teal-500/30 transition-all duration-300">
            <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-teal-400 mb-2">Phone</h3>
            <p className="text-gray-200">+1 (555) 123-4567</p>
          </div>

          <div className="bg-zinc-900/80 backdrop-blur-md rounded-xl p-6 border border-teal-500/10 hover:border-teal-500/30 transition-all duration-300">
            <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-teal-400 mb-2">Location</h3>
            <p className="text-gray-200">123 Tech Street, Digital City</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;