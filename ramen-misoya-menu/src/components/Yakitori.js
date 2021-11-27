import React from 'react'
import './MenuItems.css'

function Yakitori () {
    return (
        <div>
            {/* HEADER */}
            <hr className='dashed' />
            <h1>Yakitori</h1>
                {/* YAKITORI ITEMS */}
                <div className='grid-menu'>
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Chicken" className='image-dim' /></div>
                    <div className='grid-desc center'>
                        <h3>Y1. Chicken</h3>
                    </div>
                    <div className='grid-price'>$2.30</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Beef" className='image-dim' /></div>
                    <div className='grid-desc center'>
                        <h3>Y2. Beef</h3>
                    </div>
                    <div className='grid-price'>$2.60</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Pork" className='image-dim' /></div>
                    <div className='grid-desc center'>
                        <h3>Y3. Pork</h3>
                    </div>
                    <div className='grid-price'>$2.30</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Unagi" className='image-dim' /></div>
                    <div className='grid-desc center'>
                        <h3>Y4. Unagi</h3>
                    </div>
                    <div className='grid-price'>$4.50</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Zucchini" className='image-dim' /></div>
                    <div className='grid-desc center'>
                        <h3>Y5. Zucchini</h3>
                    </div>
                    <div className='grid-price'>$2.00</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Mushroom" className='image-dim' /></div>
                    <div className='grid-desc center'>
                        <h3>Y6. Mushroom</h3>
                    </div>
                    <div className='grid-price'>$2.00</div>
                </div>
        </div>
    );
}

export default Yakitori