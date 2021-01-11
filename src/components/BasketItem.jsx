import React from 'react'

function BasketItem(props) {
    const {id, name, price, quantity, removeFromBasket, decQuantity, incQuantity} = props
    return (
        <li className="collection-item ">
            {name}
            <i onClick={()=> decQuantity(id)} className={'material-icons basket-quantity'}>remove</i>
            x
            {quantity}
            <i onClick={()=> incQuantity(id)} className={'material-icons basket-quantity'}>add</i>
            =
            {price * quantity}
            <span onClick={()=>removeFromBasket(id)}
               className="secondary-content">
                <i  className="material-icons basket-delete">close</i>
            </span>
        </li>

    )
}
export default BasketItem