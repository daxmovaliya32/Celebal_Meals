import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const navigate = useNavigate()
  const cartCtx = useContext(CartContext);
  const [shownCheckout, setShownCheckout] = useState(false);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const [didOrderSubmit, setDidOrderSubmit] = useState(false);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const orderHandler = () => {
    setShownCheckout(true);
  };

  const submitOrderHandler = async(orderDetails) => {
    if(localStorage.getItem("token")==undefined)
    {
        alert("please login first")
        navigate("/login")
    }else{
      console.log("api this");
      const fetchData = await fetch("http://localhost:8080/user/order", {
        method: "POST",
        headers : {
          "content-type" : "application/json" 
        },
        body: JSON.stringify({
          user: orderDetails,
          orderedItems: cartCtx,
        }),
      })
      const dataRes = await fetchData.json();
      console.log(dataRes);
      if(dataRes.alert){
        setDidOrderSubmit(true);
        cartCtx.clearCart();
        navigate("/") 
      }
    }
   
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onCloseCart}>
        Close
      </button>
      {hasItems && (
        <button onClick={orderHandler} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );

  const orderDetails = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {shownCheckout ? (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onCloseCart} />
      ) : (
        modalActions
      )}
    </React.Fragment>
  );

  console.log("didOrderSubmit",didOrderSubmit);
  return (
    <Modal onClose={props.onCloseCart}>
      {!didOrderSubmit && orderDetails}
      {didOrderSubmit && <p>Order submitted succesfully! </p>}
    </Modal>
  );
};

export default Cart;
