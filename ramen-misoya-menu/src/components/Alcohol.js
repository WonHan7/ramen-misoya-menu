import React from 'react'
import './MenuItems.css'

function Alcohol () {
    return (
        <div>
            {/* HEADER */}
            <hr className='dashed' />
            <h1>Alcohol</h1>
                {/* ALCOHOL ITEMS */}
                <div className='grid-menu'>
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Asahi" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>A1. Asahi</h3>
                        <p>
                            • Bottle (355ml) <br />
                            • Half a Liter (500ml)
                        </p>
                    </div>
                    <div className='grid-price'>
                        $6 (355ml) <br />
                        $8 (500ml)
                    </div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Sapporo" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>A2. Sapporo</h3>
                        <p>
                            • Bottle (355ml) <br />
                            • Half a Liter (500ml)
                        </p>
                    </div>
                    <div className='grid-price'>
                        $6 (355ml) <br />
                        $8 (500ml)
                    </div>

                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Masumi Sake" className='image-dim' /></div>
                    <div className='grid-desc center'>
                        <h3>A3. Masumi Sake (180ml)</h3>
                    </div>
                    <div className='grid-price'>$10</div>

                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Aladdin Nigori" className='image-dim' /></div>
                    <div className='grid-desc center'>
                        <h3>A4. Aladdin Nigori (300ml)</h3>
                    </div>
                    <div className='grid-price'>$25</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="House Sake" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>A5. House Sake (Hot | Cold)</h3>
                        <p>
                            • 3oz <br />
                            • 6oz
                        </p>
                    </div>
                    <div className='grid-price'>
                        $5 (3oz) <br />
                        $9.50 (6oz)
                    </div>

                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Premium Sake" className='image-dim' /></div>
                    <div className='grid-desc center'>
                        <h3>A6. Premium Sake (300ml)</h3>
                    </div>
                    <div className='grid-price'>$35</div>

                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Soju" className='image-dim' /></div>
                    <div className='grid-desc center'>
                        <h3>A7. Soju (Flavored)</h3>
                        <p>
                            Ask server for available flavors
                        </p>
                    </div>
                    <div className='grid-price'>$17</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Bomb Shots" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>A8. Bomb Shots</h3>
                        <p>
                            Minimum of 2 orders required <br />
                            • Sake Bomb <br />
                            • Soju Bomb
                        </p>
                    </div>
                    <div className='grid-price'>$8</div>
                </div>
        </div>
    );
}

export default Alcohol