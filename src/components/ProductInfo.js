import React from 'react'
import '../styles/ProductInfo.css'
import icon_cart from '../../public/assets/icon-cart.svg'
import icon_minus from '../../public/assets/icon-minus.svg'
import icon_plus from '../../public/assets/icon-plus.svg'

function ProductInfo() {
  return (
    <div className='info-div'>
        <div className='content-handler'>
            
            <div className='sneaker_title'>
                <p className='sneaker_company'>Sneaker company</p>
                <h1>Fall Limited Edition Sneakers</h1>
            </div>
            
            <p className='sneaker_desc'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            
            <div className='sneaker_price'>
                <h2>$125.00</h2><span>50%</span>
            </div>

            <div className='sneaker_old_price'>$250.00</div>

            <div className='sneaker_buy'>
                <div className='sneaker_quantity'>
                    <img src={icon_minus} alt={icon_minus}/>
                    <span>0</span>
                    <img src={icon_plus} alt={icon_plus}/>
                    
                </div>
                <div className='sneaker_buy_button'>
                    <button>
                        <img src={icon_cart} alt={icon_cart} />
                        Add to cart
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProductInfo