import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import api from "../services/api.js";
const demo = [
  { _id: "demo-1", name: "Wireless Headphones", price: 49.99, image: "" },
  { _id: "demo-2", name: "Smart Watch", price: 79, image: "" },
  { _id: "demo-3", name: "Everyday Backpack", price: 35.5, image: "" }
];
export default function Products() {
  const [products, setProducts] = useState(demo);
  const [message, setMessage] = useState("Demo products are shown until the backend returns products.");
  useEffect(() => {
    api.get("/products").then(({ data }) => {
      const list = data.products || data;
      if (Array.isArray(list) && list.length) { setProducts(list); setMessage(""); }
    }).catch(() => {});
  }, []);
  return <section className="section"><p className="eyebrow">THE COLLECTION</p><h1>Products</h1>
    {message && <p className="notice">{message}</p>}
    <div className="product-grid">{products.map(product => <ProductCard key={product._id} product={product}/>)}</div>
  </section>;
}