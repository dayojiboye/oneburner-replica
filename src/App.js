import React from 'react';

import { AnimatePresence } from 'framer-motion';

import { Route, Switch } from 'react-router-dom';

// layout

import Layout from './layout';

// pages

import { HomePage } from './pages/home';

function App() {
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
