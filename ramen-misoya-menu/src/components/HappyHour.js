import React from 'react'
import './MenuItems.css'

function HappyHour () {
    return (
        <div>
            {/* HEADER */}
            <hr className='dashed' />
            <h1>Happy Hour Ramen (Weekdays Only) - $9.99</h1>
            <p className="header-desc">*All ramens contain green onions, cabbage and beansprouts</p>
                {/* HAPPY HOUR ITEMS */}
                <div className='grid-menu'>
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Tonkotsu Special" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>HH1. Tonkotsu Special (Opening - 5PM)</h3>
                        <p>
                        Pork cha-shu + nikumiso + half a miso egg + onion crisps 
                        + chili oil served with pork broth
                        </p>
                    </div>
                    <div className='grid-price'>$14.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Gold Kome Special w/o Potato" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>HH2. Gold Kome Special (2PM - 5PM)</h3>
                        <p>
                            Gold Kome Special without potatoes
                        </p>
                    </div>
                    <div className='grid-price'>$14.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Silver Shiro Special w/o Tofu" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>HH3. Silver Shiro Special (2PM - 5PM)</h3>
                        <p>
                            Silver Shiro Special without tofu
                        </p>
                    </div>
                    <div className='grid-price'>$15.25</div>
                </div>
        </div>
    );
}

export default HappyHour