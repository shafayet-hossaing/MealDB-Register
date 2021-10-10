import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import DataContext from "./Context/DataContext";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <DataContext>
        <Router>
          <Header></Header>
          <Switch>
            <PrivateRoute exact path="/home">
              <Home></Home>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </DataContext>
    </div>
  );
}

export default App;
