import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutPage from '@/components/Pages/AboutPage';
import ContactPage from '@/components/Pages/ContactPage';
import HomePage from '@/components/Pages/HomePage';
import LayoutTemplate from '@/components/Templates/LayoutTemplate';
import ServicePage from '@/components/Pages/ServicePage';

import CustomCursor from './components/Molecuels/CustomCursor';
import Projects from './components/Pages/Projects';
import ServiceDetailedPage from './components/Pages/ServiceDetailedPage';

function App() {
  return (
    <div className='relative'>
      {/* <CustomCursor /> */}
      <Router>
        <Routes>
          <Route element={<LayoutTemplate />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/services' element={<ServicePage />} />
            <Route
              path='/services/:service'
              element={<ServiceDetailedPage />}
            />
            <Route path='/projects' element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
