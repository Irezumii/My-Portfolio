
import './App.css';

import arrowImg from './Assets/arrow.png'
import arrowHomeIMG from './Assets/arrow-home.png'

import HomePage from './Components/HomePage';
import AboutMe from './Components/AboutMe';
import MyProjects from './Components/MyProjects/MyProjects';

function App() {

  function handleScroll(el = 1) {
    window.scrollBy({
      top: (window.innerHeight - 20) * el,
      left: 0,
      behavior: 'smooth'
    });
  }
  return (
    <>
      <HomePage handleScroll={handleScroll} />
      <AboutMe handleScroll={handleScroll} />
      <MyProjects handleScroll={handleScroll} />

      <div className="full-page-box">
        <img className='arrow-home' src={arrowHomeIMG} onClick={() => handleScroll(-3)} alt="" />
        <img className='arrow-down' src={arrowImg} onClick={() => handleScroll()} alt="" />
      </div>
    </>
  );
}

export default App;
