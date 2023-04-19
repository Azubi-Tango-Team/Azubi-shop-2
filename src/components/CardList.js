import React, { useState } from "react";
import Data from "../data";
import Card from "./Card";

function CardList({ products }) {
  const CardList = products.map((item, index) => (
    <Card item={item} key={item.id} />
  ))
  return (
  <div className="card-container">
    {CardList}
  </div>
  )
}

export default CardList;
