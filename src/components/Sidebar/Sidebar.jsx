import React, {useState, createContext, useContext} from 'react'
import { Link } from 'react-router-dom'
import styles from '../Sidebar/Sidebar.module.css'

import { SidebarContext } from '../../contexts/SidebarContext'

const Sidebar = () => {
  const {isOpen, setIsOpen,  handleClose} = useContext(SidebarContext)
  return (
    <div  className={`${styles.Sidebar}`} style={{ left: isOpen ? '0' : '-100%' }}>
        <div onClick={() => setIsOpen(!isOpen)}>
            Close
        </div>
    </div>
  )
}

export default Sidebar