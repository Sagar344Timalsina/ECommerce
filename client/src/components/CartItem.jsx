import React from 'react'

const CartItem = (props) => {
  return (
    <div className='cart_heading grid grid-five-column'>
        <div className="cart-image--name">
            <div>
                <figure>
                    <img src='' alt=''/>
                </figure>
            </div>
            <div>
                <p>name</p>
            </div>
        </div>
        <div className="cart-hide">
            <p>Price</p>
        </div>
        
    </div>
  )
}

export default CartItem