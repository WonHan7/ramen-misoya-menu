import React from 'react'
import './NavBar.css'

function NavBar()
{
    return (
        <nav className='navbar'>
            <a href="#happy-hour" onClick={() => {
                const hh = document.querySelector("#hh-sec");
                hh.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
                Happy Hour
            </a>
            <a href="#salads" onClick={() => {
                const salad = document.querySelector("#salads-sec");
                salad.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
                Salads
            </a>
            <a href="#deep-fried" onClick={() => {
                const df = document.querySelector("#df-sec");
                df.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
                Deep Fried
            </a>
            <a href="#small-plates" onClick={() => {
                const sp = document.querySelector("#sp-sec");
                sp.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
                Small Plates
            </a>
            <a href="#don-rice-bowl" onClick={() => {
                const don = document.querySelector("#don-sec");
                don.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
                Don | Rice Bowl
            </a>
            <a href="#yakitori" onClick={() => {
                const yaki = document.querySelector("#yaki-sec");
                yaki.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
                Yakitori
            </a>
            <a href="#combos" onClick={() => {
                const co = document.querySelector("#co-sec");
                co.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
                Combos
            </a>
            <a href="#gold-kome" onClick={() => {
                const gk = document.querySelector("#gk-sec");
                gk.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
                Gold Kome
            </a>
            <a href="#silver-shiro" onClick={() => {
                const ss = document.querySelector("#ss-sec");
                ss.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
                Silver Shiro
            </a>
            <a href="#house-specials" onClick={() => {
                const hs = document.querySelector("#hs-sec");
                hs.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
                House Specials
            </a>
            <a href="#veg-ramen" onClick={() => {
                const veg = document.querySelector("#veg-sec");
                veg.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
                Vegetable Ramen
            </a>
            <a href="#desserts" onClick={() => {
                const de = document.querySelector("#de-sec");
                de.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
                Desserts
            </a>
            <a href="#beverages" onClick={() => {
                const be = document.querySelector("#be-sec");
                be.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
                Beverages
            </a>
            <a href="#alcohol" onClick={() => {
                const be = document.querySelector("#al-sec");
                be.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
                Alcohol
            </a>
            <a href="#cocktails" onClick={() => {
                const be = document.querySelector("#ct-sec");
                be.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
                Cocktails
            </a>
            <a href="#ram-top" onClick={() => {
                const top = document.querySelector("#top-sec");
                top.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
                Ramen Toppings
            </a>
        </nav>
    );
}

export default NavBar;