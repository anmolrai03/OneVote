/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative z-10 bg-zinc-900/90 backdrop-blur-lg border-t border-cyan-500/20 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand and Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/7444/7444400.png"
                alt="Logo"
                className="w-9 h-9"
              />
              <h2 className="text-2xl font-extrabold text-white">
                One<span className="text-cyan-400">Vote</span>
              </h2>
            </Link>
            <nav className="flex flex-wrap gap-4 md:gap-6">
              <Link
                to="/"
                className="text-gray-200 text-sm font-medium hover:text-cyan-300 hover:underline transition-all duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-200 text-sm font-medium hover:text-cyan-300 hover:underline transition-all duration-200"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-200 text-sm font-medium hover:text-cyan-300 hover:underline transition-all duration-200"
              >
                Contact
              </Link>
              <Link
                to="/results"
                className="text-gray-200 text-sm font-medium hover:text-cyan-300 hover:underline transition-all duration-200"
              >
                Results
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">
              Connect With Us
            </h3>
            <div className="flex gap-5">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-cyan-300 hover:scale-110 transition-all duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-cyan-300 hover:scale-110 transition-all duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-cyan-300 hover:scale-110 transition-all duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.852 0-2.136 1.446-2.136 2.94v5.666H9.351V9.25h3.414v1.561h.048c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.27 2.37 4.27 5.455v6.038zM5.337 7.433c-1.144 0-2.063-.93-2.063-2.077 0-1.147.92-2.077 2.063-2.077 1.147 0 2.077.93 2.077 2.077 0 1.147-.93 2.077-2.077 2.077zM7.119 20.452H3.553V9.25h3.566v11.202zM22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-cyan-300 hover:scale-110 transition-all duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.627.073-3.065.393-4.243 1.571C1.633 2.821 1.313 4.259 1.24 5.886c-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.073 1.627.393 3.065 1.571 4.243 1.178 1.178 2.616 1.498 4.243 1.571 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.627-.073 3.065-.393 4.243-1.571 1.178-1.178 1.498-2.616 1.571-4.243.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.073-1.627-.393-3.065-1.571-4.243-1.178-1.178-2.616-1.498-4.243-1.571-1.28-.058-1.688-.072-4.947-.072z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} OneVote. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
