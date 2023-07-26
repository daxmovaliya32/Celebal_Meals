import React from 'react'

const ShoeItems = ({items}) => {
  return (
    <div>
        <p>Item: {items.name} , Quantity: {items.amount} , Price: {items.price}</p>
    </div>
  )
}

export default ShoeItems
