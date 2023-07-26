import React from 'react'

const ShowAddress = ({add}) => {
  return (
    <div>
      <div>
        <p>Address : city: {add.city} , street: {add.street}</p>
        <p>homenumber: {add.homeNumber} ,postal:{add.postal}</p>
    </div>
    </div>
  )
}

export default ShowAddress
