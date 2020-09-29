import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import {getOneGuest} from "../services/guest"
import {Link} from "react-router-dom"

const GuestPageStyled = styled.div`

margin-top: 80px;
text-align: left;

img{
    width: 200px;
}

.guest-name{
    font-size: 80px;
    text-transform: uppercase;
}

.guest-bio{
   font-size: 40px;

    
}

a{
    color: #FF5C00;
    font-size: 24px;
}



li{
    text-align: left;
}

.guest-image{
    
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
                <div>
                    <p className="guest-name">{guest.name}</p>
                    <p className="guest-bio">{guest.bio}</p>
                    <img className="guest-image"src={guest.image} alt=""/>
                    <p>Last Shows:</p>
                    {guest.shows.map(show => (
                        <ol>
                            <li key={show._id}><Link to={`/shows/${show._id}`}>{show.title}</Link></li>
                        </ol>
                    ))}

                   

                
                    
                </div>
            ) : (
                <p>Loading</p>
            )}


            
        </GuestPageStyled>
    )
}

export default GuestPage
