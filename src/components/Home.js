import Body from "./Body"
import useFetch from "./useFetch"


const Home = () => {
  const {data:blogs, error, isLoading} = useFetch("http://localhost:8000/data")
  
  return (
    <div>
      {isLoading && <h5>Loading...</h5>}
      {blogs ? <Body blogs = {blogs} /> : <h5>{error}</h5>}
    </div>
  )
}

export default Home