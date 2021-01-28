import React, { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { Route, Switch } from 'react-router-dom';

// layout

import Layout from './layout';

// pages

import { HomePage } from './pages/home';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoaded(true);
    });
  }, []);

  return (
    <>
      {loaded ? (
        <AnimatePresence exitBeforeEnter>
          <Layout>
            <Switch>
              <Route path="/" exact component={HomePage} />
            </Switch>
          </Layout>
        </AnimatePresence>
      ) : null}
    </>
  );
}

export default App;
