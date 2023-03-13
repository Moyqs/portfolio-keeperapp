import React from 'react';

function Footer(){
    const d = new Date();
    let year = d.getFullYear();

    return (
        <div className="footer-div">
            <h1>Copyright © {year}</h1>
        </div>
    )
}

export default Footer;