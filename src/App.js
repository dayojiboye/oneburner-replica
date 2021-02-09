import React from 'react';

import { AnimatePresence } from 'framer-motion';

import { Route, Switch } from 'react-router-dom';

// layout

import Layout from './layout';

// pages

import { HomePage } from './pages/home';
import { EnterprisePage } from './pages/enterprise';

function App() {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/enterprise" component={EnterprisePage} />
          </Switch>
        </Layout>
      </AnimatePresence>
    </>
  );
}

export default App;
