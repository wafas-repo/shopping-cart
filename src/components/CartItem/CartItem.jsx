import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext';

const CartItem = ({item}) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const {id, title, image, price, amount} = item;
  return (
    <>

      <div className="cart-product">
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} />
        </Link>
            
          <div>
            <h3>{title}</h3>
            <button onClick={() => removeFromCart(id)}>Remove</button>
          </div>
      </div>
      <div className="cart-prod-price">
          ${price}
      </div>
      <div className="cart-prod-quantity">
        <button onClick={() => decreaseAmount(id)}>-</button>
        <div className="count">{amount}</div>
        <button onClick={() => increaseAmount(id)}>+</button>
      </div>
      <div className="cart-product-total-price">
          ${price * amount}
      </div>
    </>

  )
}

export default CartItem