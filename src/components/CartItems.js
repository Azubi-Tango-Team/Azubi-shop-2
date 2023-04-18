import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ButtonCart = ({ FaIcon, onHandleClick }) => {
  return (
    <button
      className="brn-cart"
      style={{
        boarder: "none",
        background: "#ffff",
        padding: "5px",
        cursor: "pointer",
      }}
      onClick={onHandleClick}
    >
      {FaIcon}
    </button>
  );
};

function CartItems({ item, dispatch }) {
  let totalItem = item.qty * item.price;
  console.log(item);
  // increase quantity
  function handleQtyIncrement() {
    dispatch({
      type: "INCREMENT_CART_QTY",
      payload: {
        id: `${item.id}`,
        val: 1,
      },
    });
    console.log(item);
  }
  //decrease quantity
  function handleQtyDecrement() {
    dispatch({
      type: "DECREMENT_CART_QTY",
      payload: {
        id: `${item.id}`,
      },
    });
    console.log(item);
  }

  //Delete cart
  function handleDelete() {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: `${item.id}`,
    });
  }
  return (
    <tr>
      <td
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <img src={item.imgUrl} alt={item.title} width="40" />
        <span>{item.title}</span>
      </td>
      <td>
        ${item.price}
      </td>
      <td className='add-btn'>
        <ButtonCart faIcon={<FaMinus className='fa'/>} onHandleClick={handleQtyDecrement}/>
        <ButtonCart faIcon={item.qty}/>
        <ButtonCart faIcon={<FaPlus className='fa'/>} onHandleClick={handleQtyIncrement}/>
      </td>
      <td>${totalItem}</td>
      <td><button onClick={handleDelete} className="btn btn-danger">Delete</button></td>
    </tr>
  )
}

export default CartItems;
