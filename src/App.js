import logo from './logo.svg';
import './App.css';
import react,{ Component } from "react";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import Homepage from "./Views/Home/Homepage";
import Aboutpage from "./Views/About/Aboutpage";
import FormPage from './Views/FormPage/FormPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
     <Route exact path="/homepage" component={Homepage}/>
     <Route exact path="/about" component={Aboutpage}/>
     <Route exact path="/formpage" component={FormPage}/>
    <Route path="/*" component={()=> <Redirect to='/homepage'/> }  />

     </Switch>
    </div>
    </Router>
  );

  
function about() {
    return (
      <div>
        <h1>about</h1>
      </div>
    )
  }
  
}

export default App;
