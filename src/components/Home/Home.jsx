import React, {useState, useContext} from 'react'
import styles from '../Home/Home.module.css'
import Product from '../Product/Product';
import { ProductContext } from '../../contexts/ProductContext';
import Hero from '../Hero/Hero';

const Home = () => {
  
const {products} = useContext(ProductContext);
  
  return (
    <>
    <Hero />
        <div>
            <section >
                <div className={styles.gridContainer}>
                        {products.map((product) => {
                            return (
                               <Product product={product} key={product.id} />
                            )
                        })}
                </div>
            </section>
        </div>
    </>
  )
}

export default Home