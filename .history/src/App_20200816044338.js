import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./component/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/:name" component={Home} />
      </BrowserRouter>
    </>
  );
}

export default App;
