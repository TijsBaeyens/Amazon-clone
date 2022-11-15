import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home__container'>
        <img className='home__image' src="https://m.media-amazon.com/images/I/717FedApduL._SX3000_.jpg" alt=""/>
        <div className='home__row'>
            <Product id="2346795467" title='The Lean startup' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            rating={3}/>
            <Product id="6646799498" title='Het Front' price={19.99} image='https://media.s-bol.com/qwnYE3XYQQr/537x840.jpg'
            rating={4}/>
        </div>
        <div className='home__row'>
            <Product id="8640471386" title='Ugly Love' price={24.99} image='https://media.s-bol.com/m71qPxYzgM8n/1jX001q/550x839.jpg' rating={4}/>
            <Product id="9684025848" title='Reminders of him' price={10.99} image='https://media.s-bol.com/gQxRv7Amp3Bk/G5ww1G7/550x823.jpg' rating={5}/>
            <Product id="8530154937" title="I'm glad my mom died" price={15.99} image='https://media.s-bol.com/xjomXGkJvQmB/kZEgmY/550x834.jpg' rating={3}/>
        </div>
        <div className='home__row'>
            <Product id='0658351486' title="Verity" price={9.99} image='https://media.s-bol.com/8WYKQ0XpVWx3/p8xK40X/1000x1200.jpg'rating={5}/>
        </div>
    </div>
  )
}

export default Home