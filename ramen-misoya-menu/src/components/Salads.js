import React from 'react'
import './MenuItems.css'

/*
    If you want to add a new image:
    1. Copy this line (Without the dash at the beginning, starting at <):
    - <img src={`${process.env.PUBLIC_URL}/assets/folder-name/image-name.ext`} alt="Name_of_Pic" />
    - folder-name: Name of folder image is in
    - image-name.ext: Name of image in file (.ext = png, jpg, jpeg, etc)
    - Name_of_Pic: Name of item (This will only be displayed if the image does not exist or fails to load as a backup)
    2. Paste the line of code where it says "Image"
    - eg. <div className='grid-img'>PASTE HERE</div>

    If you want to change description:
    1. Write within the <p></p> which can be found under the DESCRIPTION section (4 lines max recommended)
*/
function Salads () {
    return (
        <div >
            {/* HEADER */}
            <hr className='dashed' />
            <h1>Salads</h1>
                {/* SALAD ITEMS */}
                <div className='grid-menu'>
                    {/* ITEM STARTS HERE */}
                    {/* IMAGE */}
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/salads/greensalad.png`} alt="Green Salad" className='image-dim' /></div>
                    <div className='grid-desc'>
                        {/* ITEM NAME */}
                        <h3>S1. Green Salad</h3>
                        {/* DESCRIPTION */}
                        <p>
                            Spring mix salad, corn and salad dressing
                        </p>
                    </div>
                    {/* PRICE */}
                    <div className='grid-price'>$7.25</div>
                    {/* ITEM ENDS HERE */}
                    
                    {/* IMAGE */}
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Crispy Chicken Salad" className='image-dim' /></div>
                    <div className='grid-desc'>
                        {/* ITEM NAME */}
                        <h3>S2. Crispy Chicken Salad</h3>
                        {/* DESCRIPTION */}
                        <p>
                            Spring mix salad, seaweed, crispy chicken and salad dressing
                        </p>
                    </div>
                    {/* PRICE */}
                    <div className='grid-price'>$11.25</div>
                    
                    {/* IMAGE */}
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Seaweed Salad" className='image-dim' /></div>
                    <div className='grid-desc'>
                        {/* ITEM NAME */}
                        <h3>S3. Seaweed Salad</h3>
                        <p>
                        {/* DESCRIPTION */}
                            Lightly seasoned mixed seaweed salad with deep fried mushrooms
                        </p>
                    </div>
                    {/* PRICE */}
                    <div className='grid-price'>$5.25</div>
                    
                    {/* ITEM STARTS HERE */}
                    {/* IMAGE */}
                    <div className='grid-img'><img src={`${process.env.PUBLIC_URL}/assets/`} alt="Crunch Tofu Salad" className='image-dim' /></div>
                    <div className='grid-desc'>
                        {/* ITEM NAME */}
                        <h3>S4. Crunch Tofu Salad</h3>
                        {/* DESCRIPTION */}
                        <p>
                            Cold tofu topped with white pepper, miso mayonnaise,
                            onion chips, smoked bonito flakes, green onion and 
                            japanese soy sauce
                        </p>
                    </div>
                    {/* PRICE */}
                    <div className='grid-price'>$6.75</div>
                    {/* ITEM ENDS HERE */}
                </div>
        </div>
    );
}

export default Salads