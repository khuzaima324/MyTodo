// Layout.jsx
import React from 'react'
import Navbar from './navBar'
import { Outlet } from 'react-router-dom'
import FloatingBox from './floatingBox'

function Layout() {
  return (
    <>
      <Navbar/>
      <FloatingBox/>
      <Outlet/>
    </>
  )
}

export default Layout