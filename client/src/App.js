import './App.css';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";


import PublicFacingForm from "./components/PublicFacingForm";
import Page404 from "./pages/NotFoundPage404";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => {
          window.location.href = "https://projectstepone.org/";
          return null;
        }} />
        <Route path="/form/:id" component={PublicFacingForm} />
        <Route path="**" component={Page404} />

      </Switch>
    </Router>
  );
};

export default App;
