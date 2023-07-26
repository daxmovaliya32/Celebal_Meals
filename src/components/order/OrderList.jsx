// src/components/OrdersList.js

import React from 'react';
import Order from './order';

const OrdersList = ({ orders }) => {
    
  return (
    <div className="orders-list">
      {orders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrdersList;
