import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import Intro from './intro';
import Clients from './clients';
import HomeTab from './homeTab';
import ManageTeam from './manageTeam';
import TeamSpeed from './teamSpeed';
import TaskTimeline from './taskTimeline';
import FavoriteTools from './favoriteTools';
import ReportBoard from './reportBoard';
import LeadMgt from './leadMgt';
import CustomerSupport from './customerSupport';
import Outro from './outro';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 10);
  }, [location.pathname]);

  return (
    <div className="_max_width">
      <Intro />
      <Clients />
      <HomeTab />
      <ManageTeam />
      <TeamSpeed />
      <TaskTimeline />
      <FavoriteTools />
      <ReportBoard />
      <LeadMgt />
      <CustomerSupport />
      <Outro />
    </div>
  );
};

export default Home;
