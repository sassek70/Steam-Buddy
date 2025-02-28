import React from "react"
import { useEffect, useState } from "react"
import { crud } from "../common/httpFunctions"
import { useNavigate } from "react-router-dom"


// create the context
const UserContext = React.createContext()

// create provider component
const UserProvider = ({children}) => {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState(null)

    // const setUser = async (user) => {
    //     setCurrentUser(user)
    // }
    
    useEffect(() => {
        const loginInUser = async () => {
            if(localStorage.uid) {
                //not setting currentUser state correcly
                const loggedIn = await crud.post(import.meta.env.VITE_BACKEND_URL, `existing_token`, localStorage.uid)
                // await setUser(loggedIn.username)
                console.log(loggedIn)
                navigate(`/home`)
            } else {
                console.log("No user found")
                navigate(`/home`)
            }
        }
        loginInUser()
    },[])

    // the value prop of the provider is the context data
    // this value will be available in the child components of this provider
    return ( <UserContext.Provider value={{setCurrentUser}}>
        {children}
    </UserContext.Provider>)
}

export {UserContext, UserProvider}