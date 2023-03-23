import './App.css';
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <button
          onClick={(e) => setCount(count + 1)}
          id='more-button'>
          <span>MORE!</span>
        </button>
        <br></br>
        <button
          onClick={(e) => setCount(count - 1)} id='less-button'>
          <span>less</span>
        </button>
      </header>
    </div>
  );
}

export default App;
