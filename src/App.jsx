import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './page/About';
import Contact from './page/Contact';
import Home from './page/Home';
import NotFound from './page/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
