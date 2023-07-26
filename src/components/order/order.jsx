
import React from 'react';
import ShoeItems from './ShoeItems';
import ShowAddress from './ShowAddress';

const Order = ({ order }) => {
    console.log(order.address);
  return (
    <div className="order">
      <h3>Order ID: {order._id}</h3>
      <p>Customer Name: {order.customername}</p>
      {order.items.map((order) => (
        <ShoeItems key={order.id} items={order} />
      ))}
      <p>totalAmount: {order.totalAmount}</p>
      {order.address.map((add) => (
        <ShowAddress add={add} />
      ))}
    </div>
  );
};

export default Order;