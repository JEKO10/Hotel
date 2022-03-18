import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
    </Router>
  );
}

export default App;
