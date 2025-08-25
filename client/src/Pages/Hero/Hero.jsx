/* eslint-disable no-unused-vars */
import React, { lazy, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// COMPONENTS IMPORT
import DotGrid from "../../components/Backgrounds/DotGrid/DotGrid";
import Footer from "../../components/Footer/Footer";

// LAZY LOADED COMPONENTS
const AboutContent = lazy(() => import("../../components/AboutContent/AboutContent"));
const Contact = lazy(() => import("../../components/Contact/Contact"));

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Hero() {
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const headerRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const resultsSectionRef = useRef(null);

  // 3D card tilt effect for hero card
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

  // Header scroll effect
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === -1) {
          // Scrolling up
          gsap.to(header, {
            y: 0,
            duration: 0.5,
            ease: "power2.out"
          });
        } else if (self.direction === 1 && self.progress > 0.1) {
          // Scrolling down past a certain point
          gsap.to(header, {
            y: -100,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      }
    });
  }, []);

  // Page scroll animations
  useEffect(() => {
    // Animate hero content on page load
    gsap.fromTo(".hero-content", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Animate sections on scroll
    gsap.utils.toArray(".section-animate").forEach(section => {
      gsap.fromTo(section,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Parallax effect for decorative elements
    gsap.to(".parallax-bg-1", {
      y: -50,
      scrollTrigger: {
        scrub: true
      }
    });

    gsap.to(".parallax-bg-2", {
      y: 50,
      scrollTrigger: {
        scrub: true
      }
    });
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="w-screen relative bg-zinc-900" ref={heroRef}>
      {/* Full-screen DotGrid background */}
      <div className="fixed inset-0">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <DotGrid
            dotSize={2}
            gap={30}
            baseColor="#2DD4BF"
            activeColor="#14B8A6"
            proximity={100}
            shockRadius={150}
            shockStrength={3}
            resistance={500}
            returnDuration={1.2}
          />
        </div>
      </div>

      {/* Content overlay with transparent header */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* HEADER SECTION STARTS HERE*/}
        <header 
          ref={headerRef}
          className="flex items-center justify-center fixed top-0 right-0 z-40 bg-zinc-900/90 backdrop-blur-lg w-full h-16 md:h-20 border-b border-teal-500/10 transition-all duration-300"
        >
          <nav className="container mx-auto flex justify-between items-center px-4 md:px-8 w-full h-full">
            <Link
              to=""
              className="flex items-center p-2 transition-all duration-200 ease-in-out hover:bg-zinc-800/30 rounded-xl group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/7444/7444400.png"
                alt="Logo"
                className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
              />
            </Link>

            <div className="flex items-center space-x-2 md:space-x-4">
              <button
                onClick={() => scrollToSection(resultsSectionRef)}
                className="font-medium text-sm md:text-base transition-all duration-200 ease-in-out rounded-xl py-2 px-3 md:px-4 text-gray-200 hover:text-teal-400 hover:bg-zinc-800/30"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection(aboutSectionRef)}
                className="font-medium text-sm md:text-base transition-all duration-200 ease-in-out rounded-xl py-2 px-3 md:px-4 text-gray-200 hover:text-teal-400 hover:bg-zinc-800/30"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(contactSectionRef)}
                className="font-medium text-sm md:text-base transition-all duration-200 ease-in-out rounded-xl py-2 px-3 md:px-4 text-gray-200 hover:text-teal-400 hover:bg-zinc-800/30"
              >
                Contact
              </button>
            </div>
          </nav>
        </header>
        {/* HEADER SECTION ENDS HERE */}

        {/* HERO SECTION STARTS HERE */}
        <section className="min-h-screen flex flex-col items-center justify-center w-full text-center text-white pt-16 md:pt-20 px-4">
          <div 
            ref={cardRef}
            className="hero-content w-full max-w-4xl mx-auto px-6 py-10 md:px-12 md:py-16 bg-zinc-900/80 backdrop-blur-lg rounded-3xl border border-teal-500/10 shadow-xl shadow-teal-500/10 transform-gpu"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.3s ease'
            }}
          >
            <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight mb-4 md:mb-6">
              Modern <span className="text-teal-400">Voting</span> for the
              Digital Age
            </h1>

            <h2 className="text-base md:text-xl font-medium text-gray-200 mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed">
              Secure, transparent, and simple — building election technology you
              can trust.
            </h2>

            <p className="text-sm md:text-lg text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto">
              Your voice matters. Cast your vote with confidence using our
              innovative platform.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <Link
                to="/registeration"
                className="px-5 py-3 md:px-8 md:py-4 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium hover:scale-105 transition-all duration-300 group relative overflow-hidden text-sm md:text-base"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              <button
                onClick={() => scrollToSection(aboutSectionRef)}
                className="px-5 py-3 md:px-8 md:py-4 rounded-xl border border-teal-500/20 text-gray-200 font-medium hover:bg-zinc-800/30 hover:border-teal-500/30 transition-all duration-300 group relative overflow-hidden text-sm md:text-base"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </section>
        {/* HERO SECTION ENDS HERE */}

        {/* Results section placeholder */}
        <section ref={resultsSectionRef} className="min-h-screen flex items-center justify-center py-20 section-animate">
          <div className="text-center text-white px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Results Section</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Coming soon....</p>
          </div>
        </section>

        {/* About section with scroll animation */}
        <section ref={aboutSectionRef} className="min-h-screen flex items-center justify-center py-20 section-animate">
          <AboutContent />
        </section>

        {/* Contact section with scroll animation */}
        <section ref={contactSectionRef} className="min-h-screen flex items-center justify-center py-20 section-animate">
          <Contact />
        </section>

        {/* Footer section */}
        <footer className="pt-20 section-animate">
          <Footer />
        </footer>
      </div>

      {/* Subtle decorative elements with parallax */}
      <div className="fixed bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none z-30"></div>
      <div className="fixed top-1/4 right-1/4 w-40 h-40 rounded-full bg-teal-500/5 blur-3xl pointer-events-none parallax-bg-1"></div>
      <div className="fixed bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-teal-500/5 blur-3xl pointer-events-none parallax-bg-2"></div>
    </main>
  );
}

export default Hero;