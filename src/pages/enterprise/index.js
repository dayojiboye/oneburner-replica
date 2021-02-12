import { lazy } from 'react';

const EnterprisePage = lazy(() => {
  return import('../../components/enterprise');
});

export default EnterprisePage;
