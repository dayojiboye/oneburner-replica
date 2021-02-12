import React, { Suspense } from 'react';

import { AnimatePresence } from 'framer-motion';

import { Route, Switch } from 'react-router-dom';
import ProgressBar from './components/ui/progressBar';

// layout

import Layout from './layout';

// pages

import { HomePage } from './pages/home';

import EnterprisePage from './pages/enterprise';

import ContactPage from './pages/contact';

function App() {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Suspense fallback={<ProgressBar />}>
          <Layout>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/enterprise" component={EnterprisePage} />
              <Route path="/contact" component={ContactPage} />
            </Switch>
          </Layout>
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default App;
