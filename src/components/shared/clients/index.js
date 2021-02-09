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
    <section className="section_wrapper clients">
      <p className="d_inline_block">
        Over 500+ companies bond teams together with Oneburner
      </p>

      <div className="clients__companies">
        <PaystackLogo style={{ height: '50px' }} />
        <EgyptairLogo style={{ height: '45px' }} />
        <DangoteLogo style={{ height: '90px' }} />
        <StandardBankLogo style={{ height: '50px' }} />
        <MtnLogo style={{ height: '50px' }} />
        <GtbankLogo style={{ height: '70px' }} />
        <SkooleeoLogo style={{ height: '50px' }} />
      </div>
    </section>
  );
};

export default clients;
