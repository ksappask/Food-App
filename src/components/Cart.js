import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { Link } from "react-router-dom";
import { clearCart } from "../utlis/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-3">Cart Items - {cartItems.length}</h1>
      <button className="bg-green-100 p-2 m-5" onClick={handleClearCart}>
        Clear Cart
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((restaurant) => {
          return (
            <FoodItem {...restaurant.card.info} key={restaurant.card.info.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
