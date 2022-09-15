import React, { useState } from "react";
import "./App.css";
// Components
import FashionButton from "./Components/FashionButton";
import FashionDisplayView from "./Components/FashionDisplayView";

function App() {
  const [top, setTop] = useState("");
  const [bottom, setBottom] = useState("");
  const [shoes, setShoes] = useState("");

  return (
    <div className="app">
        <div className="app__heading">Outfit Planner</div>
        <div className="app__menu">
          <FashionButton  style={`Casual`} setTop={setTop} setBottom={setBottom} setShoes={setShoes} ></FashionButton>
          <FashionButton style={`Sport`} setTop={setTop} setBottom={setBottom} setShoes={setShoes}></FashionButton>
          <FashionButton style={`Formal`} setTop={setTop} setBottom={setBottom} setShoes={setShoes} ></FashionButton>
          <FashionDisplayView type={"TOP"} clothingImg={top}></FashionDisplayView>
          <FashionDisplayView type={"BOTTOM"} clothingImg={bottom}></FashionDisplayView>
          <FashionDisplayView type={"SHOES"} clothingImg={shoes} ></FashionDisplayView>
        </div>
      </div>
  );
}

export default App;