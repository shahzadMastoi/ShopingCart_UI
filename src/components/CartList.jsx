import React from 'react'

const CartList = (props) => {
  return (
    <div>
      {
       props.cart.map((cartItem,cartIndex)=> {
            return(
                <div>
                    <img src={cartItem.img} width={40}/>
                    <span>{cartItem.catagory}</span>
                    <button>-</button>
                    <span>{cartItem.quantity}</span>
                    <button>+</button>
                    <span>{cartItem.price}</span>
                </div>
            )
        })
      }
    </div>
  )
}

export default CartList
