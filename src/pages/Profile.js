import React, {useState,useContext} from 'react'
import {MyContext} from "../context"
import styled from "styled-components"
import {logOut} from '../services/index'
import {Link, Redirect} from "react-router-dom"
import {deleteShowLoved} from "../services/index"
import { useTranslation } from "react-i18next"


const ProfileStyled = styled.div`

margin-top: 80px;
background-color: black;
color: white;
width: 100vw;
height: 1920px;
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

hr{
    margin-bottom: 32px;
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
    text-transform: uppercase;
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
    text-transform: uppercase;
}

.remove-button{
    background-color: black;
    color: white;
    border-radius: 1px solid white;
    padding: 4px; 
    height: 20px;  
    width:104px; 
    font-size:10px;
    text-transform: uppercase;

}

.link{
    text-transform: uppercase;
}

.info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

`

function Profile({history}) {

    const { t } = useTranslation()

   

    const {user, clearContextUser} = useContext(MyContext)

    const [remove,setRemove] = useState("")

    console.log(remove)

    async function logOutProcess(){
        await logOut()
        clearContextUser()
        history.push("/")
    }

    async function submitDeleteButton(showId) {
        await deleteShowLoved({
            showsLoved: showId
        })
        console.log({
            showsLoved: showId
        })
      }

    
    return user ? (
        <ProfileStyled> 
            {<div className="profile-container">
                <div className="buttons">
                    <button className="logout" onClick={logOutProcess}>{t("logout")}</button> 
                    {user.role === "ADMIN" && (<button className="admin-button"><Link to="/admin">ADMIN PANEL</Link></button> )}  
                   
                </div>
                <div className="show-box">
                <h1>{t("fav-shows")}</h1>
                <hr/>
        
            { user ? ( 
                user.showsLoved.map(show => {console.log(show?.guest)
                return (
                <div className="container">
                    <div className="info">
                        <div>
                            <p className="show-title"><Link to={`/shows/${show?._id}`}>{show?.title}</Link></p>
                            <p className="guest-name">{t("by")} <Link to={`/guests/${show?.guest?._id}`} className="link">{show?.guest?.name}</Link></p> 
                        </div>
            
                        <button 
                        className="remove-button"
                        value={show?.guest?._id}
                        onClick={() => submitDeleteButton(show?._id)}
                        id="showsLoved"
                        name="showsLoved"
                        >{t("remove")}</button>   
                    </div>
                  
                     <div className="image-container">
                         <img src={show?.image} className="show-pic"/>
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
