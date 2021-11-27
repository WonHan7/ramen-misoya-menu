import React from 'react'
import './MenuItems.css'

function HouseSpec () {
    return (
        <div>
            {/* HEADER */}
            <hr className='dashed' />
            <h1>House Special Ramen</h1>
                {/* HOUSE SPECIAL ITEMS */}
                <div className='grid-menu'>
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Goma Tan" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>H1. Goma Tan</h3>
                        <p>
                            Egg noodles + silver shiro miso + sesame paste + minced pork +
                            kikurage + chili strands + oil + marinated pork belly cha-shu
                            + half a miso egg on chicken and pork broth
                        </p>
                    </div>
                    <div className='grid-price'>$15.25</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Miso Tan Tan Basic" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>H2. Miso Tan Tan Basic</h3>
                        <p>
                            Egg noodles + Silver Shiro miso + spicy miso + nikumiso (minced pork) +
                            chili + chili oil on chicken and pork broth
                        </p>
                    </div>
                    <div className='grid-price'>$14.25</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Miso Tan Tan Deluxe" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>H2. Miso Tan Tan Deluxe</h3>
                        <p>
                            TanTan Basic + 3 slices of marinated pork
                            belly cha-shu and a miso egg
                        </p>
                    </div>
                    <div className='grid-price'>$19.95</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Miso Tonkotsu Basic" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>H2. Miso Tonkotsu Basic</h3>
                        <p>
                            Egg noodles + silver shiro miso + nikumiso (minced pork) +
                            kikurage and half an egg on creamy pork broth
                        </p>
                    </div>
                    <div className='grid-price'>$14.25</div>

                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Miso Tonkotsu Spicy" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>H3. Miso Tonkotsu Spicy</h3>
                        <p>
                            Miso Tonkotsu Basic + chili oil and spicy miso on the side
                        </p>
                    </div>
                    <div className='grid-price'>$15.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Miso Curry" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>H4. Miso Curry</h3>
                        <p>
                            Egg noodles + Gold Kome miso + nikumiso (minced pork) + 
                            kikurage and chili strands on chicken and pork broth
                        </p>
                    </div>
                    <div className='grid-price'>$16.75</div>

                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Tonkotsu Black Basic" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>H5. Tonkotsu Black Basic</h3>
                        <p>
                            Egg noodles + black garlic oil + nikumiso (minced pork) + kikurage +
                            1 slice of marinated pork belly chashu + half a miso egg
                            on creamy pork broth
                        </p>
                    </div>
                    <div className='grid-price'>$13.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Tonkotsu Black" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>H5. Tonkotsu Black</h3>
                        <p>
                            Egg noodles + black garlic oil + kikurage + 1 slice of marinated pork 
                            belly chashu + half a miso egg on creamy pork broth
                        </p>
                    </div>
                    <div className='grid-price'>$19.90</div>
                </div>
        </div>
    );
}

export default HouseSpec