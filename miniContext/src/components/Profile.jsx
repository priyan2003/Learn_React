import React from 'react'
import {useContext,useState} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    if(!user) return <div>Enter Detail</div>
    return <div>User Name is {user.username}</div>
  
}

export default Profile