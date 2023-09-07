import { Link } from "react-router-dom"

const Error404 = () => {
  return(
    <div className = "error">
      <h3>No such page exists</h3>
      <Link to = "/">Go to homepage</Link>
    </div>
  )
}

export default Error404