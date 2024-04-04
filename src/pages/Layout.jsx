import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Sidebar />
        <Footer />
    </>
  )
}

export default Layout