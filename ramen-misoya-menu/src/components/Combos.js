import React from 'react'
import './MenuItems.css'

function Combos () {
    return (
        <div>
            {/* HEADER */}
            <hr className='dashed' />
            <h1>Combos</h1>
                {/* COMBO ITEMS */}
                <div className='grid-menu'>
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Tonkotsu Combo" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>CO1. Tonkotsu Combo</h3>
                        <p>
                            2 orders of seaweed salad + 2 Ikageso + 2 Beef Yakitori + 2 Chicken Yakitori + 2
                            Zucchini Yakitori + 1 order of Tonkotsu Red Ramen
                        </p>
                    </div>
                    <div className='grid-price'>$???</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Izakaya Combo (Masumi Cold Sake)" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>CO2. Izakaya Combo (Masumi Cold Sake)</h3>
                        <p>
                            Chashu chahan + yam fries + 4 pieces of chicken kara-age + Ikageso + 2 pieces of kaki
                            fry + 2 pieces of takoyaki + and 4 pieces of deep fried gyoza
                        </p>
                    </div>
                    <div className='grid-price'>$50</div>

                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Izakaya Combo (Sapporo)" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>CO3. Izakaya Combo (2 Sapporo)</h3>
                        <p>
                            Chashu chahan + yam fries + 4 pieces of chicken kara-age + Ikageso + 2 pieces of kaki
                            fry + 2 pieces of takoyaki + and 4 pieces of deep fried gyoza
                        </p>
                    </div>
                    <div className='grid-price'>$60</div>
                </div>
        </div>
    );
}

export default Combos