
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import Coureses from "./componets/Courses";
import Python from "./componets/Python";
import Java from "./componets/Java";

function App() {

 
  return (
    <div className="App">
    <Navbar/> 
     <Coureses/>
    <Router>
    <Switch>
     
      <Route  exact path="/python" component={Python} />
      <Route exact path="java" component={Java}/>
     
    </Switch>
    </Router>
    
    <Footer/>
    </div> 
  );
}

export default App;
