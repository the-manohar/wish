import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/:newName" component={Home} />
          <Route path="/" component={Home} />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
