import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';
const Submenu = () => {
  const { isSubmenuOpen, location } = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);
  console.log('from useglobal is submenu open', isSubmenuOpen);
  return (
    <aside
      ref={container}
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
    >
      submenu coming soon
    </aside>
  );
};

export default Submenu;
