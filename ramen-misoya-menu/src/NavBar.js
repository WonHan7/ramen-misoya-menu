import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar()
{
    return (
        <nav className='navbar'>
            <div className='subnav'>
                <p className='subnav-p'>Appetizers</p>
                <div className='subnav-content'>
                    <Link to="/salads">Salads</Link>
                    <Link to="/deep-fried">Deep Fried</Link>
                    <Link to="/small-plates">Small Plates</Link>
                    <Link to="/don-rice-bowl">Don (Rice Bowls)</Link>
                    <Link to="/yakitori">Yakitori</Link>
                </div>
            </div>
            <Link to="/gold-kome">Gold Kome Ramen</Link>
            <Link to="/silver-shiro">Silver Shiro Ramen</Link>
            <Link to="/house-special-ramen">House Special Ramen</Link>
            <Link to="/veg-ramen">Vegetable Ramen</Link>
            <Link to="/toppings">Ramen Toppings</Link>
        </nav>
    );
}

export default NavBar;