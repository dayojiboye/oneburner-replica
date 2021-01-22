import React from 'react';

import { AnimatePresence } from 'framer-motion';

import { Route, Switch } from 'react-router-dom';

// layout

import Layout from './layout';

// pages

import Home from './pages/home';

function App() {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </AnimatePresence>
    </>
  );
}

export default App;
