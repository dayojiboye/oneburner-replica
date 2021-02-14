import React, { useState } from 'react';

import Input from '../../ui/input';
import { ClosedEye, OpenedEye } from '../../../assets/icons';

import './styles.scss';

const SignInForm = () => {
  const [showPass, setShowPass] = useState(false);

  const handleRevealPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <form className="signin_form" onSubmit={(e) => e.preventDefault()}>
      <div className="signin_form__group">
        <label htmlFor="userEmail">Email / Username</label>

        <Input name="userEmail" id="userEmail" type="text" required />
      </div>

      <div className="signin_form__group">
        <label htmlFor="userPass">Password</label>

        <div className="input_wrapper">
          <Input
            name="userPass"
            id="userPass"
            type={showPass ? 'text' : 'password'}
            required
          />
          <span className="_pass_eye" onClick={handleRevealPassword}>
            {showPass ? <ClosedEye /> : <OpenedEye />}
          </span>
        </div>
      </div>

      <div className="signin_form__group">
        <button type="submit">Log In</button>
      </div>

      <div className="signin_form__group">
        <a href="/" className="_forgot_pass_link">
          Forgot Password?
        </a>
      </div>
    </form>
  );
};

export default SignInForm;
