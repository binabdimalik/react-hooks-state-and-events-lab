import React, { useState} from "react";

function Item({ name, category }) { 
  const [inCart, setInCart] = useState(false); 

  const handleClick = () => {
    setInCart(!inCart)
  };

 
  const itemClassName = inCart ? "in-cart" : ""; 

  return (
    <li className={itemClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
