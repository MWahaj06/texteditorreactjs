import './App.css';
import About from './mycomps/About';
import Navbar from './mycomps/Navbar';
import TextForm from './mycomps/TextForm';
import { useState } from 'react';
import Alert from './mycomps/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212527';
      showAlert("Dark Mode enabled!", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode disabled!", "success");
    }

  }

  return (
    <>
      <Router>
        <Navbar title="My Text Editor" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/About">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter your Text below:" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
