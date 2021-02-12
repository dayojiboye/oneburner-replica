import { useEffect } from 'react';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

const ProgressBar = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  });

  return null;
};

export default ProgressBar;
