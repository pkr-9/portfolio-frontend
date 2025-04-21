// src/hooks/useAnalytics.js
import { useEffect } from 'react';

const useAnalytics = (page) => {
  useEffect(() => {
    console.log(`Page view: ${page}`);
    // Send analytics event here
  }, [page]);
};

export default useAnalytics;
