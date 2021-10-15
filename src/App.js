import {
  BrowserRouter as Router, Route, Switch, useLocation
} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Meal from "./Components/Meal/Meal";
import DataContext from "./Context/DataContext";
import useDataProvider from './Hooks/useDataProvider';
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  const {user} = useDataProvider();
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }
  // let hideHeader = user?.email === '/login' ? null : <Header></Header>
  return (
    <div>
      <DataContext>
        <Router>
          {
             usePathname !== '/login' ? <Header></Header> : <h3>ehllo</h3>
          }
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
