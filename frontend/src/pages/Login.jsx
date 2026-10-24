import { Link } from "react-router-dom";
export default function Login() {
  function submit(e) { e.preventDefault(); alert("Demo only: connect this form to POST /api/auth/login."); }
  return <section className="form-page"><p className="eyebrow">WELCOME BACK</p><h1>Login</h1>
    <form onSubmit={submit}><label>Email<input type="email" required placeholder="you@example.com"/></label>
    <label>Password<input type="password" required minLength="8" placeholder="At least 8 characters"/></label>
    <button type="submit">Login</button></form><p>New here? <Link to="/register">Create an account</Link></p></section>;
}