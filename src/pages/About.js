import React from 'react'
import styled from "styled-components"

const AboutStyled = styled.div`

margin-top: 80px;
background-color: black;
color: white;
text-align: left;
width: 100vw;
height: 100vh;


h1{
    font-family:'gt_super_textbook_italic';
    text-transform: lowercase;
    font-size: 24;
    padding: 80px 120px 0;
}

p {
    font-size: 20px;
    padding: 16px 120px 80px  ;
}

.rt-logo{
    padding: 0 120px 80px  ;
    width: 200px;
}
`

function About() {
    return (
        <AboutStyled>
            <h1>About</h1>
            <br/>
            <p>El proyecto nace a partir de mi entusiasmo por la radio en internet. En el pasado he estado involucrado en proyectos de radio FM y radio en línea. He trabajado con equipos de más de 30 personas y he llevado una estación web por mí mismo. 
            <br/><br/>
            Por otro lado, en los últimos años el formato online se ha vuelto una mina de oro musical. Existen archivos muy extenso que abarcan todos los géneros imaginables provenientes de todos los rincones del mundo. Es un buen punto de partida para descubrir música, programas nicho y nuevos artistas. 
            <br/><br/>
            La idea central fue crear una estación de radio llamada Radio Transatlántica basada entre la Ciudad de México y Barcelona. Así como NTS Radio tiene una cabina en Londres y otra en Los Angeles o como Dublab opera entre Los Angeles y Barcelona, mi intención fue crear una estación de radio por internet que exista entre estas dos ciudades.
            <br/><br/>
            El proyecto busca explorar la relación entre dos cabinas separadas por el océano atlántico pero unidas por el mismo servidor y pensadas como un archivo colectivo. </p>
            <img src="https://res.cloudinary.com/dieglitter/image/upload/v1601151919/radio-shows/rt-logo_white_onfwed.svg" alt="rt-logo" className="rt-logo"/>
            
        </AboutStyled>
    )
}

export default About
