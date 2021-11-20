import React from 'react'
import './MenuItems.css'

function VegRam () {
    return (
        <div>
            {/* HEADER */}
            <hr className='dashed' />
            <h1>Vegetable Ramen</h1>
                {/* VEG RAMEN ITEMS */}
                <div className='grid-menu'>
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Green Salad" /></div>
                    <div className='grid-desc'>
                        <h3>V1. Vegetable Gold Kome Miso</h3>
                        <p>
                            Description?
                            <br />
                            <br />
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className='grid-price'>$14.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Green Salad" /></div>
                    <div className='grid-desc'>
                        <h3>V2. Vegetable Silver Shiro Miso</h3>
                        <p>
                            Description?
                            <br />
                            <br />
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className='grid-price'>$14.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Green Salad" /></div>
                    <div className='grid-desc'>
                        <h3>V3. Vegetable Tan Tan</h3>
                        <p>
                            Description?
                            <br />
                            <br />
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className='grid-price'>$15.25</div>
                </div>
        </div>
    );
}

export default VegRam