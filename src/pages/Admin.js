import React, {useState, useContext} from 'react'
import {MyContext} from "../context"
import ShowForm from '../components/ShowForm'
import EditorialForm from '../components//EditorialForm'
import GuestForm from '../components/GuestForm'
import styled from 'styled-components'
import {logOut} from '../services/index'
import { Redirect } from 'react-router-dom'

const AdminStyles = styled.div`

background-color: #FF5C00;
width: 100vw;
height: 1680px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;


.logo {
    width: 240px;
    margin: 24px;
}

.ButtonsLogo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 20px;
    margin: 120px 72px 0 320px;
}

.ButtonSet {
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

button{
    background-color: black;
    border-radius: 8px;
    color: white;
    width:240px;
    height:40px;
    margin: 8px 16px;
}

.FormSet{
display:flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
}



`

function Admin({history}) {

    const {user, clearContextUser} = useContext(MyContext)

    const [newShow, setNewShow] = useState(false)
    const [newEditorial, setNewEditorial] = useState(false)
    const [newGuest, setNewGuest] = useState(false)

    
    function newShowForm(){
        setNewShow(!newShow)
        setNewEditorial(false)
        setNewGuest(false)
    
    }

    function newEditorialForm(){
        setNewEditorial(!newEditorial) 
        setNewShow(false)
        setNewGuest(false)

    }

    function newGuestForm(){
        setNewGuest(!newGuest)
        setNewEditorial(false)
        setNewShow(false)
    }

    async function logOutProcess(){
        await logOut()
        clearContextUser()
        history.push("/")
    }


  

    return user ? (
        <AdminStyles>
            {/* <h1>Admin Panel</h1> */}
            <div className="ButtonsLogo">
                <img src="https://res.cloudinary.com/dieglitter/image/upload/v1601151897/radio-shows/rt-logo_cbvyz7.svg" alt="rt-logo" className="logo"/>

                <div className="ButtonSet">
                    {!newShow ? (<button onClick={newShowForm} >Add New Show</button>) : (<button onClick={newShowForm} >Cancel</button>)}
                    {!newGuest ? (<button onClick={newGuestForm} >Create New Guest</button>) : (<button onClick={newGuestForm} >Cancel</button>)}
                    {!newEditorial ? (<button onClick={newEditorialForm} >Add New Editorial</button>) : (<button onClick={newEditorialForm} >Cancel</button>)}
                    <button>See All Shows</button>
                    <button>See All Editorials</button>
                    <button onClick={logOutProcess}>LOG OUT</button>
                </div>
            </div>

            <div className="FormSet">
                {newShow && 
                ( <ShowForm/> )} 
                {newEditorial && 
                ( <EditorialForm/> )} 
                {newGuest && 
                ( <GuestForm/> )}
            </div>

    
        </AdminStyles>
    ) : (
        <Redirect to="/login"/>
    )   
}

export default Admin
