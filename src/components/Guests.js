import React, {useState,useEffect} from 'react'
import {getAllGuests} from '../services/guest'
import styled from 'styled-components'

const GuestStyled = styled.div`

ul {
    list-style: none;
}

li {
    text-align: left;
}


`

function Guests() {

    const [guests,setGuests] = useState(null)

    async function fetchGuests(){
        const {data: {allGuests}} = await getAllGuests()
        setGuests(allGuests)
    }

    useEffect(()=>{
        fetchGuests()
    }, [])

    return (
        <GuestStyled >

            {guests ? (guests.map(guest => (
                <ul>
                    <li>{guest.name}</li>
                </ul>
            ))) : (<p>Loading</p>)}
            
        </GuestStyled >
    )
}

export default Guests
