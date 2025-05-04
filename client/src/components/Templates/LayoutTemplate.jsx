import React from 'react'
import NavbarMolecuel from '@/components/Molecuels/NavbarMolecuel'
import { Outlet } from 'react-router-dom'

function LayoutTemplate() {
  return (
    <>
    <div>
        <NavbarMolecuel/>
    </div>
    <Outlet/>
    </>
  )
}

export default LayoutTemplate