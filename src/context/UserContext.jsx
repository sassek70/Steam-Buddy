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
    
    useEffect(() => {
        if(localStorage.uid) {
            crud.post(import.meta.env.VITE_BACKEND_URL, `existing_token`, localStorage.uid, setCurrentUser)
            navigate(`/home`)
        } else {
            console.log("No user found")
            navigate(`/home`)

        }
    },[])

    // the value prop of the provider is the context data
    // this value will be available in the child components of this provider
    return ( <UserContext.Provider value={{setCurrentUser}}>
        {children}
    </UserContext.Provider>)
}

export {UserContext, UserProvider}