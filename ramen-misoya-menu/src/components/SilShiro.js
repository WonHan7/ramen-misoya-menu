import React from 'react'
import './MenuItems.css'

function SilShiro () {
    return (
        <div>
            {/* HEADER */}
            <hr className='dashed' />
            <h1>Silver Shiro Ramen</h1>
                {/* SILVER SHIRO ITEMS */}
                <div className='grid-menu'>
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Silver Shiro Basic" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>SS1. Silver Shiro Basic</h3>
                        <p>
                            Egg noodles + silver shiro miso + nikumiso (minced pork) 
                            + kikurage on chicken and pork broth
                        </p>
                    </div>
                    <div className='grid-price'>$12.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Silver Shiro Spicy" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>SS2. Silver Shiro Spicy</h3>
                        <p>
                            Silver Shiro Basic + chili oil + spicy miso
                        </p>
                    </div>
                    <div className='grid-price'>$14.25</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Silver Shiro Special" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>SS3. Silver Shiro Special</h3>
                        <p>
                            Silver Shiro Basic + 1 slice of marinated pork 
                            belly cha-shu + half an egg
                        </p>
                    </div>
                    <div className='grid-price'>$15.25</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Silver Shiro Cha-Shu" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>SS4. Silver Shiro Cha-Shu</h3>
                        <p>
                            Silver Shiro Basic + 3 slices of marinated
                            pork belly cha-shu
                        </p>
                    </div>
                    <div className='grid-price'>$17.25</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Silver Shiro Yasai" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>SS5. Silver Shiro Yasai</h3>
                        <p>
                            Silver Shiro Basic + stir-fried vegetables
                        </p>
                    </div>
                    <div className='grid-price'>$13.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Silver Shiro Chicken Karaage" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>SS6. Silver Shiro Chicken Karaage</h3>
                        <p>
                            Silver Shiro Basic + 3 pieces of fried chicken karaage
                        </p>
                    </div>
                    <div className='grid-price'>$17.25</div>
                </div>
        </div>
    );
}

export default SilShiro