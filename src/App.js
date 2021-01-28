import React, { useEffect } from 'react';

import { AnimatePresence } from 'framer-motion';

import { Route, Switch } from 'react-router-dom';

// layout

import Layout from './layout';

// pages

import { HomePage } from './pages/home';

function App() {
  useEffect(() => {
    window.addEventListener('load', () => {
      document.body.style.opacity = '';
    });
  }, []);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Layout>
      </AnimatePresence>
    </>
  );
}

export default App;
