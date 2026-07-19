import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import products from "../data/products";

function ProductCard() {

  const dispatch = useDispatch();

  return (
    <div className="products">

      {products.map((product) => (

        <div className="card" key={product.id}>

          <img
            src={product.image}
            alt={product.name}
          />

          <h2>{product.name}</h2>

          <p>₹ {product.price}</p>

          <button
            onClick={() => dispatch(addToCart(product))}
          >
            Add To Cart
          </button>

        </div>

      ))}

    </div>
  );
}

export default ProductCard;