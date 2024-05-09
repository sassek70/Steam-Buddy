import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {crud, setResponseObjectData} from './common/httpFunctions.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [serverResponse, setServerResponse] = useState()
  const [serverErrors, setServerErrors] = useState()
  const [lastCreatedTestUser, setLastCreatedTestUser] = useState()

  const backendUrl = "http://localhost:3000/"
  // let serverGetResponse

  const testENV = () => {
    console.log(`variable is ${import.meta.env.VITE_STEAM_KEY}`)
    console.log(`variable is ${import.meta.env.VITE_MY_ID}`)

    // localHostTest()
    steamUserData()

    // railsEnvTest()

  }


  // this needs to come from a server
  const steamUserData = () => {
    // fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${import.meta.env.VITE_STEAM_KEY}&steamids=${import.meta.env.VITE_MY_ID}}`)
    fetch(`http://localhost:3000/steam_user`)
      .then(res => {
        if(res.ok) {
          res.json().then(user => console.log(user))
        } else {
          res.json().then(errors => console.log(errors))
        }
      })
      
    }

    const getAllUsers = () => {
      let response = crud.get(backendUrl, "user_index")
      //  setServerResponse( (serverResponse) => crud.get(backendUrl, "user_index"))
      //  setServerResponse( (serverResponse) => crud.get(backendUrl, "user_index"))
       console.log(response)
      //  console.log(serverResponse)
      //  console.log(setResponseObjectData())
      //  console.log(testServerResponse)
      //  setServerResponse(serverResponse => testServerResponse)
    }
    // console.log(serverResponse)

    const testPost = () => {
      const testUser = {
        username: "Brian",
        user_email: "test@test.com"
      }
      crud.post(backendUrl, "create_user", testUser)
      console.log(lastCreatedTestUser)
    }

    const updateTestUser = () => {
      const updatedUser = {
        user_email: "testingAgain@test.org"
      }
      crud.patch(backendUrl, `update_user/${lastCreatedTestUser.id}`, updatedUser)
      console.log(lastCreatedTestUser)
    }


    const clearAllUsers = () => {
      crud.delete(backendUrl, "delete_all")
    }

    
    
    const deleteLastCreatedUser = () => {
      crud.delete(backendUrl, `delete_user/${lastCreatedTestUser.id}`)
      setLastCreatedTestUser( lastCreatedTestUser => "")
    }


    //-------------------------------------------------

  //   const htttpGetRequest = (url, endPoint) => {
  //     fetch(`${url}${endPoint}`)
  //     .then(res => {  
  //       if(res.ok) {
  //           res.json().then( data => {
  //             setServerResponse( serverResponse => data)
  //           }) 
  //       } else {
  //         res.json().then(errors => {
  //           setServerErrors(serverErrors => errors)
  //         })
  //         }
  //     })
  //   }

  //   const htttpPostRequest = (url, endPoint, data) => {
  //     fetch(`${url}${endPoint}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "Application/json"
  //       },
  //       body: JSON.stringify(data)
  //     })
  //     .then(res => {  
  //       if(res.ok) {
  //           res.json().then(data => {
  //             setLastCreatedTestUser( lastCreatedTestUser => data)
  //         })
            
  //       } else {
  //         res.json().then(errors => {
  //           setServerErrors(serverErrors => errors)
  //         })
  //         }
  //     })
  //   }
    
  //   const htttpPatchRequest = (url, endPoint, data) => {
  //     fetch(`${url}${endPoint}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-type": "Application/json",
  //         "Accept": "Application/json"
  //       },
  //       body: JSON.stringify(data)
  //     })
  //     .then(res => {  
  //       if(res.ok) {
  //           res.json().then(data => {
  //             // setServerResponse(serverResponse => data)
  //             setLastCreatedTestUser( lastCreatedTestUser => data)

  //         })
            
  //       } else {
  //         res.json().then(errors => {
  //           setServerErrors(serverErrors => errors)
  //         })
  //         }
  //     })
  //   }

  //   const htttpDeleteRequest = (url, endPoint) => {
  //     fetch(`${url}${endPoint}`, {
  //     method: "DELETE"
  //   })
  //     .then(res => {  
  //       if(res.ok) {
  //           res.json().then(data => {
  //             console.log(data)
  //             // setServerResponse(serverResponse => data)
  //         })
            
  //       } else {
  //         res.json().then(errors => {
  //           setServerErrors(serverErrors => errors)
  //         })
  //         }
  //     })
  //   }

  // // this needs to come from a server
  // // const localHostTest = () => {
  // //   fetch(`http://localhost:3000/steam`)
  // //     .then(res => {
  // //       if(res.ok) {
  // //         res.json().then(user => console.log(user))
  // //       } else {
  // //         res.json().then(errors => console.log(errors))
  // //       }
  // //     })
      
  // //   }

  //   // const railsEnvTest = () => {
  //   //   fetch(`http://localhost:3000/env`)
  //   //     .then(res => {
  //   //       if(res.ok) {
  //   //         res.json().then(user => console.log(user))
  //   //       } else {
  //   //         res.json().then(errors => console.log(errors))
  //   //       }
  //   //     })
        
  //   //   }


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
        <button onClick={() => getAllUsers()}>
          Get a list of Users
        </button>
        <button onClick={() => testPost()}>
          Create a test user
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button onClick={() => updateTestUser() }>
          Update Test User
        </button>
        <button onClick={() => deleteLastCreatedUser()}>
          Delete last created user
        </button>
        <button onClick={() => clearAllUsers() }>
          Clear all Test users
        </button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
