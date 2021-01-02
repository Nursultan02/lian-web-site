import './style.css';
import {
    TiSocialFacebook,
    TiSocialGooglePlus,
    TiSocialTwitter,
    TiSocialLinkedin,
    TiSocialDribbble,
    TiSocialPinterest,
    TiSocialInstagram
} from 'react-icons/ti'

export default function Footer() {
    return (
        <div className='footer'>
            <img className='footer-logo' src="/img/logo.png" alt="logo"/>
            <div>
                <div className="contain">
                    <TiSocialFacebook className='icon'/>
                    <TiSocialGooglePlus className='icon'/>
                    <TiSocialTwitter className='icon'/>
                    <TiSocialLinkedin className='icon'/>
                    <TiSocialDribbble className='icon'/>
                    <TiSocialPinterest className='icon'/>
                    <TiSocialInstagram className='icon'/>
                </div>
            </div>
            <p>© 2016 <span>Mulitix Theme</span> by ThemeForces. All Rights Reserved.</p>
        </div>
    );
}

