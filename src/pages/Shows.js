import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import {getShows} from "../services/show"
import {Link} from "react-router-dom"

const ShowsStyled = styled.div`

display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: flex-start;
align-items: flex-start;
color: white;
background-color: black;
padding-top: 80px;
height: 1660px;
width: 100vw;

h1{
    margin: 32px 0 16px 32px  ;
}

hr{
    color: white;
    background-color: white;
    height: .5px;
    width: 100%;
    
}

.all-shows {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.show-card-container{
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
flex-wrap: wrap;
margin: 16px;

}


.show-card{
    width: 400px;
    height: 200px;
    border: 2px solid white;
    padding: 8px;
    display: flex;
    flex-direction: row;
    margin: 16px 16px 16px 0 ;
}

.line {
    background-color: black;
    height:2px;
}

.show-card-image{
   
}

.show-image{
    width:200px;
    height: 200px;
    object-fit: cover;
}

.show-card-info{
    text-align: left;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
}
.info{
    
}

.show-title{
    font-size: 20px;
    line-height: 0.9;
    margin-bottom: 4px;
    text-transform: uppercase;
}

.show-location{
    font-size: 20px;
    margin-bottom: 4px;
}

.show-date{
    font-size: 16px;
    margin-bottom: 4px;
}

.show-guest{
    margin-bottom: 8px;
}

.listen-button{
    background-color: white;
    border: 2px solid white;
    width: 100%;
    height:100%;
    padding: 4px;
}

a {
    text-decoration: none;
    color: black;
    font-size: 12px;
    }

ul {
    list-style: none;
    margin-bottom: 4px;
}

li{
    border: 1px white solid;
    padding: 4px;
    font-size: 12px;
    display: inline;
    margin: 4px 8px 4px  0;
}

.loader{
    font-size: 40px;
    margin-left: 32px;
}



`

function Shows() {

    const [shows,setShows] = useState(null)
 

    async function fetchShows() {
        const {data: {shows}} = await getShows()
        setShows(shows)
    }
    
    useEffect(() => {
        fetchShows()
    }, [])


    return (
        <ShowsStyled>
            <div className="all-shows">
                {shows ? (shows.map(show => (
                    
                    <div className="show-card-container">
                        <div className="show-card">
                            <div className="show-card-image">
                                <img src={show?.image} alt={show?.title} className="show-image"/>
                            </div>
                            <div className="show-card-info">
                                <div className="info">
                                <p className="show-title" >{show?.title}</p>
                                <p className="show-location">{show?.location}</p>
                                <p className="show-date">{show?.date}</p>
                                <p className="show-guest">by {show?.guest?.name}</p>
                                <ul className="show-genre">
                                <li>{show?.genre}</li>
                                </ul>
                                </div>
                            
                                <div className="button">
                                    <button className="listen-button" ><Link to={`/shows/${show?._id}`}>LISTEN</Link></button>  
                                </div>  
                            </div>
                        </div>
                
                    </div>

                ))
                ) : (<p className="loader">Loading...</p>)}     
            </div>
         


        </ShowsStyled>
    )
}

export default Shows
