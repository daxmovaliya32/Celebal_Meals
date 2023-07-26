import "./ShowOrder.css"
import React, { useEffect, useState } from 'react';
import OrdersList from '../components/order/OrderList';

const ShowOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/user/fetchorders")
      .then((response) => response.json())
      .then((data) => setOrders(data.data));
  }, []);

  return (
    <div className="app">
      {/* <h1>Food Order Dashboard</h1> */}
        <OrdersList orders={orders} />
    </div>
  );
};

export default ShowOrder;
