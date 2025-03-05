import { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { UserContext } from '../context/UserContext'



const NavBar = () => {

    const {currentUser, setCurrentUser} = useContext(UserContext)

    const handleLogOut = () => {
        setCurrentUser(currentUser => null)
        localStorage.removeItem("uid")
    }


    return (
        <>
            <NavLink to='/home' name='Home'>
                HOME      
            </NavLink>
            {currentUser ? 
                <>
                    <NavLink to='/' name='Home'>
                        YOUR LISTS            
                    </NavLink>
                    <NavLink to='/' name='Home'>
                        YOUR GAMES         
                    </NavLink>
                    <NavLink to={`/${currentUser.id}/profile`} name='Home'>
                        PROFILE            
                    </NavLink>
                    <button onClick={() => handleLogOut()}>Log Out</button>
                </>
                :
                <NavLink to={`/loginorsignup`} name="LoginorSignup">
                    Login or Sign Up
                </NavLink>
                }
        </>
    )
}

export default NavBar