  import React, {useState,  useEffect} from 'react'
  import styled from "styled-components"
  import {getShow} from "../services/show"
  import ReactPlayer from "react-player"
  import {Link} from "react-router-dom"
  import {addShowLoved, deleteShowLoved} from "../services/index"
 

  const ShowDetailsStyled = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;  
  margin-top: 80px;
  color: black;
  height: 100vh;

  p{
      color: black;
  }


.full-container{
    display: flex;
    flex-direction: row;

}

.container-info{
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50vw;
    padding: 32px 0 0 32px;;
} 

.image-container{
    width: 50vw;
    
}

img{
      width: 100%;
      height: auto;
      object-fit: cover;
      }



.show-title{
font-size: 80px;
}

a{
   font-size: 48px;
   text-decoration: none;
   color: black;
}

a:hover{
    color:#FF5C00;
}

.show-location{

}

.show-date{

}

.show-genre{

}

.show-image{

}


  .ReactPlayer {
      display: none;
  }

  .play {
      width: 24px;
  }

  .stop{
    width: 24px;
  }

  .loader{
    font-size: 40px;
    margin-left: 32px;
}

.button{
    background-color: white;
    width: 160px;
    padding:8px;
}

.unlove {
    background-color: red;
    width: 160px;
    border: none;
    color: white;
    padding:8px;
}


  `
  
  function ShowDetails({
    match: {
      params: {showId}
    }
  }) {
    const [show, setShow] = useState(null)
    const [love,setLove] = useState(false)
    // const[showsLoved,setShowsLoved] = useState("")
    const [play,setPlay] = useState(false)


    async function submitForm() {
        await addShowLoved({
            showsLoved: showId
        })
        console.log({
            showsLoved: showId
        })
      }
      
      function loveButton(){
        setLove(!love)
        submitForm()
    }

    async function submitDeleteForm(e) {
        await deleteShowLoved({
            showsLoved: showId
        })
        console.log({
            showsLoved: showId
        })   
      }
      
    function unloveButton(e){
        setLove(!love)
        submitDeleteForm(e)
    }

    function playButton(){
        setPlay(!play)
    }

    useEffect(()=>{
        async function fetchShow() {
            const {data : { show }} = await getShow(showId)
            setShow(show)
        }
        fetchShow()
    }, [showId])


    
      return (
          <ShowDetailsStyled>

              { show  ? (
               <div className="full-container">   
              <div className="container-info">
                  <p className="show-title">{show.title}</p>
                  <p><Link to={`/guests/${show.guest._id}`}>by {show.guest.name}</Link></p>
                  <p className="show-location">streamed from {show.location}</p>
                  <p className="show-date">{show.date}</p>
                  <p className="show-genre">{show.genre}</p>
                  <p>{show._id}</p>
               
              

              { !play ?
                    <img onClick={playButton} src="https://res.cloudinary.com/dieglitter/image/upload/v1601068141/radio-shows/PLAY-BLACK_apz6vv.svg" alt="Play" className="play"/>   
                    :  <img onClick={playButton} src="https://res.cloudinary.com/dieglitter/image/upload/v1601068141/radio-shows/STOP_ORANGE_iy4dic.svg" alt="Stop" className="stop"/> } 

                    {!love ? (  
                    <button
                    className="button"
                    name="showsLoved" 
                    id="showsLoved"
                    value={showId} 
                    onClick={loveButton}
                    // onSubmit={submitForm} 
                    // onChange={e => setShowsLoved(e.target.value)}
                    >
                        LOVE
                    </button>) : (
                        <button
                        className="unlove"
                        onClick={unloveButton}
                        >
                            LOVED
                        </button>
                    )} 
                  
                         
              </div>
              <div className="image-container">
                <img className="show-image" src={show.image} alt=""/>
              </div>
              <div>
                    { play ? 
                    <ReactPlayer
                    className="ReactPlayer"
                    url={show.soundFile}
                    playing={true}
                    /> :  
                    <ReactPlayer
                    className="ReactPlayer"
                    url={show.soundFile}
                    playing={false}
                    />}
                
              </div>
              </div >
              ) : (
              <p className="loader">Loading...</p>
              ) }

              
              
          </ShowDetailsStyled>
      )
  }
  
  export default ShowDetails
  