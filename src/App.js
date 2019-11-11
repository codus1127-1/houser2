import React from 'react';
import './App.css';
import Header from './components/Header';
import routes from './routes';

function App() {
  return (
    <div className="App">
    <Header/>
    <div className="body">
      {routes}
    </div>
    </div>
  );
}

export default App;
