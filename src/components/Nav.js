import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import RadioPlayer from './RadioPlayer'


const NavBar = styled.nav`
background-color: black ;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;


.NavBarTop{
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 56px;
font-family: 'gt_super_textbook_italic';
font-size: 16px;
width: 100vw;

}

.Nav1{
margin: 0 0 0 24px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

}

.Nav1>a>.rt-logo{
    padding: 0 0 0 0;
}

.Nav1>a{
    padding: 0 16px;
}

a {
    text-decoration: none;
    color: white;
    padding: 0 8px 8px 0 ;
}

.Nav2 {
margin: 0 24px 0 0;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
}

.Nav2>a {
    padding: 0 12px;
}


.rt-logo{
    width: 120px;
    height: auto;
}

.contact-icons{
    width: 12px;
}


`

function Nav() {
    return (
        <NavBar>
            <div className="NavBarTop">
                <div className="Nav1">
                    <Link to="/"><img src="https://res.cloudinary.com/dieglitter/image/upload/v1601151919/radio-shows/rt-logo_white_onfwed.svg" alt="logo-rt" className="rt-logo"/></Link> 
                    <Link to="/explore">explore</Link>
                    <Link to="/shows">archive</Link>
                    <Link to="/editorial">editorial</Link>
                    {/* <Link to="/support-rt">support</Link> */}
                </div>
                <div className="Nav2">
                <Link to="/about">about</Link>
                    <Link>en/es</Link>
                    <Link to="/signup"><img src="https://res.cloudinary.com/dieglitter/image/upload/v1601076268/radio-shows/user_j1gxej.svg" alt="" className="contact-icons"/></Link>
                    <Link ><img src="https://res.cloudinary.com/dieglitter/image/upload/v1601075399/radio-shows/instagram_yekso0.svg" alt="" className="contact-icons"/></Link>
                    <Link > <img src="https://res.cloudinary.com/dieglitter/image/upload/v1601066514/radio-shows/mail_1_1_whckbc.svg" alt=""  className="contact-icons"/></Link>
                </div>

            </div>

            <RadioPlayer/>

        </NavBar>
    )
}

export default Nav
