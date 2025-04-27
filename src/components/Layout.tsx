
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PromoBar from './PromoBar';

const Layout = () => {
  const [showPromo, setShowPromo] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      {showPromo && <PromoBar onClose={() => setShowPromo(false)} />}
      <div className={`flex-grow ${showPromo ? 'pt-10 sm:pt-12' : ''}`}>
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
