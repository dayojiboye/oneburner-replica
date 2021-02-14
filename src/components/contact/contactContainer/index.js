import React from 'react';

import ContactForm from '../contactForm';
import ContactAddress from '../contactAddress';

import './styles.scss';

const container = () => {
  return (
    <div className="contact_container">
      <div className="contact_container__grid">
        <div className="contact_form_wrapper">
          <ContactForm />
        </div>

        <div className="contact_header">
          <h1>Request a call from an expert</h1>

          <p>
            Having thoughts on which product works best for you? Fill the form
            and our expert will reach out to you.
          </p>
        </div>

        <div className="contact_address_wrapper">
          <ContactAddress />
        </div>
      </div>
    </div>
  );
};

export default container;
