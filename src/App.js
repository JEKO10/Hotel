import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/rooms">
          <Rooms></Rooms>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
