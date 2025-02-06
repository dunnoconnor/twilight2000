import { useState } from 'react'
import './App.css'
import Character from './Character'
import Stats from './Stats'

function App() {
  const initialCharacter = new Character();
  const [character] = useState(initialCharacter);


  return (
    <>
      <h1>Twilight 2000</h1>
      <Stats characterStats={character} />
      <div className="card">
        <button onClick={console.log(character)}>
          {/* OnClick */}
        </button>
      </div>
    </>
  )
}

export default App
