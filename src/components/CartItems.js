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
  )
}

function CartItems({item,dispatch}) {
    let totalItem = item.qty * item.price
    console.log(item)
  return <div>CartItems</div>;
}

export default CartItems;
