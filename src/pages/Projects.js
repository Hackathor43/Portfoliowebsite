

import Header from './../Components/Header/header'
import Footer from './../Components/Footer/footer'


import './../App.css'
import Projects from '../Components/Projects/Projects';
function projects(props) {
  return (
    <div className="App cZslOS">
    <div className='content'>
      <Header />
     <Projects />
    <Footer />
    </div>
    </div>
  );
}

export default projects;
