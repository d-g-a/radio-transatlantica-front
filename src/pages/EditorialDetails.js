import React, {useEffect, useState, useContext} from 'react'
import styled from "styled-components"
import Footer from "../components/Footer"
import {getOneEditorial} from "../services//editorial"


const EditorialDetailsStyled = styled.div`
display:flex;
flex-direction: column;
background-color: white;
margin-top: 80px;


.banner-pic-div{
    width: 100vw;
    height: 100vh;
}

.banner-pic{
    width: 100vw;
    height: 100vh;
    object-fit: cover;
}

.main-titles{
    width: 100vw;
}

/* PARAMETROS */
.headline{
    margin: 32px;
}
/* HEADLINE SIZE */

.Small{
font-size: 60px;

}

.Medium{
    font-size: 80px;
    
}

.Large{
    font-size: 100px;
    
}

.Extra-Large{
    font-size: 120px;
}

/* HEADLINE TYPEFACE */

.Sans-Serif{
    font-family: 'gt_america_standard_light';
    text-transform: uppercase;
}

.Serif{
    font-family: 'gt_super_textbook_italic';
    text-transform: lowercase;
}

/* HEADLINE WIDTH */

.fifty{
    width: 50%;
}

.seventy-five{
    width: 75%;
}

.hundred{
    width: 100%;
}

/* HEADLINE ALIGMENT*/

.Left{
    text-align: left;
}

.Center{
    display: flex;
    justify-content: center;
    align-content: center;
}

/* SUB-HEADLINE */
.subtitle{
    margin: 32px; 
}
/* SUB HEADLINE SIZE*/

.SH-Small{
font-size: 24px;
}

.SH-Medium {
    font-size: 28px;
}

.SH-Large{
    font-size: 32px;
}

.SH-Extra-Large{
    font-size: 44px;
}

/* BODY IMAGE */

.body-image-1{
    width: 80%;
    height: 100%;
    object-fit: cover;

}

.body-image-2{
    width: 80%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 80px;
}


.bodytext-div-1{
    width: 100vw;
    height: auto;
}

.bodytext{
    margin: 120px 400px;
    text-align: left;
    font-size: 20px;
    font-family: 'gt_super_textbook';
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
    text-decoration: none;
    color: black;
    margin-bottom: 8px;
}

.credits>a>img{
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

                 

                <div className={`main-titles ${editorial.headlineAlignment}`}> 

                    <p  className={`${editorial.headlineSize}  
                                    ${editorial.headlineTypeface} 
                                    ${editorial.headlineWidth} 
                                    
                                    headline
                                    `}
                        >
                        {editorial.headline}
                        </p>

                </div>   

                <div className={`${editorial.subHeadlineAlignment}`}>

                      <p className={`${editorial.subHeadlineSize}  
                                    ${editorial.subHeadlineTypeface} 
                                    ${editorial.subHeadlineWidth} 
                                    subtitle`}
                                    >
                                    {editorial.subHeadline}                 
                     </p>
                 </div>      

                <div className="bodytext-div-1">
                    <p className="bodytext">
                        {editorial.bodyText}
                    </p>
                </div>

                <div className="body-image-1-div">
                    <img src={editorial.bodyImage1} alt="" className="body-image-1"/>
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
                    
                    <p>category: {editorial.articleCategory}</p>
                    <p>writer: {editorial.writer}</p>
                    <p>{editorial.writerBio}</p>
                    <a href={`https://www.instagram.com/${editorial.instagram}`}>
                        <img 
                        src="https://res.cloudinary.com/dieglitter/image/upload/v1601159256/radio-shows/instagram_1_s8fofc.svg" 
                        alt="instagram" 
                        className="instagram"/>
                    </a>
                    <p>Photographs by: {editorial.photographer}</p>  
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
