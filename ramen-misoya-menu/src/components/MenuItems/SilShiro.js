import React from 'react'
import './MenuItems.css'

function SilShiro () {
    return (
        <div>
            {/* HEADER */}
            <hr className='dashed' />
            <h1>Silver Shiro Ramen</h1>
                {/* Deep Fried ITEMS */}
                <div className='grid-menu'>
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>SS1. Silver Shiro Basic</h3>
                        <p>Description?</p>
                    </div>
                    <div className='grid-price'>$12.75</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>SS2. Silver Shiro Spicy</h3>
                    </div>
                    <div className='grid-price'>$14.25</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>SS3. Silver Shiro Special</h3>
                    </div>
                    <div className='grid-price'>$15.25</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>SS4. Silver Shiro Cha-Shu</h3>
                    </div>
                    <div className='grid-price'>$17.25</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>SS5. Silver Shiro Yasai</h3>
                    </div>
                    <div className='grid-price'>$13.75</div>
                    
                    <div className='grid-img'>Image</div>
                    <div className='grid-desc'>
                        <h3>SS6. Silver Shiro Chicken Kara-age</h3>
                    </div>
                    <div className='grid-price'>$17.25</div>
                </div>
        </div>
    );
}

export default SilShiro