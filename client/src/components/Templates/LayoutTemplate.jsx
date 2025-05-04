import React from 'react'
import NavbarMolecuel from '@/components/Molecuels/NavbarMolecuel'
import FooterMolecuel from '@/components/Molecuels/FooterMolecuel'

import { Outlet } from 'react-router-dom'

function LayoutTemplate() {
  return (
    <>
    <div>
        <NavbarMolecuel/>
    </div>
    <Outlet/>
    <div>
      <FooterMolecuel/>
    </div>
    </>
  )
}

export default LayoutTemplate