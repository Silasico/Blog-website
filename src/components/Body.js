import BlogList from "./BlogList"

const Body = ({ blogs }) => {
  
  return (
    <div className = "container">
      <BlogList blogs = {blogs} title = "All Blogs"/>
    </div>
  )
}

export default Body