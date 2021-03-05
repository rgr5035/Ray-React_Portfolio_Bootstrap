import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Wrapper from "./components/Wrapper";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Wrapper> */}
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        {/* </Wrapper> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
