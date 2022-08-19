import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartitems = (
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.hideModal}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.hideModal}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
