import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import {getOneGuest} from "../services/guest"
import {Link} from "react-router-dom"

const GuestPageStyled = styled.div`

margin-top: 80px;
background-color: black;
height: 1080px;
display: flex;

justify-content: center;
align-items: flex-start;


.main-container {
    margin: 40px;
    padding: 24px;
    border: 2px solid black;
    background-color: white;

}

.info-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   
}

.text-container{
    width: 50%inherit;

}

.guest-name{
    font-size: 80px;
    text-transform: uppercase;
    text-align: left;
}

.guest-bio{
    text-align: left;
    font-size: 24px
}

.image-container{
    width: 50%
}

.guest-image{
    width: 300px;
    height: 300px;
    object-fit: cover;
}

.shows-container{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
}

/* LAST SHOWS */

.last-shows{
    text-align: left;
    font-size: 32px;
    font-family: 'gt_super_textbook_italic';
    text-transform: lowercase;
    margin: 8px 0;
}

.show-container{
    border-top: 1px black solid;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 400px;
    padding: 4px;

}

.show-title{
    font-size: 32px;
    text-align: left;
}

.show-title>a{
    font-size: 24px;
    text-decoration: none;
    color: black;
    text-transform: uppercase;
}

.show-date{
    text-align: left;
    font-size: 16px;
}
.show-genre{
    text-align: left;
    font-size: 12px;
    border: 1px solid black;
    width: fit-content;
    padding: 4px;
}

.show-title>a:hover{
    color: #FF5C00;
}

.show-image{
    width: 100px;
    height: 100px;
    object-fit: cover;
}

.title-date{
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

`

function GuestPage({
    match: {
      params: {guestId}
    }
  }) {

    const [guest,setGuest] = useState(null)
    
    useEffect(()=>{
        async function fetchGuest() {
            const {data : { oneGuest }} = await getOneGuest(guestId)
            setGuest(oneGuest)
            console.log(oneGuest)
        }
        fetchGuest()
    }, [guestId])
    
    return (
        <GuestPageStyled>
            { guest ? (
                <div className="main-container">
                    <div className="info-container">
                        <div className="text-container">
                            <p className="guest-name">{guest.name}</p>
                            <p className="guest-bio">{guest.bio}</p>
                        </div>

                        <div className="image-container">
                            <img className="guest-image"src={guest.image} alt=""/>
                        </div>

                    </div>
                    

                    <div className="shows-container">
                        <p className="last-shows">Last Shows</p>
                        {guest.shows.map(show => (
                            <div className="show-container">
                                <div className="title-date">
                                    <div >
                                        <p className="show-title" key={show._id}><Link to={`/shows/${show._id}`}>{show.title}</Link></p>
                                        <p className="show-date">{show.date}</p>
                                    </div>
                                    
                                    <p className="show-genre">{show.genre}</p>
                                </div>
                                
                                <img src={show.image} className="show-image"/>
                            </div>
                        ))}
                    </div>
                
    
                </div>
            ) : (
                <p>Loading...</p>
            )}      
        </GuestPageStyled>
    )
}

export default GuestPage
