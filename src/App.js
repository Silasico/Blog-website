import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Create from "./components/Create"
import BlogDetails from "./components/BlogDetails"
import Error404 from "./components/Error404"

 
function App() {
  
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className= "content">
          <Switch>
            <Route exact path = "/">
              <Home />
            </Route>
            <Route path = "/create">
              <Create />
            </Route>
            <Route path = "/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path = "/*">
              <Error404 />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
