import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Message />
      <Counter />
      <Greet name ="aaa" heroName="a"> <p>Child props</p></Greet>
      <Greet name ="bb" heroName="b">
        <button>Action</button>
      </Greet>
      <Greet name ="cc" heroName="c"></Greet>
      <Hello />
      <Welcome name ="aaa" heroName="a"> <p>Child props</p></Welcome>
    </div>

  );
}

export default App;
