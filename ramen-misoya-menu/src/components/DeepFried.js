import React from 'react'
import './MenuItems.css'

function DeepFried () {
    return (
        <div >            
            {/* HEADER */}
            <hr className='dashed' />
            <h1>Deep Fried</h1>
            {/* DEEP FRIED ITEMS */}
                <div className='grid-menu'>
                    {/* IMAGE */}
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Chicken Karaage" className='image-dim' /></div>
                    <div className='grid-desc'>
                        {/* ITEM NAME */}
                        <h3>D1. Chicken Karaage</h3>
                        {/* DESCRIPTION */}
                        <p>
                            Japanese style deep-fried chicken
                            with miso mayonnaise
                        </p>
                    </div>
                    {/* PRICE */}
                    <div className='grid-price'>
                        $5.25 (3pcs) <br />
                        $9.95 (6pcs)
                    </div>
                    
                    {/* IMAGE */}
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Deep-Fried Gyoza" className='image-dim' /></div>
                    <div className='grid-desc'>
                        {/* ITEM NAME */}
                        <h3>D2. Deep-Fried Gyoza (5pcs)</h3>
                        {/* DESCRIPTION */}
                        <p>
                            House-made deep-fried pork dumplings with miso 
                            mayonnaise
                        </p>
                    </div>
                    {/* PRICE */}
                    <div className='grid-price'>$6.75</div>
                    
                    {/* IMAGE */}
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Chicken Katsu" className='image-dim' /></div>
                    <div className='grid-desc'>
                        {/* ITEM NAME */}
                        <h3>D3. Chicken Katsu</h3>
                        <p>
                        {/* DESCRIPTION */}
                            Deep-fried boneless chicken leg
                            battered in egg and panko, served
                            with tonkatsu sauce
                        </p>
                    </div>
                    {/* PRICE */}
                    <div className='grid-price'>$6.75</div>
                    
                    {/* IMAGE */}
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Kaki Fry" className='image-dim' /></div>
                    <div className='grid-desc'>
                        {/* ITEM NAME */}
                        <h3>D4. Kaki Fry</h3>
                        {/* DESCRIPTION */}
                        <p>
                            Deep-fried panko-breaded Sawmill 
                            Bay oysters served with tonkatsu 
                            sauce
                        </p>
                    </div>
                    {/* PRICE */}
                    <div className='grid-price'>$7.75</div>
                    
                    {/* IMAGE */}
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Ikageso" className='image-dim' /></div>
                    <div className='grid-desc'>
                        {/* ITEM NAME */}
                        <h3>D5. Ikageso</h3>
                        {/* DESCRIPTION */}
                        <p>
                            Deep-fried squid legs served with 
                            spicy mayo
                        </p>
                    </div>
                    {/* PRICE */}
                    <div className='grid-price'>$5.75</div>
                    
                    {/* IMAGE */}
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Aji Fry" className='image-dim' /></div>
                    <div className='grid-desc'>
                        {/* ITEM NAME */}
                        <h3>D6. Aji Fry</h3>
                        {/* DESCRIPTION */}
                        <p>
                            Deep-fried mackerel served with 
                            tonkatsu sauce
                        </p>
                    </div>
                    {/* PRICE */}
                    <div className='grid-price'>$6.50</div>
                    
                    {/* IMAGE */}
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Ebi Fry" className='image-dim' /></div>
                    <div className='grid-desc'>
                        {/* ITEM NAME */}
                        <h3>D7. Ebi Fry (5pcs)</h3>
                        {/* DESCRIPTION */}
                        <p>
                            Deep-fried shrimps with miso 
                            mayonnaise
                        </p>
                    </div>
                    {/* PRICE */}
                    <div className='grid-price'>$9.75</div>
                </div>                
        </div>
    );
}

export default DeepFried