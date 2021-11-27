import React from 'react'
import './MenuItems.css'

function SmallPlates () {
    return (
        <div>
            {/* HEADER */}
            <hr className='dashed' />
            <h1>Small Plates</h1>
                {/* SMALL PLATES ITEMS */}
                <div className='grid-menu'>
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Edamame" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>SP1. Edamame</h3>
                        <p>
                            Lightly salted boiled soy beans
                        </p>
                    </div>
                    <div className='grid-price'>$4.25</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Gyoza" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>SP2. Gyoza</h3>
                        <p>
                            House-made pan fried pork
                            dumpling with spicy soy sauce
                        </p>
                    </div>
                    <div className='grid-price'>$6.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Takoyaki" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>SP3. Takoyaki</h3>
                        <p>
                            Fried octopus ball with tonkatsu
                            sauce and miso mayonnaise
                        </p>
                    </div>
                    <div className='grid-price'>$6.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Agedashi Tofu" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>SP4. Agedashi Tofu</h3>
                        <p>
                            Deep fried tofu with tsuyu sauce
                        </p>
                    </div>
                    <div className='grid-price'>$5.25</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Yasai Itame" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>SP5. Yasai Itame</h3>
                        <p>
                            Stir fry bean sprouts, cabagges,
                            carrots and onions
                        </p>
                    </div>
                    <div className='grid-price'>$4.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Misoya Bun" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>SP6. Misoya Bun</h3>
                        <p>
                            Steamed bun stuffed with slow-braised
                            pork chashu, cucumber, and
                            baby mixed greens served with
                            mayonnaise
                        </p>
                    </div>
                    <div className='grid-price'>$5.50</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Ebi Bun" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>SP7. Ebi Bun</h3>
                        <p>
                            Steamed bun stuffed with deep fried
                            shrimp, cucumber, and baby mixed
                            greens served with miso mayonnaise
                        </p>
                    </div>
                    <div className='grid-price'>$5.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Sweet Potato Fries" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>SP8. Sweet Potato Fries</h3>
                        <p>
                            Sweet potato fries with spicy mayo                        
                        </p>
                    </div>
                    <div className='grid-price'>$4.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Brussels Sprouts Tempura" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>SP9. Brussels Sprouts Tempura</h3>
                        <p>
                            Crispy tempura brussels sprouts with
                            truffle oil
                        </p>
                    </div>
                    <div className='grid-price'>$7.75</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Miso Black Cod" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>SP10. Miso Black Cod</h3>
                        <p>
                            Black cod served with lemo
                            and mayonnaise
                        </p>
                    </div>
                    <div className='grid-price'>
                        $8.50 (Half)<br />
                        $16.50 (Full)
                    </div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Cha-shu Mini Taco" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>SP11. Cha-shu Mini Taco</h3>
                        <p>
                            Pan-fried pork chashu and
                            cucumber in a crispy wonton taco
                        </p>
                    </div>
                    <div className='grid-price'>$6.25</div>
                    
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Mango Shrimp Salad Roll" className='image-dim' /></div>
                    <div className='grid-desc'>
                        <h3>SP12. Mango Shrimp Salad Roll</h3>
                        <p>
                            Mango and deep fried shrimp
                            wrapped with rice paper
                        </p>
                    </div>
                    <div className='grid-price'>$6.75</div>
                </div>
        </div>
    );
}

export default SmallPlates