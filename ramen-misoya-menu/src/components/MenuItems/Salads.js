import React from 'react'
import './MenuItems.css'

function Salads () {
    return (
        <div >
            {/* HEADER */}
            <h1>Salads</h1>
                {/* SALAD ITEMS */}
                <p>Green Salad $7.25</p>
                <p className='desc'>spring mix salad, corn and salad dressing</p>
                <p>Crispy Chicken Salad $11.25</p>
                <p className='desc'>spring mix salad, seaweed, crispy chicken and salad dressing</p>
                <p>Seaweed Salad $5.25</p>
                <p className='desc'>lightly seasoned mixed seaweed salad with deep fried mushrooms</p>
                <p>Crunch Tofu Salad $6.25</p>
                <p className='desc'>cold tofu topped with white pepper, miso mayonnaise, onion chips, smoked bonito flakes, green onion and japanese soy sauce</p>
        </div>
    );
}

export default Salads