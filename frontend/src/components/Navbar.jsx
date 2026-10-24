import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
export default function Navbar() {
  const { count } = useCart();
  return <header className="navbar"><Link className="brand" to="/">Shop<span>Ease</span></Link>
    <nav><NavLink to="/">Home</NavLink><NavLink to="/products">Products</NavLink>
    <NavLink to="/orders">My Orders</NavLink><NavLink to="/login">Login</NavLink>
    <NavLink className="cart-link" to="/cart"><ShoppingCart size={18}/> Cart ({count})</NavLink></nav>
  </header>;
}