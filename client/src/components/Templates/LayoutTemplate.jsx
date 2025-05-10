import React from 'react';
import { Outlet } from 'react-router-dom';

import NavbarMolecuel from '@/components/Molecuels/NavbarMolecuel';

function LayoutTemplate() {
  return (
    <>
      <div className='sticky top-0 z-50'>
        <NavbarMolecuel />
      </div>
      <Outlet />
    </>
  );
}

export default LayoutTemplate;
