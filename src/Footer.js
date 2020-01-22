import React from 'react';

function Footer(){
    return(
        <footer className='pv4 ph3 ph5-m ph6-l mid-gray'>
            <small className='f6 db tc'>© 2020 <b className="ttu">Racoon Inc.</b> , All Rights Reserved</small>
            <div className="tc mt3">
                <a href="https://instagram.com" title="Language" className="f6 dib ph2 link mid-gray dim">Instagram</a>
                <a href="https://facebook.com"    title="Terms" className="f6 dib ph2 link mid-gray dim">Facebook</a>
                <a href="https://linkedin.com"  title="Privacy" className="f6 dib ph2 link mid-gray dim">Linkedin</a>
            </div>
        </footer>
    )
}

export default Footer;
