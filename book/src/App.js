import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

// class App extends Component {
  const App = () => (                     
    <div className="ui container">
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
    </div>
);
export default App;
