import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'
import { useStateValue } from './StateProvider.js'
import CheckoutProduct from './CheckoutProduct.js'

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            {/*<img className='checkout__ad' src='https://m.media-amazon.com/images/I/61Ys6ULPAGL._SX3000_.jpg' alt='' />*/}
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout__title'>Your Shopping Basket</h2>
                {basket.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
              ))}
                  {/* CheckoutProduct */}
                  {/* CheckoutProduct */}
                  {/* CheckoutProduct */}
                </div>
            </div>

            <div className='checkout__right'>
                <Subtotal />
  </div>
    </div>
  )
}

export default Checkout