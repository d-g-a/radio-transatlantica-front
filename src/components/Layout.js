import React from 'react'
import Nav from "./Nav"
import RadioPlayer from "./RadioPlayer"
import styled from "styled-components"

const LayoutStyles = styled.div`

Nav{
    position:fixed;
    width: 100vw;
    top:0;

}

`

function Layout(props) {

    return (
        <LayoutStyles>
             <Nav/>
             <p>{props.children}</p>
        </LayoutStyles>
    )
}

export default Layout
