import React, {useContext} from 'react'
import '../App.css'
import { CartContext } from '../contexts/CartContext'
import CartItem from '../components/CartItem/CartItem'
import { Link } from 'react-router-dom'


const Cart = () => {

  const { cart, clearCart, total} = useContext(CartContext)
  return (
    <div>
      <div className='cart-container'>
        <h2>Shopping Cart</h2>
        { cart.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is currently empty</p>
            <p>Click <Link to='/'>here</Link> to continue shopping</p>
          </div>
        ) : (
          <div>
            <div className='titles'>
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>

            <div className="cart-item">
              { cart.map(item => {
                return <CartItem  item={item} key={item.id} />
              }) }
            </div>
            <div className="cart-summary">
              <button onClick={() => clearCart()} className="clear-btn">
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">${parseFloat(total).toFixed(2)}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <button>Check out</button>
                <div className="continue-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
              </div>
            </div> 

          </div>        
        )}
      </div>    
    </div>
  )
}

export default Cart