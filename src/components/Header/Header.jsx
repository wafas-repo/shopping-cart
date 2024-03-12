import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Header/Header.module.css'
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
          <div className=''>
              <Link className={styles.linkStyle} to=''>Women</Link>
          </div>
          <div className=''>
              <Link className={styles.linkStyle} to=''>Men</Link>
          </div>
          <div className=''>
              <Link className={styles.linkStyle} to=''>Kids</Link>
          </div>
      </div>

      <div className={styles.center}>
          <Link className={styles.linkStyle} to=''>Nabila's Couture</Link>
      </div>

      <div className={styles.right}>
          <FaShoppingCart />
      </div>
        
    </header>
  )
}

export default Header