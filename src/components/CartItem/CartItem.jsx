import React from 'react'

const CartItem = ({item}) => {
  const {id, title, image, price, amount} = item;
  return (
    <>

      <div className="cart-product">
            <img src={image} alt={title} />
            <div>
              <h3>{title}</h3>
              <button>Remove</button>
            </div>
      </div>
      <div className="cart-prod-price">
          ${price}
      </div>
      <div className="cart-prod-quantity">
        <button>-</button>
        <div className="count">{amount}</div>
        <button>+</button>
      </div>
      <div className="cart-product-total-price">
          ${price * amount}
      </div>
    </>

  )
}

export default CartItem