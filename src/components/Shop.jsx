import React, {useEffect, useState} from 'react'
import {API_URL, API_KEY} from "../config";
import Preloader from "./Preloader";
import GoodsList from "./Goods";
import Cart from "./Cart";
import BasketList from "./BasketList";
import Alert from "./Alert";

function Shop() {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasketShow, setIsBasketShow] = useState(false)
    const [alertName, setAlertName] = useState('')

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

        if(itemIndex < 0){
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        }else {
            const newOrder = order.map((orderItem, i) => {
                if (i === itemIndex){
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                }else {
                   return orderItem
                }

            })
            setOrder(newOrder)
        }
            setAlertName(item.name)

    }

    const handleBasketShow = () => {
        setIsBasketShow(!isBasketShow)
    }

    const removeFromBasket = (itemId) => {
         const newOrder = order.filter((item) => (item.id !== itemId))
        setOrder(newOrder)
    }

    const incQuantity = (itemId) => {
        const newOrder = order.map((el) => {

                if(el.id === itemId){
                    const newQuantity = el.quantity + 1
                    return {
                        ...el,
                        quantity: newQuantity
                    }
                }else {
                    return el
                }

        })
        setOrder(newOrder)
    }
    const decQuantity = (itemId) => {
        const newOrder = order.map((el) => {

            if(el.id === itemId){
                const newQuantity = el.quantity - 1
                return {
                    ...el,
                    quantity: newQuantity >= 0? newQuantity: 0
                }
            }else {
                return el
            }

        })
        setOrder(newOrder)
    }
    const closeAlert = () => {
        setAlertName('')
    }


    useEffect(()=> {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then(res => res.json())
            .then(data => {
            console.log(data)
               data.featured && setGoods(data.featured);
                setLoading(false)
            })

        console.log(goods.length)
    }, [])

    return (
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {loading ? <Preloader/>: <GoodsList goods={goods} addToBasket={addToBasket}/>}
            {isBasketShow ? <BasketList
                order={order}
                handleBasketShow={handleBasketShow}
                removeFromBasket={removeFromBasket}
                incQuantity={incQuantity}
                decQuantity={decQuantity}
            />: null}
            {alertName && <Alert name={alertName} closeAlert={closeAlert}/>}
        </main>
    )
}
export default Shop