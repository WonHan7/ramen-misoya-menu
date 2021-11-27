import React from 'react'
import './MenuItems.css'

function Beverages () {
    return (
        <div>
            {/* HEADER */}
            <hr className='dashed' />
            <h1>Beverages</h1>
                {/* BEVERAGE ITEMS */}
                <div className='grid-menu'>
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Ramune (200ml)" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>BE1. Ramune (200ml)</h3>
                        <p>
                            • Original <br />
                            • Orange <br />
                            • Grape <br />
                            • Melon
                        </p>
                    </div>
                    <div className='grid-price'>$3.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Calpico (500ml)" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>BE2. Calpico (500ml)</h3>
                        <p>
                            • Original <br />
                            • White Peach <br />
                            • Lychee
                        </p>
                    </div>
                    <div className='grid-price'>$3.95</div>

                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Canned Pop" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>BE3. Canned Pop (355ml)</h3>
                        <p>
                            • Coke (Original, Diet) <br />
                            • Nestea Iced Tea <br /> 
                            • Ginger Ale <br />   
                            • Sprite <br />
                            • Club Soda                       
                        </p>
                    </div>
                    <div className='grid-price'>$2.75</div>

                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Oi Ocha" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>BE4. Oi Ocha</h3>
                        <p>
                            Unsweeted Green Tea                   
                        </p>
                    </div>
                    <div className='grid-price'>$3.75</div>

                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Hot Green Tea" className='image-dim' /></div>
                    <div className='grid-desc center'>
                        <h3>BE5. Hot Green Tea</h3>
                    </div>
                    <div className='grid-price'>$1.50</div>

                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Dasani" className='image-dim' /></div>
                    <div className='grid-desc center'>
                        <h3>BE6. Dasani</h3>
                    </div>
                    <div className='grid-price'>$2.85</div>

                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="S. Pellegrino" className='image-dim' /></div>
                    <div className='grid-desc center'>
                        <h3>BE7. S. Pellegrino</h3>
                    </div>
                    <div className='grid-price'>$2.95</div>
                </div>
        </div>
    );
}

export default Beverages