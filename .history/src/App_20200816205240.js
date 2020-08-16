import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./component/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/:id" component={Home} />
          <Redirect to="/:id" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
