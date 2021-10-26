import React from 'react'
import './NavBar.css'

function NavBar()
{
    return (
        <nav className='navbar'>
            <div className='subnav'>
                <p className='subnav-p'>Appetizers</p>
                <div className='subnav-content'>
                    <a href='#salads'>Salads</a>
                    <a href='#df'>Deep Fried</a>
                    <a href='#sp'>Small Plates</a>
                    <a href='#don'>Don (Rice Bowls)</a>
                    <a href='#yaki'>Yakitori</a>
                </div>
            </div>
            <a href='#gold'>Gold Kome Ramen</a>
            <a href='#silver'>Silver Shiro Ramen</a>
            <a href='#house'>House Special Ramen</a>
            <a href='#veg'>Vegetable Ramen</a>
            <a href='#topping'>Ramen Toppings</a>
        </nav>
    );
}

export default NavBar;