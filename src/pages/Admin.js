import React, {useState, useContext, useEffect} from 'react'
import {MyContext} from "../context"
import ShowForm from '../components/ShowForm'
import EditorialForm from '../components//EditorialForm'
import GuestForm from '../components/GuestForm'
import styled from 'styled-components'
import {logOut} from '../services/index'
import { Redirect } from 'react-router-dom'
import DeleteGuest from "../components/DeleteGuest"
import DeleteEditorials from '../components/DeleteEditorials'
import DeleteShows from "../components/DeleteShows"
import { useTranslation } from "react-i18next"


const AdminStyles = styled.div`

background-color: #FF5C00;
width: 100vw;
height: 1920px;
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
    margin: 120px 72px 0 160px;
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
    text-transform: uppercase;
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

    const { t } = useTranslation()

    const [newShow, setNewShow] = useState(false)
    const [newEditorial, setNewEditorial] = useState(false)
    const [newGuest, setNewGuest] = useState(false)
    const [newAdmin, setNewAdmin] = useState(false)
    const [delShow, setDelShow] = useState(false)
    const [delGuest, setDelGuest] = useState(false)
    const [delEditorial, setDelEditorial] = useState(false)


    
    function newShowForm(){
        setNewShow(!newShow)
        setNewEditorial(false)
        setNewGuest(false)
        setNewAdmin(false)
        setDelShow(false)
        setDelGuest(false)
        setDelEditorial(false)
    }

    function newEditorialForm(){
        setNewEditorial(!newEditorial) 
        setNewShow(false)
        setNewGuest(false)
        setNewAdmin(false)
        setDelShow(false)
        setDelGuest(false)
        setDelEditorial(false)
    }

    function newGuestForm(){
        setNewGuest(!newGuest)
        setNewEditorial(false)
        setNewShow(false)
        setNewAdmin(false)
        setDelShow(false)
        setDelGuest(false)
        setDelEditorial(false)
    }

    function newAdminForm(){
        setNewAdmin(!newAdmin)
        setNewGuest(false)
        setNewEditorial(false)
        setNewShow(false)
        setDelShow(false)
        setDelGuest(false)
        setDelEditorial(false)
    }

    function deleteShow(){
        setDelShow(!delShow)
        setDelGuest(false)
        setDelEditorial(false)
        setNewShow(false)
        setNewAdmin(false)
        setNewGuest(false)
        setNewEditorial(false)
        setNewShow(false)

    }

    function deleteGuest(){
        setDelShow(false)
        setDelGuest(!delGuest)
        setDelEditorial(false)
        setNewAdmin(false)
        setNewGuest(false)
        setNewEditorial(false)
        setNewShow(false)
    }

    function deleteEditorial(){
        setDelShow(false)
        setDelGuest(false)
        setDelEditorial(!delEditorial)
        setNewAdmin(false)
        setNewGuest(false)
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
            <div className="ButtonsLogo">
                <img src="https://res.cloudinary.com/dieglitter/image/upload/v1601151897/radio-shows/rt-logo_cbvyz7.svg" alt="rt-logo" className="logo"/>

                <div className="ButtonSet">
                    {!newShow ? (<button onClick={newShowForm} >{t("new-show")}</button>) : (<button onClick={newShowForm} >{t("cancel")}</button>)}
                    {!newGuest ? (<button onClick={newGuestForm} >{t("new-guest")}</button>) : (<button onClick={newGuestForm} >{t("cancel")}</button>)}
                    {!newEditorial ? (<button onClick={newEditorialForm} >{t("new-editorial")}</button>) : (<button onClick={newEditorialForm} >{t("cancel")}</button>)}
                    {!delShow? (<button onClick={deleteShow} >{t("delete-show")}</button>) : (<button onClick={deleteShow} >{t("cancel")}</button>)}
                    {!delGuest?( <button onClick={ deleteGuest} >{t("delete-guest")}</button>): (<button onClick={ deleteGuest} >{t("cancel")}</button>)}
                    {!delEditorial? (<button onClick={deleteEditorial} >{t("delete-editorial")}</button>) : (<button onClick={deleteEditorial} >{t("cancel")}</button>)}
                    <button onClick={logOutProcess}>{t("logout")}</button>
                </div>
            </div>

            <div className="FormSet">
                {newShow && 
                ( <ShowForm/> )} 
                {newEditorial && 
                ( <EditorialForm/> )} 
                {newGuest && 
                ( <GuestForm/> )}
                { delGuest && 
                (<DeleteGuest/>)}
                { delEditorial && 
                (<DeleteEditorials/>)}
                 { delShow && 
                (<DeleteShows/>)}
            </div>

    
        </AdminStyles>
    ) : (
        <Redirect to="/login"/>
    )   
}

export default Admin
