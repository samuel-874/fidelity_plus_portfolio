'use client';

import { useEffect } from 'react';

export default function NavbarScript() {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar-8-2');
    
    const toggleMenu = () => {
      hamburger?.classList.toggle('active');
      navbar?.classList.toggle('is-open');
    };
    
    hamburger?.addEventListener('click', toggleMenu);
    
    return () => {
      hamburger?.removeEventListener('click', toggleMenu);
    };
  }, []);

  return null;
}
