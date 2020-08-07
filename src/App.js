import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Insert from './components/insert';
import Edit from './components/edit';
import View from './components/view';
import Show from './components/show';

function App() {
  return (
    <Router>
      <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to={'/'} class="navbar-brand" href="#">REACT CRUD APP</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to={'/'}  class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to={'/insert'}  class="nav-link" href="#">Insert</Link>
      </li>
      <li class="nav-item">
        <Link to={'/view'}  class="nav-link" href="#">View</Link>
      </li>
    </ul>
  </div>
</nav>
      <h2>Welcome to React CRUD </h2>

      <Switch>  
        <Route exact path="/insert" component={Insert} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/view" component={View} />
        <Route path="/show/:id" component={Show} />
      </Switch>

      </div>
    </Router>
  );
}

export default App;
