import React from "react";
import ToDoList from "./component/ToDoList";
import EditList from "./component/EditList";
import { BrowserRouter as Router, Switch ,Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <ToDoList/>
          </Route>
          <Route path="/edit/:id">
            <EditList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
