import React, {useState, createContext, useContext} from 'react'
import { Link } from 'react-router-dom'
import styles from '../Sidebar/Sidebar.module.css'
import { IoMdClose } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

import { SidebarContext } from '../../contexts/SidebarContext'

const Sidebar = () => {
  const {isOpen, setIsOpen,  handleClose} = useContext(SidebarContext)
  return (
    <div  className={`${styles.Sidebar}`} style={{ left: isOpen ? '0' : '-100%' }}>
        <div className={styles.sidebarTop}>
          <h6 className={styles.sidebarTitle}>MENU</h6>
          <div className={styles.sidebarIcon} onClick={() => setIsOpen(!isOpen)}>
            <IoMdClose />
          </div>
        </div>
        <div className={styles.sidebarCenter}>
          <nav>
            <li style={{listStyle: 'none'}} >
              <div className={styles.navItem}>
                WOMEN
                <IoMdAdd className={styles.navItemIcon} />
              </div>
            </li>
            <li style={{listStyle: 'none'}} > 
              <div className={styles.navItem}>
                  MEN
                  <IoMdAdd className={styles.navItemIcon} />
                </div>
            </li>
            <li style={{listStyle: 'none'}} >
            <div className={styles.navItem}>
                KIDS
                <IoMdAdd className={styles.navItemIcon} />
              </div>
            </li>
          </nav>
        </div>
        
    </div>
  )
}

export default Sidebar