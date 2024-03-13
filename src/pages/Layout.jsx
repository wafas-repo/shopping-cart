import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'

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