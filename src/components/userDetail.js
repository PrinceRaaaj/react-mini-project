import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"


const UserDetail = () => {

    const { userId } = useParams()
    const [ userDetails, setUserDetail ] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/userData.json").then(res => {
            const userList = res.data.userDetails
            userList.find((user) => {
                if(String(user.userId) === String(userId)){
                    setUserDetail(user)
                }
            })
        })
    },[])

    return (
        <div className="row">
            <h1>{userDetails.name}</h1>
            <h2>{userDetails.email}</h2>
            <h3>{userDetails.mobile}</h3>
            <h4>{userDetails.gender}</h4>
        </div>
    );
};

export default UserDetail;