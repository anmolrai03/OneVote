import UserContext from "./UserContext";
import { useContext , useEffect, useState } from "react";
import PropTypes from "prop-types";

function UserContextProvider ({children}) {
    
    const [user , setUser] = useState( ()=> {
        const storedUser = sessionStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : {}
    })
    const [isLoggedIn , setIsLoggedIn] = useState( () => {
        const storedLoggedIn = sessionStorage.getItem('isLoggedIn')
        return storedLoggedIn === 'true'
    })

    useEffect( ()=> {
        sessionStorage.setItem('user' , JSON.stringify(user))
        sessionStorage.setItem('isLoggedIn' , isLoggedIn)
    } , [user , isLoggedIn])

    return(
        <UserContext.Provider value={{user , setUser , isLoggedIn , setIsLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext);
}

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default UserContextProvider;