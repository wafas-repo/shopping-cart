import React, {createContext, useState, useEffect} from 'react'

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    
    const url = "https://fakestoreapi.com/products";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const result = await response.json();
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
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;