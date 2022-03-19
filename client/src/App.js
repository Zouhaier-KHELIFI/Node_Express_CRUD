import React,{useState,useEffect} from "react";
import Axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Contact } from "./";
import Process from "./components/Process";
function App() {

    return ( 
      <div class="App" >
<Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/process" exact component={() => <Process />} />

        </Switch>
        <Footer />
      </Router>
  
</div>
        
    );
    }

export default App;