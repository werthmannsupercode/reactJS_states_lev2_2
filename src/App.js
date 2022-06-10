import { useState } from 'react';
import './App.css';

function App() {

  const [tag, setTag] = useState(true);

  return (
    <div style={tag ? { backgroundColor: 'white' } : { backgroundColor: 'black' }} className="Container">
      <h1 style={tag ? { color: 'black' } : { color: 'white' }}>{tag ? 'Tag' : 'Nacht'}</h1>
      <button onClick={() => setTag(!tag)}>{tag ? 'Change to Nacht' : 'Change to Tag'} </button>
    </div >
  );
}

export default App;
