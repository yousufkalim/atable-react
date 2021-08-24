import Home from "./Container/Home";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route component={Home} path="/" exact />
      </Switch>
    </div>
  );
}

export default App;
