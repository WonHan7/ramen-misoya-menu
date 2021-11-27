import React from 'react'
import './MenuItems.css'

function Cocktails () {
    return (
        <div>
            {/* HEADER */}
            <hr className='dashed' />
            <h1>Cocktails</h1>
                {/* COCKTAIL ITEMS */}
                <div className='grid-menu'>
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Cloudy Dream" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>CT1. Cloudy Dream</h3>
                        <p>
                            1oz shochu + 1oz lychee liquer + and yogurt syrup topped with club soda
                        </p>
                    </div>
                    <div className='grid-price'>$14</div>   
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Momori" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>CT2. Momori</h3>
                        <p>
                            1oz shochu, 1oz peach schnapps, peach juice, grenadine and yogurt syrup topped with
                            club soda
                        </p>
                    </div>
                    <div className='grid-price'>$14</div>      
                                 
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Naruhito" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>CT3. Naruhito</h3>
                        <p>
                            1oz of vodka, 1oz sake, and blue raspberry syrup topped with club soda
                        </p>
                    </div>
                    <div className='grid-price'>$13</div>  
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/meat.png`} alt="Sunshine" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>CT4. Sunshine</h3>
                        <p>
                            2oz shochu, grenadine, and ginger ale served with a fruity popsicle
                        </p>
                    </div>
                    <div className='grid-price'>$15</div>        
                </div>
        </div>
    );
}

export default Cocktails