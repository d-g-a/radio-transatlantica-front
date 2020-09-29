import React, {useState} from 'react'
import styled from 'styled-components'
import useInput from '../hooks/useInput'
import axios from 'axios'
import { createGuest } from '../services/guest'
import {useHistory} from 'react-router-dom'

const GuestFormStyled = styled.form`
background-color: white;
margin: 120px 0;
width: 480px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
border: 2px solid black;
padding: 24px;
 
 h2{
     padding: 0;
     margin: 0;
 }

 textarea{
    width:100%;
 }

  .send{
      width:100%;
      padding: 0;
      margin: 0;
      color: white;
      background-color: black;
  }
  .send:disabled{
      opacity: 0.5;
  }
`

function GuestForm() {

    const history = useHistory()

    const nameInput = useInput("")
    const bioInput = useInput("")

    const [imageUrl, setImageUrl] = useState(null)


    async function submitForm(e) {
        e.preventDefault()
        await createGuest({
            name : nameInput.value,
            image: imageUrl,
            bio: bioInput.value
        } )
        history.push("/")
      }


    async function uploadPhoto({target: {files} }){
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'radio-transatlantica')

        const {data: {secure_url}} 
        = await axios.post(
            'https://api.cloudinary.com/v1_1/dieglitter/image/upload',
            data
            )
            setImageUrl(secure_url)
    }

    
    return (
        <GuestFormStyled onSubmit={submitForm}>
            <h2>New Guest in Radio Transatlántica</h2>
            <br/>
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Frank Ocean"
            {...nameInput}
            />
            <br/>
            <label htmlFor="image">Image</label>
            <input 
            type="file" 
            id="image" 
            name="image"
            onChange={uploadPhoto}
            />
            <br/>
            <label htmlFor="bio">Add a short bio</label>
            <textarea 
            type="text" 
            id="bio" 
            name="bio" 
            placeholder="Frank Ocean is a singer/songwriter from LA."
            {...bioInput}
            />
            <br/>
            <button type= "submit" className="send" disabled={!imageUrl} >SUBMIT</button>
        </GuestFormStyled>
    )
}

export default GuestForm
