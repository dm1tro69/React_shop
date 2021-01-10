import React from 'react'
import GoodsItem from "./GoodsItem";

function GoodsList(props) {
    const {goods = [], addToBasket} = props

    if(!goods.length){
       return <h3>Nothing here</h3>
    }

    return (
       <div className={'goods'}>
           {goods.map((good)=> {
               return <GoodsItem key={good.id} {...good} addToBasket={addToBasket}/>
           })}
       </div>
    )
}
export default GoodsList