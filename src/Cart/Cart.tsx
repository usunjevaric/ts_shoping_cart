import CartItem from "../CartItem/CartItem";

//Styles
import { Wrapper } from "./Cart.styles";

//Types
import { CartItemType } from "../App";
import { CardTravelTwoTone } from "@material-ui/icons";

type Props = {
  cartItems: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);
  return (
    <Wrapper>
      <h2>Your cart</h2>
      {cartItems.length === 0 ? <p>No item in cart</p> : null}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
      ))}
      Total: ${calculateTotal(cartItems).toFixed(2)}
    </Wrapper>
  );
};

export default Cart;
