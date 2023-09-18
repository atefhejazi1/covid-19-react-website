import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Cases from './components/cases/Cases';
import What from './components/what-we-do/What';
import Prevention from './components/prevention/Prevention';
import Symptoms from './components/symptoms/Symptoms';
import Help from './components/help/Help';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Cases/>
        <What/>
        <Prevention/>
        <Symptoms/>
        <Help/>
        <Footer/>

    </div>
  );
}

export default App;
