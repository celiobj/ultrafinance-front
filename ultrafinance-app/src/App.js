import React from 'react';
import Login from './views/login'
import './App.css';
import 'bootswatch/dist/flatly/bootstrap.css'
import './Custom.css'

class App extends React.Component {

  render() {
    return (
      <div>
        <Login />
      </div >
    )
  }
}

export default App;
