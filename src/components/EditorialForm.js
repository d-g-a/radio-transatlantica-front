import React, {useState} from 'react'
import styled from 'styled-components'
import useInput from '../hooks/useInput'
import axios from 'axios'
import { createEditorial } from '../services/editorial'
import {useHistory} from 'react-router-dom'

const EditorialFormStyled = styled.form`
background-color: white;
margin: 120px 0;
width: 480px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
border: 2px solid black;
padding: 24px;
 
 h2,h3,h4{
     padding: 0;
     margin: 0;
     display: inline;
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

  textarea{
      width: 100%;
  }

  .text-space{
      width: 100%;
  }

  .radio{
      display:flex;
      flex-direction: row;
      justify-content: flex-start;

  }

  .HeadlineSettings{
      color: white;
      background-color: black;
      border-radius:8px;
      height: 32px;
      width: 50%;
      padding: 0;
      margin: 0;
  }
  
`

function EditorialForm() {

    const history = useHistory()

    const articleCategoryInput = useInput("")
    const headlineInput = useInput("")
    const headlineSizeInput = useInput("")
    const headlineTypefaceInput = useInput("")
    const headlineWidthInput = useInput("")
    const headlineAlignmentInput = useInput("")
    const subHeadlineInput = useInput("")
    const bodyTextInput = useInput("")
    const writerNameInput = useInput("")
    const writerBioInput = useInput("")
    const writerInstagramInput = useInput("")
    const photographerNameInput = useInput("")
    const dateInput = useInput("")

    const [bannerUrl, setBannerUrl] = useState(null)
    const [bodyPic1Url, setbodyPic1Url] = useState(null)
    const [bodyPic2Url, setbodyPic2Url] = useState(null)

    async function submitForm(e) {
        e.preventDefault()
        await createEditorial({
            articleCategory: articleCategoryInput.value,
            headline: headlineInput.value,
            headlineSize: headlineSizeInput.value,
            headlineTypeface: headlineTypefaceInput.value,
            headlineWidth: headlineWidthInput.value,
            headlineAlignment: headlineAlignmentInput.value,
            subHeadline: subHeadlineInput.value,
            bannerImage: bannerUrl,
            bodyImage1: bodyPic1Url,
            bodyImage2: bodyPic2Url,
            bodyText: bodyTextInput.value,
            writer: writerNameInput.value,
            writerBio: writerBioInput.value,
            instagram: writerInstagramInput.value,
            photographer: photographerNameInput.value,
            date: dateInput.value,
         } )
        history.push("/")
    }

 
    async function uploadBanner({target: {files} }){
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'radio-transatlantica')

        const {data: {secure_url}} 
        = await axios.post(
            'https://api.cloudinary.com/v1_1/dieglitter/image/upload',
            data
            )
            setBannerUrl(secure_url)
    }

    async function uploadBodyPic1({target: {files} }){
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'radio-transatlantica')

        const {data: {secure_url}} 
        = await axios.post(
            'https://api.cloudinary.com/v1_1/dieglitter/image/upload',
            data
            )
            setbodyPic1Url(secure_url)
    }

    async function uploadBodyPic2({target: {files} }){
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'radio-transatlantica')

        const {data: {secure_url}} 
        = await axios.post(
            'https://api.cloudinary.com/v1_1/dieglitter/image/upload',
            data
            )
            setbodyPic2Url(secure_url)
    }   

    return (
        <EditorialFormStyled  onSubmit={submitForm}>
            <h2>New story to Radio Transatlántica</h2>
            <br/>
            <h4>Article Category</h4>
            <div 
            className="radio" 
            {...articleCategoryInput}
            >
                <input type="radio" id="Art" value="Art" name="articleCategory"/>
                <label htmlFor="Art">Art</label>
                <input type="radio" id="Culture" value="Culture" name="articleCategory"/>
                <label htmlFor="Culture">Culture</label>
                <input type="radio" id="Music" value="Music" name="articleCategory"/>
                <label htmlFor="Music">Music</label>
            </div>
            <br/>
            <h4 htmlFor="headline">Headline</h4>
            <input 
            type="text" 
            id="headline" 
            name="headline" 
            placeholder="Is Techno Dead?" 
            className="text-space"
            {...headlineInput}
            />    
            <br/>
            <h4>Headline Size</h4>
            <div 
            className="radio" 
            {...headlineSizeInput}
            >
                <input type="radio" id="Small" value="Small" name="headlineSize"/>
                <label htmlFor="Small">Small</label>
                <input type="radio" id="Medium" value="Medium" name="headlineSize"/>
                <label htmlFor="Medium">Medium</label>
                <input type="radio" id="Large" value="Large" name="headlineSize"/>
                <label htmlFor="Large">Large</label>
                <input type="radio" id="Extra-Large" value="Extra-Large" name="headlineSize"/>
                <label htmlFor="Extra-Large">Extra-Large</label>
            </div>
            <br/>
            <h4>Headline Typeface</h4>
            <div 
            className="radio"
            {...headlineTypefaceInput}
            >
                <input type="radio" id="Serif" value="Serif" name="headlineTypeface"/>
                <label htmlFor="Serif">Serif</label>
                <input type="radio" id="Sans-Serif" value="Sans-Serif" name="headlineTypeface"/>
                <label htmlFor="Sans-Serif">Sans-Serif</label>
            </div>
            <br/>
            <h4>Headline Width</h4>
            <div 
            className="radio"
            {...headlineWidthInput}
            >
                <input type="radio" id="50%" value="50%" name="headlineWidth"/>
                <label htmlFor="50%">50%</label>
                <input type="radio" id="75%" value="75%" name="headlineWidth"/>
                <label htmlFor="75%">75%</label>
                <input type="radio" id="100%" value="100%" name="headlineWidth"/>
                <label htmlFor="100%">100%</label>
            </div>
            <br/>
            <h4>Headline Alignment</h4>
            <div 
            className="radio"
            {...headlineAlignmentInput}
            >
                <input type="radio" id="Left" value="Left" name="headlineAlignment"/>
                <label htmlFor="Left">Left</label>
                <input type="radio" id="Center" value="Center" name="headlineAlignment"/>
                <label htmlFor="Center">Center</label>
            </div>
           
            <br/>
            <h4>Sub-Headline</h4>
            <input 
            type="text" 
            id="Sub-Headline" 
            name="subHeadline" 
            placeholder="Yes,it's dead" 
            className="text-space"
            {...subHeadlineInput}
            />
            <br/>
            <h4>Body-Text</h4>
            <textarea 
            name="bodyText" 
            id="bodyText" 
            cols="30" rows="10" 
            className="text-space" 
            {...bodyTextInput}
            />
            <br/>
            <h4>Banner Image</h4>
            <input 
            type="file" 
            name="bannerImage"
            onChange={uploadBanner}
            />
            <br/>

            <h4>Body Image 1</h4>
            <input 
            type="file" 
            name="bodyImage1"
            onChange={uploadBodyPic1}
            />
            <br/>
            <h4>Body Image 2</h4>
            <input 
            type="file" 
            name="bodyImage2"
            onChange={uploadBodyPic2}
            />
            <br/>
            <h4>Writer's Name</h4>
            <input 
            type="text" 
            placeholder="Writer" 
            name="writer" 
            className="text-space"
            {...writerNameInput}
            />
            <br/>
            <h4>Writer's Bio</h4>
            <textarea 
            name="writerBio" 
            id="" 
            cols="30" 
            rows="4" 
            placeholder="Short Writer Bio" 
            className="text-space"
            {...writerBioInput}
            />
            <br/>
            <h4>Writer's Instagram Account</h4>
            <input 
            type="text" 
            name="instagram" 
            id="instagram" 
            placeholder="@radiotransatlantica" 
            className="text-space"
            {...writerInstagramInput}
            />
            <br/>
            <h4>Photos by</h4>
            <input 
            type="text" 
            name="photographer" 
            id="photographer" 
            placeholder="Name of Photographer" 
            className="text-space"
            {...photographerNameInput}
            />
            <br/>
            <h4>Publish Date</h4>
            <input 
            type="text" 
            name="date" 
            id="date" 
            placeholder="22/01/1991" 
            className="text-space"
            {...dateInput}
            />
            <br/>
            <button type="submit" className="send" disabled={!bannerUrl || !bodyPic1Url || !bodyPic2Url}>SUBMIT</button>


        </EditorialFormStyled>
    )
}

export default EditorialForm
