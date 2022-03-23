import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Error from "./pages/Error";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <Router>
      <NavBar />
      <ScrollTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/rooms">
          <Rooms />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
