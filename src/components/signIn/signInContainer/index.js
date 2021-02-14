import React from 'react';

import SignInForm from '../signInForm';
import { OutlookLogo, LinkedInLogo, GoogleIcon } from '../../../assets/icons';

import './styles.scss';

const container = () => {
  return (
    <div className="signin_container">
      <div className="signin_container__lead">
        <h1>Sign In</h1>
        <span>Welcome Back!</span>
      </div>

      <div className="signin_form_wrapper">
        <SignInForm />
      </div>

      <div className="signin_container__footer">
        <span>-Or sign in with :</span>
        <OutlookLogo />
        <LinkedInLogo />
        <GoogleIcon />
      </div>
    </div>
  );
};

export default container;
