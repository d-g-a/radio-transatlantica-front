import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import useInput from '../hooks/useInput'
import axios from 'axios'
import { createShow } from '../services/show'
import {getAllGuests} from '../services/guest'


const ShowFormStyled = styled.form`
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

  .send{
      width:100%;
      padding: 0;
      margin: 0;
      color: white;
      background-color: black;
  }

  .genre-selector{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      margin: 4px;

  }

  .checkbox-txt{
      font-size: 12px;
  }

  .send:disabled{
      opacity: 0.5;
  }
`

function ShowForm() {
    const history = useHistory()
    
    const titleInput = useInput("")
    const guestInput = useInput("")
    const dateInput = useInput("")
    const locationInput = useInput("")
    const genreInput = useInput("")


    async function submitForm(e) {
        e.preventDefault()
        await createShow({
            title : titleInput.value,
            guest: guestInput.value,
            date : dateInput.value,
            location : locationInput.value,
            genre : genreInput.value,
            image: imageUrl,
            soundFile : audioUrl 
        } )
        console.log({
            title : titleInput.value,
            guest: guestInput.value,
            date : dateInput.value,
            location : locationInput.value,
            genre : genreInput.value,
            image: imageUrl,
            soundFile : audioUrl 
        } )
        history.push("/shows")
      }


     const [imageUrl, setImageUrl] = useState(null)
     const [audioUrl, setAudioUrl] = useState(null)

     const [guests,setGuests] = useState(null)

    async function fetchGuests(){
        const {data: {allGuests}} = await getAllGuests()
        setGuests(allGuests)
    }

    useEffect(()=>{
        fetchGuests()
    }, [])



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

    async function uploadAudio( {target: {files} } ){
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'radio-transatlantica')

        const {data: {secure_url}}
        = await axios.post(
            'https://api.cloudinary.com/v1_1/dieglitter/video/upload',
            data
        )
        setAudioUrl(secure_url)
    }

    

    return (
        <ShowFormStyled  onSubmit={submitForm}>
            <h2>New Show!</h2>
            <br/>
            <label htmlFor="title">Title</label>
                <input 
                type="text" 
                name="title" 
                id="title" 
                placeholder="Title of the show" 
                {...titleInput} 
                />
                 <br/>
                 <label htmlFor="guest">Guest's Name</label>
                 <select name="guest" id="guest" {...guestInput}>
                 {guests ? (guests.map(guest => (
                    <option value={guest._id} >{guest.name}</option>
              
                ))) : (<option>Loading</option>)}
                </select>
            
                {/* <input 
                type="text" 
                name="guest"
                id="guest"
                placeholder="name of guest"
                {...guestInput}
                /> */}
                <br/>
                <label htmlFor="image">Image</label>
                <input 
                type="file" 
                name="image"
                id="image"
                onChange={uploadPhoto}
                //{...imageInput}
                />
                <br/>
                <label htmlFor="soundFile">Audio file:</label>
                <input 
                type="file"
                name="soundFile"
                id="soundFile" 
                onChange={uploadAudio}
                // {...soundFileInput}
                />
                <br/>
                <label htmlFor="date">When was the show streamed?</label>
                <input 
                type="text"
                name="date"
                id="date"
                placeholder="22/01/1991"
                {...dateInput}
                />
                <br/>
                <label htmlFor="location">Where was the show streamed from?</label>
                <div {...locationInput}>
                    <input type="radio" value="MEX" id="MEX"name="location"/>
                    <label htmlFor="MEX">MEX</label>
                    <input type="radio" value="BCN" id="BCN"name="location"/>
                    <label htmlFor="BCN">BCN</label>
                </div>
                <br/>
                <label htmlFor="genre">Choose 1 genre that best fit the show's style</label>
            

                <div {...genreInput} className="genre-selector">
                    <div>
                        <input type="checkbox" name="genre" id="AMBIENT" value="AMBIENT"/>
                        <label htmlFor="AMBIENT" className="checkbox-txt">AMBIENT</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="NEW AGE" value="NEW AGE"/>
                        <label htmlFor="NEW AGE" className="checkbox-txt">NEW AGE</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="ELECTRONICA" value="ELECTRONICA"/>
                        <label htmlFor="ELECTRONICA" className="checkbox-txt">ELECTRONICA</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="KRAUTROCK" value="KRAUTROCK"/>
                        <label htmlFor="KRAUTROCK" className="checkbox-txt">KRAUTROCK</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="PSYCHODELIC ROCK" value="PSYCHODELIC ROCK"/>
                        <label htmlFor="PSYCHODELIC ROCK" className="checkbox-txt">PSYCHODELIC ROCK</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="LATIN SOUL" value="LATIN SOUL"/>
                        <label htmlFor="LATIN SOUL" className="checkbox-txt">LATIN SOUL</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="HEAVY METAL" value="HEAVY METAL"/>
                        <label htmlFor="HEAVY METAL" className="checkbox-txt">HEAVY METAL</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="FREE JAZZ" value="FREE JAZZ"/>
                        <label htmlFor="FREE JAZZ" className="checkbox-txt">FREE JAZZ</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="DISCO" value="DISCO"/>
                        <label htmlFor="DISCO" className="checkbox-txt">DISCO</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="TECHNO" value="TECHNO"/>
                        <label htmlFor="TECHNO" className="checkbox-txt">TECHNO</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="HOUSE" value="HOUSE"/>
                        <label htmlFor="HOUSE" className="checkbox-txt">HOUSE</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="HIP HOP" value="HIP HOP"/>
                        <label htmlFor="HIP HOP" className="checkbox-txt">HIP HOPL</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="BLUES" value="BLUES"/>
                        <label htmlFor="BLUES" className="checkbox-txt">BLUES</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="SOUL" value="SOUL"/>
                        <label htmlFor="SOUL" className="checkbox-txt">SOUL</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="PUNK" value="PUNK"/>
                        <label htmlFor="PUNKSOUL" className="checkbox-txt">PUNK</label>
                    </div>
                    
                </div>
                <br/>
                <button type='SUBMIT' className="send" disabled={!imageUrl || !audioUrl}>SUBMIT</button>
            
        </ShowFormStyled>
    )
}

export default ShowForm
