import { lazy } from 'react';

const ContactPage = lazy(() => {
  return import('../../components/contact');
});

export default ContactPage;
