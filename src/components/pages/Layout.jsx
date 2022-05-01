import React from 'react'
import Navabar from '../Navabar'
import { Outlet } from 'react-router-dom'
import { CssBaseline } from '@mui/material'


const Layout = () => {
  return (
    <>
    <CssBaseline/>
      <Navabar/>
      <Outlet/>
    
    </>
  )
}

export default Layout
