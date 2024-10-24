import UserContext from "./UserContext";
import { useContext , useState } from "react";

const UserContextProvider = ({children}) => {
    const [user , setUser] = useState(false);

    return(
        <UserContext.Provider value={{user , setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;