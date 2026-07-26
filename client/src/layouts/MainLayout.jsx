import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';
import ScrollToTop from '../components/common/ScrollToTop';
import useScrollToTop from '../hooks/useScrollToTop';

const MainLayout = () => {
  useScrollToTop();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
