
import React, { useRef, useEffect, useState} from 'react'
import styled from "styled-components"

const CanvasStyled = styled.div`

canvas{
    vertical-align: bottom;
    }
`

const Canvas = props => {
    
    const [aimX,setAimX] = useState(0)
    const [aimY,setAimY] = useState(0)
   
    const canvasRef = useRef(null)


    const image = document.createElement("img")
    image.src = "https://res.cloudinary.com/dieglitter/image/upload/v1601151919/radio-shows/rt-logo_white_onfwed.svg"
  
  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2

    canvas.style.width = window.innerWidth + "px"
    canvas.style.height = window.innerHeight + "px"

    const context = canvas.getContext("2d")
    context.scale(2,2)
  }, [])

  window.addEventListener("mousemove", event => {

    setAimX(event.pageX-100)
    setAimY(event.pageY-100)

},[])


  useEffect(()=>{
    const canvas = canvasRef.current  
    const context = canvas.getContext("2d")

    image.onload = function(){
        context.drawImage(image, aimX, aimY, 90, 25)
    }

  },[aimX,aimY])
  
  return (
      <CanvasStyled>
          <canvas ref={canvasRef} {...props}/>
      </CanvasStyled>
  )
}

export default Canvas