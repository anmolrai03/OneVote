import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function LoadingPage() {
  const logoRef = useRef(null);
  const circlesRef = useRef([]);
  const progressRef = useRef(null);
  const dotsRef = useRef([]);
  const textRef = useRef(null);
  
  // Add circles to ref array
  const addToCirclesRef = (el) => {
    if (el && !circlesRef.current.includes(el)) {
      circlesRef.current.push(el);
    }
  };
  
  // Add dots to ref array
  const addToDotsRef = (el) => {
    if (el && !dotsRef.current.includes(el)) {
      dotsRef.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    
    // Logo animation
    tl.to(logoRef.current, {
      scale: 1.1,
      duration: 0.8,
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1
    });
    
    // Circle animations
    circlesRef.current.forEach((circle, index) => {
      tl.to(circle, {
        scale: 1.2,
        opacity: 0,
        duration: 2,
        ease: "power1.out",
        delay: index * 0.3
      }, 0);
    });
    
    // Progress bar animation
    tl.to(progressRef.current, {
      width: "100%",
      duration: 3,
      ease: "power1.inOut"
    }, 0);
    
    // Dots animation
    dotsRef.current.forEach((dot, index) => {
      tl.to(dot, {
        y: -15,
        duration: 0.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 5,
        delay: index * 0.2
      }, 0);
    });
    
    // Text animation
    tl.to(textRef.current, {
      opacity: 0.7,
      duration: 1,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    }, 0);

    return () => {
      tl.kill(); // Clean up animation on unmount
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-zinc-900 flex items-center justify-center z-50">
      <div className="text-center max-w-md mx-auto p-8 bg-zinc-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-zinc-700/30">
        {/* Logo with animated circles */}
        <div className="relative mb-8 flex justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Animated circles */}
            <div 
              ref={addToCirclesRef}
              className="absolute w-24 h-24 border-2 border-cyan-400/30 rounded-full"
            ></div>
            <div 
              ref={addToCirclesRef}
              className="absolute w-32 h-32 border-2 border-cyan-400/20 rounded-full"
            ></div>
            <div 
              ref={addToCirclesRef}
              className="absolute w-40 h-40 border-2 border-cyan-400/10 rounded-full"
            ></div>
          </div>
          
          {/* Main logo */}
          <div
            ref={logoRef}
            className="w-20 h-20 bg-cyan-500 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg shadow-cyan-500/30 z-10"
          >
            ✓
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-2">
          One<span className="text-cyan-400">Vote</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-300 mb-6">Securing your voting experience</p>

        {/* Progress bar */}
        <div className="h-2 bg-zinc-700 rounded-full overflow-hidden mb-6">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full w-0"
          ></div>
        </div>

        {/* Loading text */}
        <p ref={textRef} className="text-gray-400 mb-4">
          Loading security protocols...
        </p>

        {/* Animated dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              ref={addToDotsRef}
              className="w-3 h-3 bg-cyan-400 rounded-full"
            ></div>
          ))}
        </div>
      </div>

      {/* Subtle background elements to match homepage */}
      <div className="absolute top-20 right-10 w-24 h-24 rounded-full bg-cyan-500/10 blur-xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-cyan-400/10 blur-xl pointer-events-none"></div>
    </div>
  );
}

export default LoadingPage;