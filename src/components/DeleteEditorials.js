import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import useInput from '../hooks/useInput'
import {useHistory} from 'react-router-dom'
import {getAllEditorials, deleteEditorial} from '../services/editorial'
import { useTranslation } from "react-i18next" 

const DeleteEditorialStyled = styled.form`
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

function DeleteEditorials() {

    const { t } = useTranslation()

    const history = useHistory()

    const editorialInput = useInput("")

    const [editorials, setEditorials] = useState(null)

    async function submitForm(e) {
        e.preventDefault()
        await deleteEditorial(
           editorialInput.value
        )
        history.push("/editorial")
      }

      async function fetchEditorials() {
        const {data: {allEditorials}} = await getAllEditorials()
        setEditorials(allEditorials)
    }

    useEffect(() => {
        fetchEditorials()
    },[])

    return (
        <DeleteEditorialStyled  onSubmit={submitForm}>
            <h1>{t("delete-editorial")}</h1>
            <br/>
                <label htmlFor="editorial" className="editorial">{t("editorial-name")}</label>
                <br/>
                    <select name="editorial" id="editorial" {...editorialInput}>
                    {editorials ? (editorials.map(editorial=> (
                        <option value={editorial._id} >{editorial.headline}</option>
                    ))) : (<option>{t("loading")}</option>)}
                    </select>
                    <br/>
                    <button type='SUBMIT' className="send">{t("delete")}</button>
            
         
            
        </DeleteEditorialStyled>
    )
}

export default DeleteEditorials
