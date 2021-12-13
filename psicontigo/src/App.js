import React from "react";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Profiles from "./Components/Profiles";

function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <Menu/>
      <Home/>
      <Profiles/>
      <Footer/>        
    </div>
  );
}

export default App;
