import React,{useState , useEffect} from 'react'
import styled from "styled-components"
import {getAllGuests} from '../services/guest'
import {Link} from "react-router-dom"



const ExploreStyled = styled.div`

margin-top: 88px;
width: 100vw;

p{
    font-size: 80px;
    text-transform: lowercase;
    font-family: 'gt_super_textbook_italic';
    text-align: left;
    padding-left: 48px;
    color: gray;
}

a {
    text-decoration: none;
    color: black;
    font-size:120px;
    text-transform: uppercase;
}
a:hover{
    color: #FF5C00;
}

.guest-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

}

ul {
    list-style: none;
    text-align: left;
}

li{
    margin-bottom: 8px;
}

.guest-list{
    padding-left: 40px;
}







`

function Explore() {
    const [guests,setGuests] = useState(null)
    const [isShown, setIsShown] = useState(false);
 

    async function fetchGuests(){
        const {data: {allGuests}} = await getAllGuests()
        setGuests(allGuests)
        console.log(allGuests)
    }

 
    useEffect(()=>{
        fetchGuests()
    }, [])



    return (
        <ExploreStyled>
              <p>Guests</p>
                {guests ? (guests.map(guest => (
                    <div className="guest-container">
                    
                         <ul className="guest-list">
                            <li key={guest._id}><Link 
                            to={`/guests/${guest._id}`}
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}
                            >
                            {guest.name}
                            </Link></li>
                        </ul>

                        <div className="image-container">

                        {/* {isShown && (
                            <div>
                              <img key={guest._id} src={guest.image} alt="" className="guest-image"/>
                            </div>
                        )} */}

                        </div>

                    </div>
                    
                ))) : (<p>Loading</p>)} 
                
        </ExploreStyled>
    )
}

export default Explore
