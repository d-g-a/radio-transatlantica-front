import React, {useState} from 'react'
import ReactPlayer from 'react-player/lazy'
import styled from "styled-components"

const RadioPlayerStyled = styled.div`

height: 16px;
display: flex;
flex-direction: column;

.player-container{
 width: 100vw;
height: 32px;
background-color: white;
color: black;
display: flex;
flex-direction: row;
border-bottom: 2px solid black;
}

.player-one{
 width: 50%;
 border-right: 2px black solid;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
}

.player-two {
 width: 50%;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
}

p {
    font-size: 16px;
    padding: 8px;
    margin: 0;
}

video{
    display: none;
    padding: 0;
    margin: 0;
}
.ReactPlayers{
    visibility: hidden;
}

.play {
    width: 12px;
}

.stop{
    width: 12px;

}

` 

function RadioPlayer() {

    const [playMX, setPlayMX] = useState(false)
    const [playBCN, setPlayBCN] = useState(false)

    function playButtonMX(){
        setPlayMX(!playMX)
        setPlayBCN(false)
    }

    function playButtonBCN(){
        setPlayBCN(!playBCN)
        setPlayMX(false)
    }


    return (
        <RadioPlayerStyled>
            <div className="player-container">
                <div className="player-one">  

                    { !playMX ?
                    <img onClick={playButtonMX} src="https://res.cloudinary.com/dieglitter/image/upload/v1601068141/radio-shows/PLAY-BLACK_apz6vv.svg" alt="Play" className="play"/>   
                    :  <img onClick={playButtonMX} src="https://res.cloudinary.com/dieglitter/image/upload/v1601068141/radio-shows/STOP_ORANGE_iy4dic.svg" alt="Stop" className="stop"/> }  

                    <p>LIVE FROM MEXICO CITY</p>

                </div>

                <div className="player-two">

                    { !playBCN ?
                    <img onClick={playButtonBCN} src="https://res.cloudinary.com/dieglitter/image/upload/v1601068141/radio-shows/PLAY-BLACK_apz6vv.svg" alt="Play" className="play"/>   
                    : <img onClick={playButtonBCN} src="https://res.cloudinary.com/dieglitter/image/upload/v1601068141/radio-shows/STOP_ORANGE_iy4dic.svg" alt="Stop" className="stop"/> }  

                    <p>LIVE FROM BARCELONA</p>

                </div>

            </div>

            

            <div className="ReactPlayers">

                { playMX ? <ReactPlayer
                url="https://airelibremusicip.nyx.mx:8443/stream"
                playing={true}
                /> :  <ReactPlayer
                url="https://airelibremusicip.nyx.mx:8443/stream"
                playing={false}
                />}

                { playBCN ? <ReactPlayer
                url="https://www.youtube.com/watch?v=5qap5aO4i9A"
                playing={true}
                /> :  <ReactPlayer
                url="https://www.youtube.com/watch?v=5qap5aO4i9A"
                playing={false}
                />}

            </div>


        </RadioPlayerStyled>
    )
}

export default RadioPlayer
