import React, {useEffect, useState} from 'react'
import {API_URL, API_KEY} from "../config";
import Preloader from "./Preloader";
import GoodsList from "./Goods";
import Cart from "./Cart";

function Shop() {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])

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
            <Cart quantity={order.length}/>
            {loading ? <Preloader/>: <GoodsList goods={goods} addToBasket={addToBasket}/>}
        </main>
    )
}
export default Shop