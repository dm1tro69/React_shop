import React from 'react'

function Cart(props) {
    const {quantity = 0, handleBasketShow} = props
    return(
        <div className={'cart blue darken-4 white-text'} onClick={handleBasketShow}>
          <i className="material-icons">shopping_cart</i>
            {quantity ? <span className={'cart-quantity'}>{quantity}</span> : null}
        </div>
    )
}
export default Cart