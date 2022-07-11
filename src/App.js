
import Intro  from './Components/Intro/intro'
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'


import './App.css'
function App(props) {
  return (
    <div className="App cZslOS">
    <div className='content'>
      <Header />
     <Intro />
    <Footer />
    </div>
    </div>
  );
}

export default App;
