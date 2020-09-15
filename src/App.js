import React from 'react';
import './App.css';
import Survey from './Components/Survey';
import CreateSurvey from './Components/Survey/CreateSurvey';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Survey} />
        <Route exact path="/create-survey" component={CreateSurvey} />
      </Router>

    </div>
  );
}

export default App;
