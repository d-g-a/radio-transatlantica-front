import React, {useState,useContext} from 'react'
import {MyContext} from "../context"
import styled from "styled-components"
import {logOut} from '../services/index'
import {Link, Redirect} from "react-router-dom"
import {deleteShowLoved} from "../services/index"


const ProfileStyled = styled.div`

margin-top: 80px;
background-color: black;
color: white;
height: 100vh;
text-align: left;
display: flex;
justify-content: center;
align-items: flex-start;

.profile-container{
    padding: 32px;
    text-align: left;
}

h1{
    font-size: 32px;
    text-transform: uppercase;
    margin-bottom: 24px;
}


ul{
    list-style: none;

}

li{
    font-size: 24px;
    text-align: left;
}

a {
    color: white;
    text-decoration: none;
}

a:hover{
    color: #FF5C00;
}

.container{
    border: 1px white solid;
    height: 100px;
    width: 500px;
    padding: 8px;
    margin-bottom: 16px; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.buttons{
    margin-bottom: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


.favorite-shows{
    font-size: 24px;
}

.image-container{
    width: 100px;
    height: 100px;
    object-fit: cover;
}

.show-title{
    font-size: 24px;
    text-transform: uppercase;
}

.show-pic{
    width:100px;
    height: 100px;
    object-fit: cover;
}

.admin-button{
background-color: white;
border-radius: 1px solid white;
padding: 8px;
width:120px;
}

.admin-button>a{
    color: black;
}

.logout{
    background-color: black;
    color: white;
    border-radius: 1px solid white;
    padding: 8px;   
    width:120px; 
}

.remove-button{
    background-color: black;
    color: white;
    border-radius: 1px solid white;
    padding: 4px; 
    height: 20px;  
    width:104px; 
    font-size:10px;

}

.info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

`

function Profile({history}) {

   

    const {user, clearContextUser} = useContext(MyContext)

    const [remove,setRemove] = useState("")

    console.log(remove)

    async function logOutProcess(){
        await logOut()
        clearContextUser()
        history.push("/")
    }

    // async function submitDeleteButton(id) {
    //     await deleteShowLoved({
    //     })
    //     console.log({
    //         showsLoved: id.value
    //     })   
    //   }

    
    return user ? (
        <ProfileStyled> 
            {<div className="profile-container">
                <div className="buttons">
                    <button className="logout" onClick={logOutProcess}>LOGOUT</button> 
                    {user.role === "ADMIN" && (<button className="admin-button"><Link to="/admin">ADMIN PANEL</Link></button> )}  
                   
                </div>
                <div className="show-box">
                <h1>Your favorite shows</h1>
        
            { user ? ( 
                user.showsLoved.map(show => {console.log(show.guest)
                return (
                <div className="container">
                    <div className="info">
                        <div>
                            <p className="show-title"><Link to={`/shows/${show._id}`}>{show.title}</Link></p>
                            <p className="guest-name"><Link to={`/guests/${show.guest._id}`}>by{show.guest.name}</Link></p> 
                        </div>
            
                        <button 
                        className="remove-button"
                        value={show.guest._id}
                        // onClick={submitDeleteButton()}
                        id="showsLoved"
                        name="showsLoved"
                        // onChange={e => setRemove(e.target.value)}
                        // type="submit"
                        >REMOVE</button>   
                    </div>
                  
                     <div className="image-container">
                         <img src={show.image} className="show-pic"/>
                     </div>
                    

                </div>
                
            )})
             ):(
            <p>No shows yet</p>
             )}
                </div>

            
            </div>     }
         
        </ProfileStyled>
    ) : (
        <Redirect to="/login"/>
    )
}

export default Profile
