import { useState } from "react"
import { useHistory } from "react-router-dom"

const Create = () => {
  const [ title, setTitle ] = useState("")
  const [ content, setContent ] = useState("")
  const [ author, setAuthor ] = useState("Silas")
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    const blog = { title, content, author }
    fetch("http://localhost:8000/data", {
      method : "POST",
      headers : {"Content-Type": "application/json"},
      body : JSON.stringify(blog)
    }).then((data) => {
      setIsLoading(false)
      history.push("/")
    }).catch((err) => {
      console.log(err.message);
    })
  }
  
  return (
    <div className = "create-blog">
      <h2>Add New Blog</h2>
      <form onSubmit = {handleSubmit}>
        <label>Blog Title</label>
        <input
          type = "text"
          placeholder = "Enter blog title"
          value = {title}
          onChange = {(e) => setTitle(e.currentTarget.value)}
        />
        <label>Blog Content</label>
        <textarea
          type = "text"
          placeholder = "Enter blog content"
          value = {content}
          onChange = {(e) => setContent(e.currentTarget.value)}
        >
        </textarea>
        <label>Blog Author</label>
        <select
          value = {author}
          onChange = {(e) => setAuthor(e.currentTarget.value)}
        >
          <option>Silas</option>
          <option>Ayomide</option>
        </select>
        { !isLoading && <input type = "submit" className = "form-btn" value = "Add blog"/>}
        { isLoading && <input type = "submit" className = "form-btn" disabled value = "Adding Blog..."/>}
      </form>
    </div>
  )
}

export default Create