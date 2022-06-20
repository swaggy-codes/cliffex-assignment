import Home from "./components/Home";
import Favourites from "./components/Favourites";
import './App.css';
import { BrowserRouter as Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <h2 className="heading-1">
          Cliffex Assignment<br/>
          Submitted by Saksham Gupta
        </h2>
         <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Favourites" component={Favourites}/>
         </Switch>
    </div>
  );
}

export default App;
