import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './NavBar'
import Salads from './components/Salads'
import DeepFried from './components/DeepFried'
import SmallPlates from './components/SmallPlates'
import Don from './components/Don'
import Yakitori from './components/Yakitori'
import GoldKome from './components/GoldKome'
import SilShiro from './components/SilShiro'
import HouseSpec from './components/HouseSpec'
import VegRam from './components/VegRam'
import Toppings from './components/Toppings'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <br />
        <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Green Salad" width="100px" />
        <NavBar />
        {/* LINKS */}
        <Switch>
          <Route exact path="/salads">
            <Salads />
          </Route>
          <Route exact path="/deep-fried">
            <DeepFried />
          </Route>
          <Route exact path="/small-plates">            
            <SmallPlates />
          </Route>
          <Route exact path="/don-rice-bowl">
            <Don />
          </Route>
          <Route exact path="/yakitori">
            <Yakitori />
          </Route>
          <Route exact path="/gold-kome">
            <GoldKome />
          </Route>
          <Route exact path="/silver-shiro">            
            <SilShiro />
          </Route>
          <Route exact path="/house-special-ramen">
            <HouseSpec />
          </Route>
          <Route exact path="/veg-ramen">            
            <VegRam />
          </Route>
          <Route exact path="/toppings">
            <Toppings />
          </Route>
        </Switch>
        {/* END LINKS */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
