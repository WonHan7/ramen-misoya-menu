import NavBar from './NavBar'
import HappyHour from './components/HappyHour'
import Salads from './components/Salads'
import DeepFried from './components/DeepFried'
import SmallPlates from './components/SmallPlates'
import Don from './components/Don'
import Yakitori from './components/Yakitori'
import Combos from './components/Combos'
import GoldKome from './components/GoldKome'
import SilShiro from './components/SilShiro'
import HouseSpec from './components/HouseSpec'
import VegRam from './components/VegRam'
import Toppings from './components/Toppings'
import Desserts from './components/Desserts'
import Beverages from './components/Beverages'
import Alcohol from './components/Alcohol'
import Cocktails from './components/Cocktails'
import Footer from './Footer'
import './App.css'

function App() {
  return (
      <div className="App">
        <br />
        <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Green Salad" width="150px" />
        <div id="top">
          <NavBar />
        </div>

        {/* LINKS */}
        <div id='hh-sec'>
          <HappyHour /> 
          <br />
          <a href="#" onClick={() => {
              const top = document.querySelector("#top");
              top.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
              Back to Top
          </a>
        </div>

        <div id='salads-sec'>
          <Salads />
          <br />
          <a href="#" onClick={() => {
              const top = document.querySelector("#top");
              top.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
              Back to Top
          </a>
        </div>

        <div id='df-sec'>
          <DeepFried />
          <br />
          <a href="#" onClick={() => {
              const top = document.querySelector("#top");
              top.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
              Back to Top
          </a>
        </div>

        <div id='sp-sec'>
          <SmallPlates />
          <br />
          <a href="#" onClick={() => {
              const top = document.querySelector("#top");
              top.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
              Back to Top
          </a>
        </div>

        <div id='don-sec'>
          <Don />
          <br />
          <a href="#" onClick={() => {
              const top = document.querySelector("#top");
              top.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
              Back to Top
          </a>
        </div>

        <div id='yaki-sec'>
          <Yakitori /> 
          <br />
          <a href="#" onClick={() => {
              const top = document.querySelector("#top");
              top.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
              Back to Top
          </a>
        </div>

        <div id='co-sec'>
          <Combos /> 
          <br />
          <a href="#" onClick={() => {
              const top = document.querySelector("#top");
              top.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
              Back to Top
          </a>
        </div>

        <div id='gk-sec'>
          <GoldKome /> 
          <br />
          <a href="#" onClick={() => {
              const top = document.querySelector("#top");
              top.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
              Back to Top
          </a>
        </div>

        <div id='ss-sec'>
          <SilShiro />
          <br />
          <a href="#" onClick={() => {
              const top = document.querySelector("#top");
              top.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
              Back to Top
          </a>
        </div>

        <div id='hs-sec'>
          <HouseSpec />
          <br />
          <a href="#" onClick={() => {
              const top = document.querySelector("#top");
              top.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
              Back to Top
          </a>
        </div>

        <div id='veg-sec'>
          <VegRam />
          <br />
          <a href="#" onClick={() => {
              const top = document.querySelector("#top");
              top.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
              Back to Top
          </a>
        </div>

        <div id='de-sec'>
          <Desserts />
          <br />
          <a href="#" onClick={() => {
              const top = document.querySelector("#top");
              top.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
              Back to Top
          </a>
        </div>

        <div id='be-sec'>
          <Beverages />
          <br />
          <a href="#" onClick={() => {
              const top = document.querySelector("#top");
              top.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
              Back to Top
          </a>
        </div>

        <div id='al-sec'>
          <Alcohol />
          <br />
          <a href="#" onClick={() => {
              const top = document.querySelector("#top");
              top.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
              Back to Top
          </a>
        </div>

        <div id='ct-sec'>
          <Cocktails />
          <br />
          <a href="#" onClick={() => {
              const top = document.querySelector("#top");
              top.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
              Back to Top
          </a>
        </div>

        <div id='top-sec'>
          <Toppings />
          <br />
          <a href="#" onClick={() => {
              const top = document.querySelector("#top");
              top.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
              Back to Top
          </a>
        </div>
        {/* END LINKS */}
        
        <Footer />
      </div>
  );
}

export default App;
