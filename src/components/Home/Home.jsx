import React, {useState, useContext} from 'react'
import styles from '../Home/Home.module.css'
import Product from '../Product/Product';
import { ProductContext } from '../../contexts/ProductContext';

const Home = () => {
  
const {products} = useContext(ProductContext);
console.log(products)
  
  return (
    <>
        <h1>Home</h1>
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