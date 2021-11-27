import React from 'react'
import './MenuItems.css'

function Desserts () {
    return (
        <div>
            {/* HEADER */}
            <hr className='dashed' />
            <h1>Desserts</h1>
                {/* DESSERT ITEMS */}
                <div className='grid-menu'>
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Yuzu Citrus Ice Cream" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>DE1. Yuzu Citrus Ice Cream</h3>
                        <p>
                            Yuzu-flavoured vanilla ice cream topped with miso sauce, yuzu peel and peaches
                        </p>
                    </div>
                    <div className='grid-price'>$4.50</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Mochi Ice Cream (2 pcs)" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>DE2. Mochi Ice Cream (2 pcs)</h3>
                        <p>
                            • Black Sesame <br />
                            • Matcha Green Tea
                        </p>
                    </div>
                    <div className='grid-price'>$4.75</div>
                </div>
        </div>
    );
}

export default Desserts