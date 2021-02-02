import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Works from "./components/Works/Works";
import Example from "./components/Example/Example";
import NavigationBar from "./components/Home/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <NavigationBar />
        <React.StrictMode>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/contact" component={Contact} />
            <Route path="/works" component={Works} />
            <Route path="/exp" component={Example} />
          </Switch>
        </React.StrictMode>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
