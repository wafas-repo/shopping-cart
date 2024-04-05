import React, {useContext} from 'react'
import '../App.css'

import { useParams } from 'react-router-dom'

import { CartContext } from '../contexts/CartContext'

import { ProductContext } from '../contexts/ProductContext'

const ProductDetails = () => {
  const {id} = useParams()
  const { products } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)

  const product = products.find((item) => {
    return item.id === parseInt(id);
  })

  if (!product) {
    return (
      <section className='loading'>
        Loading...
      </section>
    )
  }
  const {title, price, description, image } = product
  return (
    <section className='product-details-section'>
      <div className='wrapper'>
        <div className='image-text'>
          <div className='image-div'>
            <img className='image' src={image} alt="" />
          </div>
          <div className='Text'>
            <h1 className='title'>{title}</h1>
            <div className='price'>${price}</div>
            <p style={{marginBottom: '2rem'}}>{description}</p>
            <button style={{backgroundColor: '#8d691d', color: 'white', padding: '1rem 2rem 1rem 2rem', border: 'none', cursor: 'pointer'}} onClick={() => addToCart(product, product.id)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails