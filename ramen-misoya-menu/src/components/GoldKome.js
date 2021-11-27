import React from 'react'
import './MenuItems.css'

function GoldKome () {
    return (
        <div>
            {/* HEADER */}
            <hr className='dashed' />
            <h1>Gold Kome Ramen</h1>
            <p className="header-desc">
                Gold Kome Basic: Egg noodles, gold kome miso, 2 pieces of fried potatoes, cabbage, beansprouts, green
                onions, nikumiso (minced pork), kikurage on chicken and pork broth
            </p>
                {/* GOLD KOME ITEMS */}
                <div className='grid-menu'>
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Gold Kome Basic" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>G1. Gold Kome Basic</h3>
                        <p>
                            Gold Kome Basic
                        </p>
                    </div>
                    <div className='grid-price'>$12.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Gold Kome Spicy" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>G2. Gold Kome Spicy</h3>
                        <p>
                            Gold Kome Basic + chili oil + spicy miso
                        </p>
                    </div>
                    <div className='grid-price'>$14.25</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Gold Kome Special" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>G3. Gold Kome Special</h3>
                        <p>
                            Gold Kome Basic + 1 slice of marinated pork
                            belly cha-shu + half a miso egg
                        </p>
                    </div>
                    <div className='grid-price'>$15.25</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Gold Kome Cha-Shu" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>G4. Gold Kome Cha-Shu</h3>
                        <p>                            
                            Gold Kome Basic + 3 slices of marinated
                            pork belly cha-shu
                        </p>
                    </div>
                    <div className='grid-price'>$17.25</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Gold Kome Yasai" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>G5. Gold Kome Yasai</h3>
                        <p>
                            Gold Kome Basic + stir-fried vegetables
                        </p>
                    </div>
                    <div className='grid-price'>$13.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Gold Kome Ebi-Fried Shrimp" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>G6. Gold Kome Ebi-Fried Shrimp</h3>
                        <p>
                            Gold Kome Basic + 1 ebi-fried shrimp
                        </p>
                    </div>
                    <div className='grid-price'>$14.75</div>
                </div>
        </div>
    );
}

export default GoldKome