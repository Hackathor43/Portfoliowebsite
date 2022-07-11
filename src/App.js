
import Intro  from './Components/Intro/intro'
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
function App() {
  return (
    <div className="App cZslOS">
    <div className='content'>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/Experience" element={<Experience />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Skills" element={<Skills />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
      </BrowserRouter>
    
    <Footer />
    </div>
    </div>
  );
}

export default App;
