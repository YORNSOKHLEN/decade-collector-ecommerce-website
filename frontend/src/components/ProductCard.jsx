import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return <article className="product-card"><Link to={`/products/${product._id}`}>
    <img src={product.image || "/images/placeholder.svg"} alt={product.name}/>
    <h3>{product.name}</h3></Link><p className="price">${Number(product.price).toFixed(2)}</p>
    <button onClick={() => addToCart(product)}>Add to cart</button></article>;
}