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
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Vegetable Gold Kome Miso" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>V1. Vegetable Gold Kome Miso</h3>
                        <p>
                            Egg noodles + Gold Kome miso + kikurage + corn 
                            on konbu (kelp) in shiitake mushroom broth
                        </p>
                    </div>
                    <div className='grid-price'>$14.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Vegetable Silver Shiro Miso" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>V2. Vegetable Silver Shiro Miso</h3>
                        <p>
                            Egg noodles + Silver Shiro miso + fried tofu +
                            kikurage on konbu (kelp) in shiitake mushroom broth
                        </p>
                    </div>
                    <div className='grid-price'>$14.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Vegetable Tan Tan" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>V3. Vegetable Tan Tan</h3>
                        <p>
                            Egg noodles + Silver Shiro miso + Spicy Miso + sesame paste + 
                            kikurage + chili strands on konbu (kelp) in shiitake
                            mushroom broth with chili oil on top
                        </p>
                    </div>
                    <div className='grid-price'>$15.25</div>
                </div>
        </div>
    );
}

export default VegRam