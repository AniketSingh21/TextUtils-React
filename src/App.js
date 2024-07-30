// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
// import About from './components/About';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
// import {
//   Switch,
//   Route
// } from "react-router-dom";

function App() {

  const[mode ,setMode] = useState('light');

  const toggleMode=()=>{
      if(mode==='light'){
          setMode('dark');
          document.body.style.backgroundColor ='black';
          showAlert("Dark mode has been enabled !","Success");
          document.title="TextUtils-Dark Mode";

      }

      else{
          setMode('light');
          document.body.style.backgroundColor ='white';
          showAlert("Light mode has been enabled !","Success")
          document.title="TextUtils-Light Mode";
      }
  }




const [alert, setAlerts]=useState(null);

const showAlert =(message,type)=>{
  
  setAlerts({
    message:message,
    type:type
  })

  setTimeout(()=>{
    setAlerts(null)
  },1500);
}
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about = "About TextUtils"/>
    <Alerts alert={alert} />
    {/* <Navbar /> */}
    <div className="container">
    <TextForm heading="Enter the text to analyze..."/>
    {/* <Switch>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/home">
        
        </Route>
      </Switch> */}
      </div>
      {/* </BrowserRouter> */}
      {/* <About/> */}
    
    
    </>
  );
}

export default App;
