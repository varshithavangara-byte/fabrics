// ============================================================
// useScrollToTop.js — Scroll to top on every route change
// ============================================================

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook that scrolls the window to the top whenever
 * the route pathname changes.
 */
const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
};

export default useScrollToTop;
