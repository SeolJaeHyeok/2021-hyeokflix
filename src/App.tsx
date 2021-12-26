import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Hearder";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/tv" component={Tv}></Route>
        <Route path="/search" component={Search}></Route>
      </Switch>
    </Router>
  );
}

export default App;
