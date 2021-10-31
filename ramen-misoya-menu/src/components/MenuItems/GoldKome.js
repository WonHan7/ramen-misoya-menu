import React from 'react'
import './MenuItems.css'

function GoldKome () {
    return (
        <div>
            {/* HEADER */}
            <hr className='dashed' />
            <h1>Gold Kome Ramen</h1>
                {/* Deep Fried ITEMS */}
                <div className='grid-menu'>
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>G1. Gold Kome Basic</h3>
                        <p>Description?</p>
                    </div>
                    <div className='grid-price'>$12.75</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>G2. Gold Kome Spicy</h3>
                    </div>
                    <div className='grid-price'>$14.25</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>G3. Gold Kome Special</h3>
                    </div>
                    <div className='grid-price'>$15.25</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>G4. Gold Kome Cha-Shu</h3>
                    </div>
                    <div className='grid-price'>$17.25</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>G5. Gold Kome Yasai</h3>
                    </div>
                    <div className='grid-price'>$13.75</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>G6. Gold Kome Ebi-Fried Shrimp</h3>
                    </div>
                    <div className='grid-price'>$14.75</div>
                </div>
        </div>
    );
}

export default GoldKome