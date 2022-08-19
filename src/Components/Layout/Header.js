import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full fo delicious Foods" />
      </div>
    </>
  );
};

export default Header;
