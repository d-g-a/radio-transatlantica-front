  import React, {useState,  useEffect, useContext} from 'react'
  import { MyContext } from "../context"
  import styled from "styled-components"
  import {getShow} from "../services/show"
  import ReactPlayer from "react-player"
  import {Link} from "react-router-dom"
  import {addShowLoved, deleteShowLoved} from "../services/index"
  import { useTranslation } from "react-i18next"
 

  const ShowDetailsStyled = styled.div`

    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;  
    margin-top: 80px;
    color: black;
    height: 100vh;


  .info-image-player{
      display: flex;
      flex-direction: row;

  }

  p{
      color: black;
  }


.full-container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100vh;
    width: 50vw;

}

.container-info{
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50vw;
} 

.image-container{
    width: 50vw;
    height: 100vh;
    
}


.show-title{
font-size: 72px;
text-align: left;
text-transform: uppercase;
padding: 24px 0 0 24px;
margin: 0;
line-height: 1;
}

.show-guest{
   font-size: 40px;
   text-decoration: none;
   color: black;
   padding: 0 0 16px 24px;
   line-height: 1;
   text-transform: uppercase;
}

.by{
    text-transform: none;
}

a:hover{
    color:#FF5C00;
}

.show-location{
    text-transform: uppercase;
    color: #FF5C00;
    padding: 0 0 16px 24px;
    font-size: 24px;
}

.show-date{
    font-size: 24px;
    margin-left: 40px;

}

.show-genre{
    margin-top: 16px;   
    margin-left: 32px;
    border: 2px solid #FF5C00;
    padding: 4px;
    color: white;
    background-color: black;

}

.show-image{
    width: 100%;
      height: 100%;
      object-fit: cover;

}

  .ReactPlayer {
      display: none;
  }

  .play {
      width: 40px;
      margin-top:16px;
      margin-left: 32px;
  }

  .stop{
    width: 40px;
    margin-top:16px;
    margin-left: 32px;
  }

  .loader{
    font-size: 40px;
    margin-left: 32px;
}

.love-button{
    margin-top:16px;
    margin-left:32px;
}

.login-love{
    margin-top: 16px;
    margin-left:32px;
    font-size: 14px;
    text-transform: uppercase;
}

.button{
    background-color: white;
    width: 240px;
    padding:8px;
}

.unlove {
    background-color: red;
    width:  240px;
    border: none;
    color: white;
    padding:8px;
}

.play-love{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}


  `
  
  function ShowDetails({
    match: {
      params: {showId}
    }
  }) {
    const [show, setShow] = useState(null)
    const [love,setLove] = useState(false)
    const [play,setPlay] = useState(false)

    const { t } = useTranslation()

    const { user } = useContext(MyContext)

    async function submitButton() {
        await addShowLoved({
            showsLoved: showId
        })
        console.log({
            showsLoved: showId
        })
      }
      
      function loveButton(){
        setLove(true)
        submitButton()
    }

    async function submitDeleteButton() {
        await deleteShowLoved({
            showsLoved: showId
        })
        console.log({
            showsLoved: showId
        })   
      }
      
    function unloveButton(){
        setLove(false)
        submitDeleteButton()
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
                <div className="info-image-player">
                    <div className="full-container">   
                        <div className="container-info">
                            <p className="show-title">{show?.title}</p>
                            <p className="show-guest by">{t("by")}<Link className="show-guest" to={`/guests/${show.guest._id}`}>{show?.guest.name}</Link></p>
                            <p className="show-location">{t("stream")} {show?.location}</p>
                            <p className="show-date">{show?.date}</p>
                            <p className="show-genre">{show?.genre}</p>
                        </div>

                    <div className="play-love">
                  
                            
                            {user ? 
                            ( <div className="love-button">
                                {!love ? (  
                                    <button
                                    className="button"
                                    name="showsLoved" 
                                    id="showsLoved"
                                    // value={showId} 
                                    onClick={loveButton}
                                    // onSubmit={submitForm} 
                                    // onChange={e => setShowsLoved(e.target.value)}
                                    >
                                        LOVE
                                    </button>) : (
                                        <button
                                        className="unlove"
                                        onClick={unloveButton}
                                        // value={showId} 
                                        id="showsLoved"
                                        name="showsLoved" 
                                        >
                                            LOVED
                                        </button>
                                    )} 
                            </div>) : (<p className="login-love">{t("login-love")}</p>)}   

                            { !play ?
                                <img onClick={playButton} src="https://res.cloudinary.com/dieglitter/image/upload/v1601068141/radio-shows/PLAY-BLACK_apz6vv.svg" alt="Play" className="play"/>   
                                :  <img onClick={playButton} src="https://res.cloudinary.com/dieglitter/image/upload/v1601068141/radio-shows/STOP_ORANGE_iy4dic.svg" alt="Stop" className="stop"/> } 
                         
                    </div>


                </div>  
               
              
                <div className="image-container">
                    <img className="show-image" src={show.image} alt=""/>
                </div>
                {/* Hidden Player */}
                <div>
                        { play ? 
                        <ReactPlayer
                        className="ReactPlayer"
                        volume={0.5}
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
  