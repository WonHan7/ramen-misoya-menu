import React from 'react'
import './MenuItems.css'

function DeepFried () {
    return (
        <div >
            {/* HEADER */}
            <hr className='dashed' />
            <h1>Deep Fried</h1>
                {/* Deep Fried ITEMS */}
                <div className='grid-menu'>
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>D1. Chicken Karaage</h3>
                        <p>Japanese style deep-fried chicken with miso mayonnaise</p>
                    </div>
                    <div className='grid-price'>$5.25 | $9.95</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>D2. Deep-Fried Gyoza (5pcs)</h3>
                        <p>House-made deep-fried pork dumpling with miso mayonnaise</p>
                    </div>
                    <div className='grid-price'>$6.75</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>D3. Chicken Katsu</h3>
                        <p>Deep-fried boneless chicken leg battered in egg and panko, served with tonkatsu sauce</p>
                    </div>
                    <div className='grid-price'>$6.75</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>D4. Kaki Fry</h3>
                        <p>Deep-fried panko-breaded Sawmill Bay oysters served with tonkatsu sauce</p>
                    </div>
                    <div className='grid-price'>$7.75</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>D5. Ikageso</h3>
                        <p>Deep-fried squid legs served with spicy mayo</p>
                    </div>
                    <div className='grid-price'>$5.75</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>D6. Aji Fry</h3>
                        <p>Deep-fried mackerel served with tonkatsu sauce</p>
                    </div>
                    <div className='grid-price'>$6.50</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>D7. Ebi Fry (5pcs)</h3>
                        <p>Deep-fried shrimps with miso mayonnaise</p>
                    </div>
                    <div className='grid-price'>$9.75</div>
                </div>
        </div>
    );
}

export default DeepFried