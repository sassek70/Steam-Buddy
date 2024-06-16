import {NavLink} from 'react-router-dom'



const NavBar = ({currentUser}) => {




    return (
        <>
            <NavLink to='/home' name='Home'>
                HOME      
            </NavLink>
            <NavLink to='/' name='Home'>
                YOUR LISTS            
            </NavLink>
            <NavLink to='/' name='Home'>
                YOUR GAMES         
            </NavLink>

            {currentUser ?
            <NavLink to={`/${currentUser.id}/profile`} name='Home'>
                PROFILE            
            </NavLink>
            :
            <NavLink to={`/loginorsignup`} name="LoginorSignup">
                Login or Sign Up
            </NavLink>
            }
        </>
    )
}

export default NavBar