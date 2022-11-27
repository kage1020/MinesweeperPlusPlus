import LogRocket from 'logrocket';
import { useEffect } from 'react';
import setupLogRocketReact from 'logrocket-react';

const useLogRocket = () => {
  useEffect(() => {
    if (!window || !window.document) return;
    LogRocket.init('jiozio/minesweeperplusplus');
    setupLogRocketReact(LogRocket);
  }, []);
};

export default useLogRocket;
