import classes from "./MealItem.module.css";
import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/cart-context";

const MealItem = (props) => {
  const ctx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`;
  const onAddToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
      </div>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
      <div><MealItemForm id={props.id} onAddToCart={onAddToCartHandler}/></div>
    </li>
  );
};

export default MealItem;
