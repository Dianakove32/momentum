import React from 'react';
import './App.scss';
import Clock from './components/clock';

class App extends React.Component {
  render(){
  return (
    <div className="App">
    <Clock />
    </div>
  );
}
}
export default App;
