import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnHighlighted, setbtnHighlighted] = useState(false);
  const ctx = useContext(CartContext);
  const cartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setbtnHighlighted(true);
    const timer = setTimeout(() => {
      setbtnHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [ctx.items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
