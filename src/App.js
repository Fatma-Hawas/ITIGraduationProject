import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomeTasks from './components/HomeTasks';
import TaskDetails from "./components/TaskDetails";
import NotFound from './components/NotFound';

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomeTasks}/>
      <Route path="/taskDetails" exact component={TaskDetails}/>
      <Route path={"*"} exact component={NotFound}/>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
