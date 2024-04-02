import React, {useContext} from 'react'

import { CartContext } from '../contexts/CartContext'
import CartItem from '../components/CartItem/CartItem'

const Cart = () => {

  const {cart} = useContext(CartContext)
  return (
    <div>{cart.map(item => {
      return <CartItem  item={item} key={item.id} />
    })}</div>
  )
}

export default Cart