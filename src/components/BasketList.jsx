import React from 'react'
import BasketItem from "./BasketItem";

function BasketList(props) {
    const {order = [], handleBasketShow, removeFromBasket, decQuantity, incQuantity} = props

    const totalPrice = order.reduce((acc, el) => {
        return acc + el.price * el.quantity
    }, 0 )

    return (
        <ul className="collection basket-list">
            <li  className="collection-item active">Корзина</li>
            {order.length ? order.map((item)=> {
                return (
                    <BasketItem
                        key={item.id}
                        {...item}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                    />
                )
            }):  <li className="collection-item ">Корзина</li>}
            <li  className="collection-item active">Общая Стоимость: {totalPrice} руб

            </li>
            <li  className="collection-item ">
                <button  className="btn-small">Оформить</button>
            </li>
            <i onClick={handleBasketShow} className="material-icons basket-close">close</i>

        </ul>
    )
}
export default BasketList