import "./App.css";
import React from "react";
import Header from "./component/Header/Header";
import HomeMenu from "./component/HomeMenu/HomeMenu";
import About from "./component/About/About";
import Skills from "./component/Skills/Skills";
import Work from "./component/Work/Work";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <HomeMenu />
        <About />
        <Skills />
        <Work />
      </div>
    </div>
  );
}

export default App;
