import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {crud} from './common/httpFunctions.js'
import './App.css'
import NavBar from './components/Navigation.jsx'
import {Routes, Route} from 'react-router-dom'
import UserProfile from './components/UserProfile.jsx'
import LoginOrSignup from './components/LoginOrSignup.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [serverResponse, setServerResponse] = useState()
  const [serverErrors, setServerErrors] = useState()
  // const [serverErrors, setServerErrors] = useState()
  const [lastCreatedTestUser, setLastCreatedTestUser] = useState()
  const [currentUser, setCurrentUser] = useState()
  

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
      crud.get(backendUrl, "user_index", setServerResponse)
      //  setServerResponse( (serverResponse) => crud.get(backendUrl, "user_index"))
      //  setServerResponse( (serverResponse) => crud.get(backendUrl, "user_index"))
      console.log(serverResponse)
      //  console.log(serverResponse)
      //  console.log(setResponseObjectData())
      //  console.log(testServerResponse)
      //  setServerResponse(serverResponse => testServerResponse)
    }
    // console.log(serverResponse)

    const testPost = () => {
      const testUser = {
        username: "asdfasdf",
        password: "123456",
        user_email: "test@test.com"
      }
      crud.post(backendUrl, "create_user", testUser, setCurrentUser) //setServerResponse)
      // setLastCreatedTestUser(lastCreatedTestUser => serverResponse)
      setCurrentUser(serverResponse)
      
    }

    const updateTestUser = () => {
      const updatedUser = {
        user_email: "testingAgain@test.org"
      }
      crud.patch(backendUrl, `update_user/${currentUser.id}`, updatedUser, setCurrentUser)

    }

    const clearAllUsers = () => {
      crud.delete(backendUrl, "delete_all", setServerResponse)
      console.log(serverResponse)
    }

    
    
    const deleteLastCreatedUser = () => {
      crud.delete(backendUrl, `delete_user/${currentUser.id}`, setServerResponse)
      setCurrentUser( currentUser => "")
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

  if (currentUser) {
    console.log(currentUser.user)
  }


  return (
    <>
    <NavBar  currentUser={currentUser}/>
    <Routes>
      <Route path='/home'/>
      {/* <Route path='/' element={currentUser ? <UserProfile currentUser={currentUser}/> : "Log Please log in"}/> */}
      {currentUser ?
        <Route path={`/${currentUser.id}/profile`} element={<UserProfile currentUser={currentUser}/>}/>      
      :
        <Route path={`/loginorsignup`} element={<LoginOrSignup backendUrl={backendUrl} currentUser={currentUser} setCurrentUser={setCurrentUser} setServerResponse={setServerResponse} serverErrors={serverErrors} setServerErrors={setServerErrors}/>}/>      
      }

    </Routes>

    {serverErrors ? 
      <div>
        {serverErrors.error}
      </div>  
      :
      <></>
  }
    
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
          {currentUser ? "User: " + currentUser.username : "No user"}
          <br></br>
          {currentUser ? "Email: " + currentUser.user_email : "No user"}
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
