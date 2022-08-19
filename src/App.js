import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCarthandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      {cartIsShown && <Cart hideModal={hideCarthandler}/>}
      <Header showModal={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
