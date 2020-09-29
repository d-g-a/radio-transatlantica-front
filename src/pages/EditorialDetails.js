import React, {useEffect, useState, useContext} from 'react'
import styled from "styled-components"
import Footer from "../components/Footer"
import {getOneEditorial} from "../services//editorial"


const EditorialDetailsStyled = styled.div`
display:flex;
flex-direction: column;
background-color: white;
padding: 72px 0 0 0 ;
margin: 0;

p{
    font-family: 'gt_super_textbook';
}

.banner-pic-div{
    width: 100vw;
    height: 100vh;
}

.banner-pic{
    width: inherit;
    object-fit: cover;
}


.main-titles{
    width: 100vw;
    height: 50vh;
}

.headline{
    font-size: 80px;
    margin: 80px;
    text-align: left;
    text-transform: uppercase;
    font-family: 'gt_america_standard_light';
}

.subtitle{
    font-size: 40px;
    margin: 40px 320px;
    font-family:'gt_super_textbook_italic';
    text-transform: lowercase;
}

.bodytext{
    margin: 160px 480px;
    text-align: left;
    font-size: 20px;
}

.body-image-1{

}

.body-image-2{
    margin-bottom: 80px;
}

.credits{
margin-bottom: 80px;
font-family: 'gt_super_textbook_italic';
text-transform: lowercase;
}

.credits>p {
    margin-bottom: 8px;
}

.credits>a{
    margin-bottom: 8px;
}

.instagram{
    width:12px;
}



`


function EditorialDetails({
    match: {
        params: {editorialId}
    }
}) {

    const [editorial , setEditorial] = useState(null)

    useEffect(()=>{
        async function fetchEditorial() {
            const {data : { oneEditorial }} = await getOneEditorial(editorialId)
            setEditorial(oneEditorial)
        }
        fetchEditorial()
    }, [editorialId])



    return (
        <EditorialDetailsStyled>


            { editorial ? (

                <>
                  <div className="banner-pic-div">
                <img src={editorial.bannerImage} alt="banner" className="banner-pic"/>
            </div>   

            <div className="main-titles"> 
            
            <h1 className="headline">{editorial.headline}</h1>

            <p className="subtitle">{editorial.subHeadline}</p>

            <p>Published: {editorial.date}</p>

            </div>         

            <div className="bodytext-div-1">
                <p className="bodytext">
                    {editorial.bodyText}
                </p>

            </div>

            <div className="body-image-1-div">
                <img src={editorial.bodyImage1} alt=""  className="body-image-1"/>
            </div>

            <div className="bodytext-div-2">
                <p className="bodytext">
                     {editorial.bodyText}
                </p>

            </div>

            <div className="body-image-2-div">
                <img src={editorial.bodyImage2} alt=""  className="body-image-2"/>
            </div>

            <div className="credits">
                
                <p>{editorial.articleCategory}</p>
                <p>{editorial.writer}</p>
                <a>Follow {editorial.writer}<img src="https://res.cloudinary.com/dieglitter/image/upload/v1601159256/radio-shows/instagram_1_s8fofc.svg" alt="" className="instagram"/></a>
                <p>{editorial.writerBio}</p>
                <p>{editorial.photographer}</p>  
                <p>Published: {editorial.date}</p>

            </div>
                </>
            ) : (
                <p>loading</p>
            )}


            <Footer/>

        </EditorialDetailsStyled>
    )
}

export default EditorialDetails
