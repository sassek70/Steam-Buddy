import { useState } from "react"
import { crud } from "../common/httpFunctions"
import { UNSAFE_DataRouterStateContext, useNavigate } from "react-router-dom"


const LoginOrSignup = ({backendUrl, currentUser, setCurrentUser, setServerResponse, serverErrors, setServerErrors}) => {
    const navigate = useNavigate()
    const [signUp, setSignUp] = useState(true)
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
        if (!signUp) {
            crud.post(backendUrl,"create_user", formData, setCurrentUser)
            // navigate("/home")
        } else {
            const loginData = {
                username: formData.username,
                password: formData.password
            }
            crud.post(backendUrl,"login", loginData, setServerErrors)
        }

    }
    console.log(serverErrors)

    const toggleSignUp = () => {
        setSignUp(!signUp)
    }
    // const redirectToProfile = () => {
    //     navigate(`/${currentUser.id}/profile`)    
    // }

    console.log(backendUrl)
    return (
        <>
            {signUp ? 
            <>
                <h3>
                    Please log in
                </h3>
                <button onClick={()=>toggleSignUp()}>Click here to create an Account</button>
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
                {serverErrors ?
                <h3>
                    {serverErrors.error}
                </h3>
                :
                <></>    
            }
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