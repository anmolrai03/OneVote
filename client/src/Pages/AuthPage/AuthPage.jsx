/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// COMPONENTS IMPORT
import Login from '../../components/Auth/Login/Login';
import Signup from '../../components/Auth/Signup/Signup';

// Main AuthPage Component
function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleComponent = () => {
    setShowLogin(!showLogin);
  };

  return (
    <main className="min-h-screen w-full flex bg-zinc-50">
      {/* Left Panel - Branding */}
      <div className="hidden md:flex md:w-1/2 bg-zinc-900 items-center justify-center p-12">
        <div className="text-center">
          <div className="w-20 h-20 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            One<span className="text-teal-400">Vote</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Secure, transparent voting for the digital age
          </p>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        {showLogin ? (
          <Login toggleComponent={toggleComponent} />
        ) : (
          <Signup toggleComponent={toggleComponent} />
        )}
      </div>
    </main>
  );
}

export default AuthPage;