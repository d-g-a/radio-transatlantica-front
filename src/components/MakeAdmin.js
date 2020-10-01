import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import styled from "styled-components"
import {getAllUsers} from "../services/index"

const MakeAdminStyled = styled.div`
margin-top: 80px;
text-align: left;
background-color: white;
color: black;

`

function MakeAdmin() {
    const history = useHistory()

    const [users,setUsers] = useState(null)

    async function fetchUsers(){
        const {data: {allUsers}} = await getAllUsers()
        setUsers(allUsers)
    }

    useEffect(()=>{
        fetchUsers()
    },[])

    return (
        <MakeAdminStyled>

            <h1>hola</h1>
            {users ? (users.map(user => (
                <ul>
                     <li value={user._id}>{user.email}</li>
                </ul>
                ))) : (<option>Loading</option>)}
            
            
        </MakeAdminStyled>
    )
}

export default MakeAdmin
