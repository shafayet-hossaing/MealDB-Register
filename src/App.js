import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Meal from "./Components/Meal/Meal";
import Navbar from "./Components/Navbar/Navbar";
import DataContext from "./Context/DataContext";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <DataContext>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/meal/:mealId">
              <Meal></Meal>
            </PrivateRoute>
          </Switch>
        </Router>
      </DataContext>
    </div>
  );
}

export default App;
