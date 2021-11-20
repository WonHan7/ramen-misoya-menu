// import logo from './logo.svg';
import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <br />
      <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Green Salad" width="100px" />
      <NavBar />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
