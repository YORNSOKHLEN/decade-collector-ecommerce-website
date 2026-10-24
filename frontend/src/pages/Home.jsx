import { Link } from "react-router-dom";
export default function Home() {
  return <section className="hero"><p className="eyebrow">YOUR EVERYDAY MARKETPLACE</p>
    <h1>Find something<br/><span>you’ll love.</span></h1>
    <p>Explore useful products, simple prices, and an easy shopping experience.</p>
    <Link className="button-link" to="/products">Explore products</Link></section>;
}