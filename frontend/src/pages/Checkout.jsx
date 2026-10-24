import { useCart } from "../context/CartContext.jsx";
export default function Checkout() {
  const { items, total } = useCart();
  return <section className="section"><p className="eyebrow">ALMOST THERE</p><h1>Checkout</h1>
    {!items.length ? <p>Add products to your cart before checkout.</p> : <>
      <p>Order total: <strong>${total.toFixed(2)}</strong></p>
      <p className="notice">Starter page only. Implement server-side price validation, shipping details, order creation, and a trusted payment provider before accepting real orders.</p>
    </>}
  </section>;
}