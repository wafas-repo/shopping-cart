import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import styles from '../Header/Header.module.css'
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { SidebarContext } from '../../contexts/SidebarContext';

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  return (
  <header className={styles.navbar}>

    <div>
      <div onClick={() => setIsOpen(!isOpen)}><IoMdMenu /></div>
    </div>
     <div className={styles.center}>
        <Link className={styles.linkStyle} to=''>Nabila's Couture</Link>
     </div>
     <div className={styles.right}>
      <Link to='/Cart'>
        <FaShoppingCart />
      </Link>
    </div>
   </header>
    // <header className={styles.navbar}>
    //   <div onClick={console.log('clicked')}>
    //     open/close
    //       {/* <div className=''>
    //           <Link className={styles.linkStyle} to=''>Women</Link>
    //       </div>
    //       <div className=''>
    //           <Link className={styles.linkStyle} to=''>Men</Link>
    //       </div>
    //       <div className=''>
    //           <Link className={styles.linkStyle} to=''>Kids</Link>
    //       </div> */}
    //   </div>    
    // </header>
  )
}

export default Header