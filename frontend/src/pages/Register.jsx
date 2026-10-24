import { Link } from "react-router-dom";
export default function Register() {
  function submit(e) { e.preventDefault(); alert("Demo only: connect this form to POST /api/auth/register."); }
  return <section className="form-page"><p className="eyebrow">JOIN US</p><h1>Create account</h1>
    <form onSubmit={submit}><label>Name<input required placeholder="Your name"/></label>
    <label>Email<input type="email" required placeholder="you@example.com"/></label>
    <label>Password<input type="password" required minLength="8" placeholder="At least 8 characters"/></label>
    <button type="submit">Register</button></form><p>Already registered? <Link to="/login">Login</Link></p></section>;
}