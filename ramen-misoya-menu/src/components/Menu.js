import React from 'react'
import Salads from './MenuItems/Salads'
import DeepFried from './MenuItems/DeepFried'
import SmallPlates from './MenuItems/SmallPlates'
import Don from './MenuItems/Don'
import Yakitori from './MenuItems/Yakitori'
import GoldKome from './MenuItems/GoldKome'
import SilShiro from './MenuItems/SilShiro'
import HouseSpec from './MenuItems/HouseSpec'
import VegRam from './MenuItems/VegRam'
import Toppings from './MenuItems/Toppings'
import './Menu.css'

function Menu () {
    return (
        <div>
            <Salads />
            <DeepFried />
            <SmallPlates />
            <Don />
            <Yakitori />
            <GoldKome />
            <SilShiro />
            <HouseSpec />
            <VegRam />
            <Toppings />
        </div>
    );
}

export default Menu;