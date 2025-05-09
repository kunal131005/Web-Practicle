import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: "10px", background: "#333", color: "white" }}>
      <nav>
        <Link to="/" style={{ color: "white", marginRight: "10px" }}>Home</Link>
        <Link to="/create" style={{ color: "white", marginRight: "10px" }}>Create Post</Link>
        <Link to="/about" style={{ color: "white" }}>About</Link>
      </nav>
    </header>
  );
}
