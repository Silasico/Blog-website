import { useParams, useHistory } from "react-router-dom"
import useFetch from "./useFetch"

const BlogDetails = () => {
  const history = useHistory()
  const { id } = useParams()
  const {data:blog, error, isLoading} = useFetch("http://localhost:8000/data/" + id)
  const handleDelete = () => {
      fetch("http://localhost:8000/data/" + id, {
        method: "DELETE"
      }).then(() => history.push("/"))
  }
  return (
    <div className ="blog-details">
      {isLoading && <h5>Loading...</h5>}
      {error && <h5>{error}</h5>}
      {blog && <>
        <h2>{blog.title}</h2>
        <small>Written by {blog.author}</small>
        <p>{blog.content}</p>
        <button onClick = {handleDelete} className = "delete-btn">Delete blog</button>
        </>
      }
    </div>
  )
}

export default BlogDetails