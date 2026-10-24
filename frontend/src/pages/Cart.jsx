import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
export default function Cart() {
  const { items, total, updateQuantity, removeFromCart } = useCart();
  return <section className="section"><p className="eyebrow">YOUR BAG</p><h1>Shopping cart</h1>
    {!items.length ? <p>Your cart is empty. <Link to="/products">Browse products</Link>.</p> : <>
      <div className="cart-list">{items.map(item => <div className="cart-item" key={item._id}>
        <div><strong>{item.name}</strong><p>${Number(item.price).toFixed(2)} each</p></div>
        <input aria-label={`Quantity for ${item.name}`} type="number" min="1" value={item.quantity}
          onChange={e => updateQuantity(item._id, Number(e.target.value))}/>
        <strong>${(item.price * item.quantity).toFixed(2)}</strong>
        <button className="secondary" onClick={() => removeFromCart(item._id)}>Remove</button>
      </div>)}</div><h2 className="cart-total">Total: ${total.toFixed(2)}</h2>
      <Link className="button-link" to="/checkout">Continue to checkout</Link></>}
  </section>;
}