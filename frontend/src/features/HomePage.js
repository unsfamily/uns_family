import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // logic for login
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // logic for signup
  };

  const sectors = [
    { name: 'AGRICULTURE', image: '/images/agri.jpg' },
    { name: 'EDUCATION', image: '/images/edu.jpg' },
    { name: 'RENEWABLE ENERGY', image: '/images/energy.jpg' },
    { name: 'HEALTHCARE', image: '/images/healthc.jpg' },
    { name: 'E-COMMERCE', image: '/images/ecom.jpg' },
    { name: 'REAL ESTATE', image: '/images/realestate.jpg' },
    { name: 'HYBRID CEX', image: '/images/cex.jpg' },
    { name: 'DEX', image: '/images/dex.jpg' },
    { name: 'OWN BLOCKCHAIN', image: '/images/blockchain.jpg' },
    { name: 'GAMISM', image: '/images/game.jpg' },
    { name: 'SPORTS', image: '/images/sport.jpg' },
    { name: 'HOSPITALITY', image: '/images/hosp.jpg' },
  ];

  return (
    <div>
      <Header onLogin={handleLogin} onSignup={handleSignup} />

      {/* Hero Section */}
      <section className="text-white text-center">
        <div className="max-w-7xl mx-auto px-4 pt-6">
          <img src="images/UNS.png" alt="Hero Banner" className="w-full" />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto text-center py-10 px-4">
        <h2 className="text-2xl font-bold mb-6">Explore Your Investment Opportunities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
              <img src={sector.image} alt={sector.name} className="w-full h-48 object-cover" />
              <div className="border-t px-4 py-3">
                <h2 className="text-gray-800 font-semibold text-center text-sm">{sector.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;