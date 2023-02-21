import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <section>
        <h1>Header</h1>
      </section>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
