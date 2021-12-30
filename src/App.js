import Header from "./components/Header/index"
import Routes from "./routes"

import "./Styles.css"

function App() {
  return (
    <div className="App">
      <Header/>  
      <div className='Routes'>
        <Routes/>
      </div>
    </div>
  );
}

export default App;

/*
import React, {Component} from "react";
class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Hello, Tia Madrinha</h1>
      </div>
    )
  }
}

export default App;
*/