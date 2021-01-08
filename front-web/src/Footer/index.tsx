import React from 'react';
import './styles.css';
import {ReactComponent as Insta} from './instagram.svg'
import {ReactComponent as Tube} from './youtube.svg'
import {ReactComponent as Link} from './linkedin.svg'

function Footer(){
    return (
        <footer className="main-footer">
            ®VDMsoft | 2021
            <div className="footer-icons">
                <a href="https://www.instagram.com/_raone_castro/?hl=pt-br" target="_new"> 
                    <Insta />
                </a>
                <a href="https://www.linkedin.com/in/raone-castro-38b561142/" target="_new">
                    <Link />
                </a>
                <a href="https://www.facebook.com/RaoneCastroSilva/" target="_new">
                    <Tube />
                </a>
            </div>
        </footer>
    )
}

export default Footer;  