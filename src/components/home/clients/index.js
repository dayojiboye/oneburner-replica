import React from 'react';

import {
  PaystackLogo,
  EgyptairLogo,
  DangoteLogo,
  StandardBankLogo,
  MtnLogo,
  GtbankLogo,
  SkooleeoLogo,
} from '../../../assets/icons';

import './styles.scss';

const clients = () => {
  return (
    <div className="clients-home">
      <p>Over 500+ companies bond teams together with Oneburner</p>

      <div className="companies">
        <PaystackLogo />
        <EgyptairLogo />
        <DangoteLogo />
        <StandardBankLogo />
        <MtnLogo />
        <GtbankLogo />
        <SkooleeoLogo />
      </div>
    </div>
  );
};

export default clients;
