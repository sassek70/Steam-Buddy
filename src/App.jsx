import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
//test
  const testENV = () => {
    console.log(`variable is ${import.meta.env.VITE_STEAM_KEY}`)
    console.log(`variable is ${import.meta.env.VITE_MY_ID}`)

    // userData()

  }


  // this needs to come from a server
  // const userData = () => {
  //   fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${import.meta.env.VITE_STEAM_KEY}&steamids=${import.meta.env.VITE_MY_ID}}`)
  //     .then(res => {
  //       if(res.ok) {
  //         res.json().then(user => console.log(user))
  //       } else {
  //         res.json().then(errors => console.log(errors))
  //       }
  //     })
      
  //   }




  return (
    <>
      <div>
        <a href="https://vitejs.dev">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => testENV()}>
          Test the thing
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
