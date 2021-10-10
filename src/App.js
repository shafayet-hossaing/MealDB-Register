import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import DataContext from "./Context/DataContext";

function App() {
  return (
    <div>
      <DataContext>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </DataContext>
    </div>
  );
}

export default App;
