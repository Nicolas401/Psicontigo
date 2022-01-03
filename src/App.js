import React from "react";
import Header from "./Components/Header/Header";
import Menu from "./Components/Nav-bar/Menu";
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";
import Profiles from "./Components/Profiles/Profiles";

const StyleApp = {
  margin: "-8px",
};

function App() {
  return (
    <div className="App" style= {StyleApp}>
      <Header className="App-header"/>
      <Menu/>
      <Home/>
      <Profiles/>
      <Footer/>        
    </div>
  );
}

export default App;
