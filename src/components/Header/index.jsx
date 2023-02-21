import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

import { Container } from './styles';
import { useThemeContext } from '../../context/useThemeContext';

const Header = () => {
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useContext(useThemeContext);

  return (
    <Container>
      <section>
        <a>Header</a>
      </section>
      <nav>
        <Switch
          onChange={() => toggleTheme()}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor={shade(0.4, colors.secondary)}
          onColor={colors.secondary}
          height={10}
          width={40}
          handleDiameter={20}
          boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
          activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
        />
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
    </Container>
  );
};

export default Header;
