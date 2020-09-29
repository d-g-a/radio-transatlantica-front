import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import { getAllEditorials } from "../services/editorial"
import {Link} from 'react-router-dom' 

const EditorialStyled = styled.div`
display:flex;
flex-direction: row;
background-color: white;
padding-top: 88px; 

.all-editorials{
    display: flex;
    flex-direction: column;
}

.container {
    width: 100vw;
    height: 480px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px black solid;
}

.headline{
    font-size:48px;
    text-transform: uppercase;
    margin-bottom: 8px;
}

.sub-headline{
    font-size:32px;
    text-transform: lowercase;
    font-family: 'gt_super_textbook_italic' ;
}

.banner {
    width: 50vw;
    height:480px;
    object-fit: cover;
}

.info-container{
    width: 50%;
    height:100;
}

.info-container {
    text-align: left;
    padding: 32px 0 32px 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.button-container {
    
}

.button {
    background-color: white;
    width:200px;
    height:80px;

}

.button>a{
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-size: 16px;
}


.loader{
    font-size: 40px;
    margin-left: 32px;
}


` 


function Editorial() {

    const [editorials, setEditorials] = useState(null)

    async function fetchEditorials() {
        const {data: {allEditorials}} = await getAllEditorials()
        setEditorials(allEditorials)
    }

    useEffect(() => {
        fetchEditorials()
    },[])


    return (
        <EditorialStyled>
            
            <div className="all-editorials">
                {editorials ? (editorials.map( editorial => (

                <div className="container">
                    <div className="info-container">
                        <div>
                            <p className="headline">{editorial.headline}</p>
                            <p className="sub-headline">{editorial.subHeadline}</p>
                        </div>
                       
                        <div className="button-container">
                            <button className="button"><Link to={`/editorial/${editorial._id}`}>Read Article</Link></button>
                        </div>
                        
                    </div>
        
                    <div className="image-container">
                        <img  src={editorial.bannerImage} alt="banner" className="banner"/>
                    </div>
                </div>
                    
                ))
                ) : (
               <p className="loader">Loading...</p>
                ) }
             </div>

        </EditorialStyled>
    )
}

export default Editorial
