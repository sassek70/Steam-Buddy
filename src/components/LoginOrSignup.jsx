import { useState } from "react"
import { crud } from "../common/httpFunctions"
import { UNSAFE_DataRouterStateContext, useNavigate } from "react-router-dom"


const LoginOrSignup = ({backendUrl, currentUser, setCurrentUser, setServerResponse}) => {
    const navigate = useNavigate()
    const [existingUser, setExistingUser] = useState(true)
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        user_email: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        if (!existingUser) {
            crud.post(backendUrl,"create_user", formData, setCurrentUser)

        } else {
            crud.post(backendUrl,"login", setServerResponse)
        }
        navigate("/home")

    }

    const setSignUp = () => {
        setExistingUser(!existingUser)
    }
    // const redirectToProfile = () => {
    //     navigate(`/${currentUser.id}/profile`)    
    // }

    console.log(backendUrl)
    return (
        <>
            {existingUser ? 
            <>
                <h3>
                    Please log in
                </h3>
                <button onClick={()=>setSignUp()}>Click here to create an Account</button>
                <form onSubmit={(handleSubmit)}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" value={formData.username} name="username" placeholder="Enter an Username" onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="text" value={formData.password} name="password" placeholder="Enter a Password" onChange={handleChange}></input>
                    </div>
                    <div>
                        <button type="Submit">Log In</button>
                    </div>
                </form>
            </>
                :
                <>
                <h3>
                    Sign up!
                </h3>
                <button onClick={()=>setSignUp()}>Have an account? Log in here</button>
                <form onSubmit={(handleSubmit)}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" value={formData.username} name="username" placeholder="Enter an Username" onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="text" value={formData.password} name="password" placeholder="Enter a Password" onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="user_email">Email address:</label>
                        <input type="text" value={formData.user_email} name="user_email" placeholder="Enter an Email Address" onChange={handleChange}></input>
                    </div>
                    <div>
                        <button type="Submit">Create Account</button>
                    </div>
                </form>
            </>
            }
        </>
    )
}

export default LoginOrSignup