import React, { useState, useEffect} from 'react'
import axios from "axios"

const UsersTable = () => {

    const [ userDetails, setUserDetail ] = useState([])

    useEffect(() => {
        axios.get("userData.json").then(res => setUserDetail(res.data.userDetails))
    },[])

    return (
        <table class="w-90 table table-striped">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    userDetails.map(user => (
                        <tr>
                            <th>{user.userId}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>{user.gender}</td>
                        </tr>
                    ))
                }
                
                
            </tbody>
        </table>
    );
};

export default UsersTable;