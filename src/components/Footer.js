import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

const FooterStyled = styled.footer`
    
    background-color: black;
    height: 88px;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    .rt-logo{
    width: 200px;
    margin-left: 32px;
    }

    .footer1{
        margin: 0 40px 0 0;

    }
    .footer2{
        margin: 0 40px 0 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    a {
    text-decoration: none;
    color: white;
    font-family: 'gt_super_textbook_italic';
    margin-left: 24px;
}

    .contact-icons{
    width: 16px;

}



`

function Footer() {
    return (
        <FooterStyled>
                 <div className="footer1">
                     <Link to="/"><img src="https://res.cloudinary.com/dieglitter/image/upload/v1601151919/radio-shows/rt-logo_white_onfwed.svg" alt="rt-logo" className="rt-logo"/></Link>
                </div>
               <div className="footer2">
                    <Link to="/about">about</Link>
                    <Link>en/es</Link>
                    <Link to="/signup"><img src="https://res.cloudinary.com/dieglitter/image/upload/v1601076268/radio-shows/user_j1gxej.svg" alt="" className="contact-icons"/></Link>
                    <Link ><img src="https://res.cloudinary.com/dieglitter/image/upload/v1601075399/radio-shows/instagram_yekso0.svg" alt="" className="contact-icons"/></Link>
                    <Link > <img src="https://res.cloudinary.com/dieglitter/image/upload/v1601066514/radio-shows/mail_1_1_whckbc.svg" alt=""  className="contact-icons"/></Link>
                </div>
        </FooterStyled>
        
    )
}

export default Footer
