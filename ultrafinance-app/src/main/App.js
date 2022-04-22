import React from 'react';
import '../App.css';
import 'bootswatch/dist/flatly/bootstrap.css'
import '../Custom.css'
import Rotas from './rota';
import NavBar from '../components/navbar';

class App extends React.Component {

  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <div>
            <Rotas />
          </div >
        </div>
      </>
    )
  }
}

export default App;
