import React from 'react'
import './MenuItems.css'

function Don () {
    return (
        <div>            
            {/* HEADER */}
             <hr className='dashed' />
            <h1>Don | Rice Bowl</h1>
                {/* DON | RICE BOWL ITEMS */}
                <div className='grid-menu'>
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Green Salad" /></div>
                    <div className='grid-desc'>
                        <h3>R1. Karaage Don</h3>
                        <p>
                            Deep-fried chicken with seaweed
                            and kimchi served on rice
                            <br />
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className='grid-price'>$10.25</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Green Salad" /></div>
                    <div className='grid-desc'>
                        <h3>R2. Chashu Chahan</h3>
                        <p>
                            Chashu fried rice with two pieces of
                            chashu
                            <br />
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className='grid-price'>$16.25</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Green Salad" /></div>
                    <div className='grid-desc'>
                        <h3>R3. Unagi Don</h3>
                        <p>
                            Grilled fresh water eel served with
                            unagi sauce on rice
                            <br />
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className='grid-price'>$12.25</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Green Salad" /></div>
                    <div className='grid-desc'>
                        <h3>R4. Fried Rice</h3>
                        <p>
                            Fried rice description
                            <br />
                            <br />
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className='grid-price'>
                        $5.95
                        $11.95
                    </div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Green Salad" /></div>
                    <div className='grid-desc'>
                        <h3>R5. Spicy Fried Rice</h3>
                        <p>
                            Spicy fried rice description
                            <br />
                            <br />
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className='grid-price'>
                        $6.95
                        $12.95
                    </div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Green Salad" /></div>
                    <div className='grid-desc'>
                        <h3>R6. Sukiyaki Beef</h3>
                        <p>
                            Sukiyaki Beef don description
                            <br />
                            <br />
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className='grid-price'>
                        $9.25
                        $15.95
                    </div>
                </div>
        </div>
    );
}

export default Don