import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import useInput from '../hooks/useInput'
import {useHistory} from 'react-router-dom'
import {getAllGuests} from '../services/guest'
import { deleteGuest } from '../services/guest'

const DeleteGuestStyled = styled.form`
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

function DeleteGuest() {
    const history = useHistory()

    const guestInput = useInput("")

    const [guests,setGuests] = useState(null)


    async function submitForm(e) {
        e.preventDefault()
        await deleteGuest(
            guestInput.value
        )
        console.log({
            guest: guestInput.value
        } )
        history.push("/explore")
      }

    async function fetchGuests(){
        const {data: {allGuests}} = await getAllGuests()
        setGuests(allGuests)
    }

    useEffect(()=>{
        fetchGuests()
    }, [])

    return (
        <DeleteGuestStyled onSubmit={submitForm}>
           
          <h1>Delete Guests</h1>
            <br/>
                <label htmlFor="guest" className="guest">Guest's Name</label>
                <br/>
                    <select name="guest" id="guest" {...guestInput}>
                    {guests ? (guests.map(guest => (
                        <option value={guest._id} >{guest.name}</option>
                    ))) : (<option>Loading</option>)}
                    </select>
                    <br/>
                    <button type='SUBMIT' className="send" >DELETE</button>
            
            
        </DeleteGuestStyled>
    )
}

export default DeleteGuest
