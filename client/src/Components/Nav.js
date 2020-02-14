import React, { useState } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';
import useDarkMode from '../hooks/useDarkMode';

const Nav = () => {
  // const [darkMode, setDarkMode] = useState(false);
  //  const [darkMode, setDarkMode] = useLocalStorage('this is the key for toggle', false);

  const [darkMode, setDarkMode] = useDarkMode('this is the key for dark mode', false);
 

  console.log('this is from the nav.js', false);

  const toggle = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };


  return (
    <nav className="nav">
      <h1 className="nav-title">Meet the Players</h1>
      <button onClick={toggle} className="btn">Toggle Dark Mode</button>
    </nav>
  );
};

export default Nav;
