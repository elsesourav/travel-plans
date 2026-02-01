import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef<string>("");

  useEffect(() => {
    const isNavigatingBack = 
      prevPathnameRef.current.includes("/destination/") && 
      pathname === "/";
    
    if (!isNavigatingBack) {
      window.scrollTo(0, 0);
    }
    
    prevPathnameRef.current = pathname;
  }, [pathname]);

  return null;
}
