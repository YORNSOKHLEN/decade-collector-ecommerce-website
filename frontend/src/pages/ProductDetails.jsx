import { useParams } from "react-router-dom";
export default function ProductDetails() {
  const { id } = useParams();
  return <section className="section"><p className="eyebrow">PRODUCT DETAILS</p><h1>Product</h1>
    <p>Product ID: {id}</p><p>Connect this page to the product API to display full details.</p></section>;
}