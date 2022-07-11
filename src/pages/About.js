
import About from './../Components/About/About'
import Header from './../Components/Header/header'
import Footer from './../Components/Footer/footer'


import './../App.css'
function about(props) {
  return (
    <div className="App cZslOS">
    <div className='content'>
      <Header />
     <About />
    <Footer />
    </div>
    </div>
  );
}

export default about;
