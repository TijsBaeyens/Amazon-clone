import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider.js'
import { useNavigate } from "react-router-dom";

function Subtotal() {
    const navigate = useNavigate();
    const [{ basket }] = useStateValue();

  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value) => (
            <>
            <p>
                Subtotal ({basket?.length} items): 
                <strong>€ {getTotalPrice(basket)}</strong>
            </p>
            <small className='subtotal__gift'>
                <input type='checkbox' /> This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />
        <button onClick={e => navigate('/payment', { replace: true })}>Proceed to Checkout</button>
    </div>
  )
}

const getTotalPrice = (basket) => {
    let totalPrice = 0;
    basket.forEach((item) => {
        totalPrice += item.price;
    });
    totalPrice = totalPrice.toFixed(2);
    return totalPrice;
}
export default Subtotal