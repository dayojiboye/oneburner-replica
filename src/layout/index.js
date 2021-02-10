import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import './styles.scss';

const Layout = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const location = useLocation();

  const menuBtnHandler = () => {
    setDrawerOpen(!isDrawerOpen);

    document.documentElement.classList.toggle('_fixed');
    document.body.classList.toggle('_fixed');
  };

  useEffect(() => {
    setDrawerOpen(false);

    document.documentElement.classList.remove('_fixed');
    document.body.classList.remove('_fixed');

    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header clicked={menuBtnHandler} isOpen={isDrawerOpen} />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
