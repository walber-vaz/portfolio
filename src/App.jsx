import React, { useCallback, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useThemeContext } from './context/useThemeContext';
import useLocalStorage from './hooks/useLocalStorage';
import About from './page/About';
import Contact from './page/Contact';
import Home from './page/Home';
import NotFound from './page/NotFound';
import dark from './styles/theme/dark';
import light from './styles/theme/light';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme, setTheme]);

  const values = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <useThemeContext.Provider value={values}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </useThemeContext.Provider>
  );
};

export default App;
