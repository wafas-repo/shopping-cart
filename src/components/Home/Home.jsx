import React, {useState, useEffect} from 'react'
import styles from '../Home/Home.module.css'

const Home = () => {


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // try to get some products using hook 

  useEffect(() => {
    
    const url = "https://fakestoreapi.com/products";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        console.log(result)
        setProducts(result)
        
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  
  return (
    <>
        <div>
            <section>
                <div className={styles.grid}>
                    <div className={styles.productCards}>
                        {products.map((product) => {
                            return <p className={styles.prodCard} key={product.id}>{product.title}</p>
                        })}
                    </div>
                </div>

            </section>
        </div>
    </>
  )
}

export default Home