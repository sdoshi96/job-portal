import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import UserDetails from "./components/UserDetails/UserDetails";
import Shortlist from "./components/Shortlist/Shortlist";
import Reject from "./components/Reject/Reject";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={Cards} />
        <Switch>
          <Route exact path="/user/:id" component={UserDetails} />
          <Route exact path="/shortlisted" component={Shortlist} />
          <Route exact path="/rejected" component={Reject} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
