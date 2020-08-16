import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./component/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/:newName" component={Home} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </>
  );
}

export default App;
