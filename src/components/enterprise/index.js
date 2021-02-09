import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import Intro from './intro';
import Clients from '../shared/clients';
import HowOneBurnerWorks from './howOneburnerWorks';
import FavoriteTools from '../shared/tools';
import RegionalMap from './regionalMap';
import Reviews from './enterpriseReviews';
import Outro from './outro';

const Enterprise = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="_max_width">
      <Intro />
      <Clients />
      <HowOneBurnerWorks />
      <FavoriteTools />
      <RegionalMap />
      <Reviews />
      <Outro />
    </div>
  );
};

export default Enterprise;
