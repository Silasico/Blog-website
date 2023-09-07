import { Link } from "react-router-dom"

const BlogList = ({ blogs, title }) => {
  // const handleDelete = (id) => {
  //   setBlogs(blogs.filter((blog) => blog.id !== id))
  // }
  return (
    <div className = "blogs">
      <h1>{title}</h1>
      {blogs ? blogs.map((blog) => {
        return (
          <Link className = "blog-link" to = {`/blogs/${blog.id}`}>
            <div className = "blog-box" key = {blog.id}>
              <h3>{blog.title}</h3>
              <p>Posted by {blog.author}</p>
              
            </div>
          </Link>
        )
      }) : <p>No blog to display</p>}
    </div>
  )
}

export default BlogList