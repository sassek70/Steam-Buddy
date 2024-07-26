import {NavLink} from 'react-router-dom'



const NavBar = ({currentUser, setCurrentUser}) => {

console.log(setCurrentUser)
    // const handleClick = () => {
    //     setCurrentUser("")
    // }




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
                    <button onClick={() => setCurrentUser(null)}>Log Out</button>
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