import { useContext, useState } from "react"
import { crud } from "../common/httpFunctions"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"


const LoginOrSignup = ({backendUrl, serverErrors, setServerErrors}) => {
    const navigate = useNavigate()
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const [serverResponse, setServerResponse] = useState("")
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

    const createNewUser = async (formData) => {
        const newUser =  crud.post(backendUrl,"create_user", formData)
        return newUser
        // console.log(newUser)
        // console.log(crud.post(backendUrl,"create_user", formData))
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!signUp) {
           const result = await createNewUser(formData)
           localStorage.setItem("uid", result.auth_token)
           setCurrentUser(result.user)



            console.log(result)
        } else {
            const loginData = {
                username: formData.username,
                password: formData.password
            }
            const result = await crud.post(backendUrl,"login", loginData)
            localStorage.setItem("uid", result.auth_token)
            setCurrentUser(result.user)
        }
        // localStorage.setItem("uid", serverResponse.auth_token)
        // console.log(serverResponse.auth_token)
        // setCurrentUser(serverResponse.user)
        // navigate("/home")
        
    }

    const toggleSignUp = () => {
        setSignUp(!signUp)
    }
    // const redirectToProfile = () => {
    //     navigate(`/${currentUser.id}/profile`)    
    // }

    // console.log(backendUrl)
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