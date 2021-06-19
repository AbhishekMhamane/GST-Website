import logo from './logo.svg';
import './App.css';
import react,{ Component } from "react";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import Homepage from "./Views/Home/Homepage";
import FormPage from './Views/FormPage/FormPage';
import Contactpage from "./Views/Contact/Contactpage";
import FAQpage from './Views/FAQ/FAQpage';
import Reviewpage from './Views/Review/Reviewpage';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
     <Route exact path="/home" component={Homepage}/>
     <Route exact path="/contact" component={Contactpage}/>
     <Route exact path="/form" component={FormPage}/>
     <Route exact path="/review" component={Reviewpage}/>
     <Route exact path="/FAQ" component={FAQpage}/>
    <Route path="/*" component={()=> <Redirect to='/home'/> }  />

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
