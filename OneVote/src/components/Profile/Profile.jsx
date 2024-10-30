import React, { useContext , useEffect , useState } from "react";
import UserContext from '../../context/UserContext'
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Modal from "../Modal/Modal";
import { loginSuccess } from "../../assests/background";

function Profile() {
    const navigate = useNavigate();
    const {user , isLoggedIn , setUser , setIsLoggedIn} = useContext(UserContext);
    useAuth();

    // Modal section starts here.
    const [showModal , setShowModal] = useState(false);
    const [modalMessage , setModalMessage] = useState('');
    const [modalLink, setModalLink] = useState('');
    const [path , setPath] = useState('');

    const closeModal = () => {
        setShowModal(false);
        navigate(path);
    }
    // Modal section ends here

    const handleLogout = () => {
        if(!isLoggedIn){
            alert('user not found.')
            navigate('/registeration')
            return 
        }
        fetch('http://localhost:8000/api/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                setModalMessage('Session has expired. Please Login again.')
                setPath('/registeration')
                setShowModal(true)
                // alert('Session has expired. Please Login again.')
                // navigate('/registeration')
                // return
            } 
            else{
                
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                localStorage.removeItem('isLoggedIn');
            }
            return response.json();
        })
        .then(data => {
            setModalMessage(data.message)
            // setModalLink(loginSuccess)
            setPath('/hero')
            setShowModal(true);
            // navigate('/hero');
            // alert(data.message);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <>
            {/* Modal Component */}
            <Modal 
                isOpen={showModal} 
                closeModal={closeModal} 
                message={modalMessage}
                link={modalLink}
            />
            <main 
                className="w-[80vw] md:max-w-[300px] h-max my-12 mx-auto  flex flex-col bg-orange-400 text-white p-2 md:p-4 shadow shadow-gray-500 rounded-lg"
            >
                <h1 className="text-lg md:text-xl ubuntu-medium-italic mb-0 text-center">Profile</h1>
                <div className="w-[70%] border-[2px] border-white mb-3 mt-1 mx-auto"></div>
                <div>Unique Id: {user.unique_id}</div>
                <div>Vote Status : {user.has_voted ? 'Voted' : 'Yet to Vote'} </div>
                {user.has_voted ? <div>Voted At : {new Date(user.voted_at).toLocaleDateString()} </div> :''}
                <button 
                    onClick={handleLogout}
                    className="bg-white p-2 my-2 text-orange-500 w-max mx-auto rounded-[20px] hover:rounded-[13px] transition-all ease-in-out duration-150 text-sm md:text-base"
                >Logout</button>
            </main>
        </>
    )
}

export default Profile;