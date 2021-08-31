import Home from "./containers/Home";
import {Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route component={Home} path="/" exact />
      <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
