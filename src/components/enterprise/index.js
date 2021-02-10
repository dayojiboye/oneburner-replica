import React from 'react';

import Intro from './intro';
import Clients from '../shared/clients';
import HowOneBurnerWorks from './howOneburnerWorks';
import FavoriteTools from '../shared/tools';
import RegionalMap from './regionalMap';
import Reviews from './enterpriseReviews';
import Outro from './outro';

const enterprise = () => {
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

export default enterprise;
