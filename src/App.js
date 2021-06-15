import React from 'react';
import './App.css';
import Footage from './Components/Footage/Footage';
import Header from './Components/Header/Header';
import Highlight from './Components/Highlight/Highlight';
import NavHead from './Components/NavHead/NavHead';
import Analysis from './Components/Analysis/Analysis';
function App() {
  return (
    <div className="App">
     <NavHead></NavHead>
     <Header></Header>
     <Footage></Footage>
     <Highlight></Highlight>
     <Analysis></Analysis>
    </div>
  );
}

export default App;
