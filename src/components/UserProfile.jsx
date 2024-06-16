



const UserProfile = ({currentUser}) => {

    return (
        <>
            {currentUser ? 
            <h1>
                {currentUser.userName}
            </h1>
            :
            <h1>
                Please log in
            </h1>
            }
        </>
    )
}

export default UserProfile