import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import 'react-json-pretty/themes/monikai.css'

const Profile = () => {
    const{user, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
            <div className="text-white text flex flex-col justify-center items-center">
    
        <img src={user.picture} alt={user.name}/>
        <h2>{user.name}</h2>
        <p>{user.email}</p>

        
    </div>
        )
    
);

};

export default Profile