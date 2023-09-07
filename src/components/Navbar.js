import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <h3 className= "logo">Blog Page</h3>
      <div className= "nav-links">
        <Link to = "/" className = "nav-link">Home</Link>
        <Link to = "/create" className = "nav-link">New Blog</Link>
      </div>
    </nav>
  )
}

export default Navbar