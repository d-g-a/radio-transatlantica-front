import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import {useHistory} from 'react-router-dom'
import {getShows, deleteShow} from "../services/show"
import useInput from '../hooks/useInput'
import { useTranslation } from "react-i18next"

const DeleteShowStyled = styled.form`
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


function DeleteShows() {

    const { t } = useTranslation()

    const history = useHistory()

    const showInput = useInput("")

    const [shows,setShows] = useState(null)

    async function submitForm(e) {
        e.preventDefault()
        await deleteShow(
            showInput.value
        )
        history.push("/shows")
      }

    async function fetchShows() {
        const {data: {shows}} = await getShows()
        setShows(shows)
    }
    

    useEffect(() => {
        fetchShows()
    }, [])


    return (
        <DeleteShowStyled onSubmit={submitForm}>

            <h1>{t("delete-show")}</h1>
            <br/>
                <label htmlFor="show" className="show">{t("show-name")}</label>
                <br/>
                    <select name="show" id="show" {...showInput}>
                    {shows ? (shows.map (show => (
                        <option value={show._id} >{show.title}</option>
                    ))) : (<option>{t("loading")}</option>)}
                    </select>
                    <br/>
                    <button type='SUBMIT' className="send" >{t("delete")}</button>
            
        </DeleteShowStyled>
    )
}

export default DeleteShows
