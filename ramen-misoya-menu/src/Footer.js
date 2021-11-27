import React from 'react'
import './Footer.css'

function Footer () {
    return (
        <div className='footer'>
            {/* Hours */}
            <div className='hours'>
                <h1 className='head'>HOURS</h1>
                <p>
                    SUN-THU<br />
                    11:30 – 21:00<br />
                    FRI-SAT<br />
                    11:30 – 22:00<br />
                </p>
            </div>
            {/* Location */}
            <div className='location'>
                <h1 className='head'>LOCATION</h1>
                <p>
                    10146 104 St NW,<br />
                    Edmonton, AB
                    T5J 1A7
                </p>
            </div>
            {/* Contact */}
            <div className='contact'>
                <h1 className='head'>CONTACT</h1>
                <p>
                    (780) 425-2990<br />
                    EMAIL
                </p>
            </div>
            {/* Social */}
            <div className='social'>
                <h1 className='head'>SOCIAL</h1>
                <p>Social Icons</p>
            </div>
        </div>
    );
}

export default Footer