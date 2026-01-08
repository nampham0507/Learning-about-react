import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import Home from "./Example/Home";
import ListTodo from "./Todos/ListTodo";
import MyComponent from "./Example/MyComponent";
import Nav from "./Nav/Nav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <div className="app-content">
            {" "}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/todo" component={ListTodo} />
              <Route path="/about" component={MyComponent} />
            </Switch>
          </div>
        </header>

        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
          transition={Bounce}
        />
      </div>
    </Router>
  );
}

export default App;
