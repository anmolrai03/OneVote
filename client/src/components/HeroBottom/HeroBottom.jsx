/* eslint-disable no-unused-vars */

//REACT IMPORTS
import React from "react";
import { Link, NavLink } from "react-router-dom";

// COMPONENTS IMPORT
import DotGrid from "../Backgrounds/DotGrid/DotGrid";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import AboutContent from "../AboutContent/AboutContent";

function HeroBottom() {
  return (
    <main className="min-h-screen w-screen relative overflow-hidden bg-zinc-900">
      {/* Full-screen DotGrid background */}
      <div className="absolute inset-0">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <DotGrid
            dotSize={2}
            gap={30}
            baseColor="#4F46E5"
            activeColor="#10B981"
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
        {/* Transparent header */}
        <header className="flex items-center justify-center sticky top-0 right-0 z-30 bg-transparent backdrop-blur-lg w-full max-h-[15vh] min-h-[70px] md:h-[10vh]">
          <nav className="container mx-auto flex justify-between items-center p-3 w-full h-full">
            <Link
              to="/"
              className="hidden md:flex p-2 md:p-3 transition-all duration-200 ease-in-out hover:bg-zinc-800/40 rounded-lg"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/7444/7444400.png"
                alt="Logo"
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </Link>

            <div className="flex">
              <h1 className="block font-extrabold text-2xl md:text-4xl cursor-pointer items-center transition-all duration-200 ease-in-out text-white">
                One<span className="text-cyan-400">Vote</span>
              </h1>
            </div>

            <NavLink
              to="/results"
              className={({ isActive }) =>
                `font-medium text-base md:text-lg transition-all duration-200 ease-in-out rounded-2xl py-2 px-4 ${
                  isActive
                    ? "text-cyan-400 bg-zinc-800/70"
                    : "text-gray-200 hover:text-cyan-300 hover:bg-zinc-800/40"
                }`
              }
            >
              Results
            </NavLink>
          </nav>
        </header>

        {/* Main content */}
        <AboutContent />
        <Contact />
        <Footer />

        {/* Subtle decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none"></div>
      </div>
    </main>
  );
}

export default HeroBottom;