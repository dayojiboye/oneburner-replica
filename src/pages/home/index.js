import React, { useEffect } from 'react';

import Intro from '../../components/home/intro';
import Clients from '../../components/home/clients';
import HomeTab from '../../components/home/homeTab';
import ManageTeam from '../../components/home/manageTeam';
import TeamSpeed from '../../components/home/teamSpeed';
import TaskTimeline from '../../components/home/taskTimeline';
import FavoriteTools from '../../components/home/favoriteTools';
import ReportBoard from '../../components/home/reportBoard';
import LeadMgt from '../../components/home/leadMgt';
import CustomerSupport from '../../components/home/customerSupport';
import Outro from '../../components/home/outro';

import './styles.scss';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
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
