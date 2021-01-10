import React from 'react'

function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToBasket
    } = props;
    return (
        <div className="card" >
            <div className="card-image">
                <img src={full_background} alt={'img'}/>

            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>

                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className={'btn'} onClick={()=>addToBasket({id, name, price})}>Купить</button>
                <span className={'right'} style={{fontSize: '1.8rem'}}>{price}</span>
            </div>
        </div>
    )
}

export default GoodsItem
