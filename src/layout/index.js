import React, { useState } from 'react';

import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import './styles.scss';

const Layout = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const menuBtnHandler = () => {
    setDrawerOpen(!isDrawerOpen);

    document.documentElement.classList.toggle('fixed');
    document.body.classList.toggle('fixed');
  };

  return (
    <div className="layout">
      <Header clicked={menuBtnHandler} isOpen={isDrawerOpen} />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
