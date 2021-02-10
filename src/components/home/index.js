import React from 'react';

import Intro from './intro';
import Clients from '../shared/clients';
import HomeTab from './homeTab';
import ManageTeam from './manageTeam';
import TeamSpeed from './teamSpeed';
import TaskTimeline from './taskTimeline';
import FavoriteTools from '../shared/tools';
import ReportBoard from './reportBoard';
import LeadMgt from './leadMgt';
import CustomerSupport from './customerSupport';
import Outro from './outro';

const home = () => {
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

export default home;
