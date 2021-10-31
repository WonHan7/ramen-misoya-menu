import React from 'react'
import './MenuItems.css'

function HouseSpec () {
    return (
        <div>
            {/* HEADER */}
            <hr className='dashed' />
            <h1>House Special Ramen</h1>
                {/* Deep Fried ITEMS */}
                <div className='grid-menu'>
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>H1. Goma Tan</h3>
                        <p>Description?</p>
                    </div>
                    <div className='grid-price'>$15.25</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>H2. Miso Tan Tan Basic</h3>
                    </div>
                    <div className='grid-price'>$14.25</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>H2. Miso Tan Tan Deluxe</h3>
                        <p>Cha-shu (3pcs), Egg (1pc), Nori (4pcs)</p>
                    </div>
                    <div className='grid-price'>$19.95</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>H2. Miso Tonkotsu Basic</h3>
                    </div>
                    <div className='grid-price'>$14.25</div>

                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>H3. Miso Tonkotsu Spicy</h3>
                    </div>
                    <div className='grid-price'>$15.75</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>H4. Miso Curry</h3>
                    </div>
                    <div className='grid-price'>$16.75</div>

                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>H5. Tonkotsu Black Basic</h3>
                    </div>
                    <div className='grid-price'>$13.75</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>H5. Tonkotsu Black</h3>
                        <p>Pork Cha-Shu (3pcs), Nori, Egg (1pc), Black Garlic Oil Pork Broth</p>
                    </div>
                    <div className='grid-price'>$19.90</div>
                </div>
        </div>
    );
}

export default HouseSpec