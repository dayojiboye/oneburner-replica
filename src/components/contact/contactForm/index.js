import React from 'react';

import Input from '../../ui/input';
import Select from '../../ui/select';
import { NigeriaSvg } from '../../../assets/icons';
import './styles.scss';

const contactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="contact_form" onSubmit={handleSubmit}>
      <div className="group_flex">
        <div className="_contact_form_group w_48">
          <label htmlFor="lastName">Last Name</label>

          <Input name="lastName" id="lastName" type="text" required />
        </div>

        <div className="_contact_form_group w_48">
          <label htmlFor="firstName">First Name</label>

          <Input name="firstName" id="firstName" type="text" required />
        </div>
      </div>

      <div className="group_flex">
        <div className="_contact_form_group">
          <label htmlFor="email">Work Email</label>

          <Input name="email" id="email" type="email" required />
        </div>
      </div>

      <div className="group_flex">
        <div className="_contact_form_group">
          <label htmlFor="phone">Phone Number</label>

          <div className="input_wrapper">
            <span className="input_wrapper__prepend">
              <NigeriaSvg />
            </span>

            <Input
              name="phone"
              id="phone"
              type="tel"
              required
              placeholder="+234"
              inputMode="numeric"
            />
          </div>
        </div>
      </div>

      <div className="group_flex">
        <div className="_contact_form_group">
          <label htmlFor="product">Product of Interest</label>

          <Select name="product" id="product" required defaultValue="">
            <option disabled value="">
              Select an option
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Select>
        </div>
      </div>

      <div className="group_flex">
        <div className="_contact_form_group w_52">
          <label htmlFor="companyName">Company Name</label>

          <Input name="companyName" id="companyName" type="text" required />
        </div>

        <div className="_contact_form_group w_45">
          <label htmlFor="companySize">Company Size</label>

          <Select name="companySize" id="companySize" required defaultValue="">
            <option disabled value="">
              Select option
            </option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </Select>
        </div>
      </div>

      <div className="group_flex">
        <div className="_contact_form_group">
          <label htmlFor="message">How can our expert help you?</label>

          <textarea name="message" id="message" required />
        </div>
      </div>

      <div className="group_flex">
        <div className="_contact_form_group">
          <button type="submit">Contact Us</button>
        </div>
      </div>
    </form>
  );
};

export default contactForm;
