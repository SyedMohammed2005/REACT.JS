import { useSelector } from "react-redux";

function Navbar() {

  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <nav
      style={{
        background: "#24292e",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>🛍 Redux Shopping Cart</h2>

      <h2>🛒 Cart : {cartItems.length}</h2>
    </nav>
  );
}

export default Navbar;