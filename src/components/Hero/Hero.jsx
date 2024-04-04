import React from 'react'
import styles from '../Hero/Hero.module.css'
import { Link } from 'react-router-dom'
import hero from '../../img/bg.png'

const Hero = () => {
  return (
    <section className={styles.hero}>
        <img className={styles.bg} src={hero} alt="hero" />
    </section>
  )
}

export default Hero