import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import styled from "styled-components"
import {getAllUsers} from "../services/index"
import useInput from '../hooks/useInput'

const MakeAdminStyled = styled.form`
background-color: white;
margin: 120px 0;
width: 480px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
border: 2px solid black;
padding: 24px;

.guest{
    text-align: left;
}

.send{
    width: 180px;
    height: 32px;
    background-color: red;
    font-size: 16px;
}

`

function MakeAdmin() {

    const history = useHistory()

    const userInput = useInput("")

    const [users,setUsers] = useState(null)

    // async function submitForm(e) {
    //     e.preventDefault()
    //     await updateUser(
    //         showInput.value
    //     )
    //     history.push("/shows")
    //   }

    async function fetchUsers(){
        const {data: {allUsers}} = await getAllUsers()
        setUsers(allUsers)
    }

    useEffect(()=>{
        fetchUsers()
    },[])

    return (
        <MakeAdminStyled>

            <h1>New Admin</h1>
            <br/>
            <label htmlFor="user" className="user">Select a current user email</label>

            <select name="user" id="user" {...userInput}>
                    {users ? (users.map (user => (
                        <option value={user._id} >{user.email}</option>
                    ))) : (<option>Loading</option>)}
                    </select>
                    <br/>
                    <button type='SUBMIT' className="send" >DELETE</button>

            
            
        </MakeAdminStyled>
    )
}

export default MakeAdmin
