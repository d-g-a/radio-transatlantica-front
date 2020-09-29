import React, {useContext} from 'react'
import {MyContext} from "../context"
import styled from "styled-components"
import {logOut} from '../services/index'
import {Link, Redirect} from "react-router-dom"


const ProfileStyled = styled.div`

margin: 200px;
`

function Profile({history}) {

    const {user, clearContextUser} = useContext(MyContext)

    console.log(user)


    async function logOutProcess(){
        await logOut()
        clearContextUser()
        history.push("/")
    }

    
    return user ? (
        <ProfileStyled> 
            {<div>
            <h1>Welcome Back {user.name}</h1>
            <h3>Email{user.email}</h3>
            <h4>Your favorite shows</h4>
            <p>{user.showsLoved}</p>

            
            {/* {user.showsLoved.map((show) => (
                <ul>
                    <li>{show.title}</li>
                </ul>
            ))} */}
        

            <h4>Your favorite editorials</h4>  

            

            {user.role === "ADMIN" && (<button><Link to="/admin">ADMIN PANEL</Link></button> )}  

            <button onClick={logOutProcess}>LogOut</button> 
            </div>     }
         
        </ProfileStyled>
    ) : (
        <Redirect to="/login"/>
    )
}

export default Profile
