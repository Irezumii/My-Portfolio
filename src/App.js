
import './App.css';
import { useState, useEffect, useRef } from 'react';
import linkedlinImg from './Assets/linkedin.png'
import githubImg from './Assets/github.png'
import gmailImg from './Assets/gmail.png'
import phoneImg from './Assets/phone.png'
import faceImg from './Assets/IMG-6059 (1).png'
import arrowImg from './Assets/arrow.png'
import arrowHomeIMG from './Assets/arrow-home.png'
import codeIMG from './Assets/code.png'
import sushiIMG from './Assets/sushi.JPG'
import padIMG from './Assets/pad.png'
import f1LogoIMG from './Assets/f1-logo.png'
import currencyIMG from './Assets/currency.png'
import javaScriptIMG from './Assets/javascript.png'
import htmlIMG from './Assets/html.png'
import cssIMG from './Assets/css.png'
import reactIMG from './Assets/react.png'
import pythonIMG from './Assets/python.png'
import photoshopIMG from './Assets/photoshop.png'

function App() {
  const [clicked, setClicked] = useState(false)
  const [timeoutTrigger, setTimeoutTrigger] = useState(false)
  const moreBoxRef = useRef(null)

  useEffect(() => {
    if (clicked) {
      moreBoxRef.current.style.width = "90%"
      const timeoutId = setTimeout(() => {
        setTimeoutTrigger(true)
      }, 250);

      return () => clearTimeout(timeoutId); // Wyczyszczenie timeoutu po odmontowaniu komponentu
    }
  }, [clicked]);

  function handleMore() {
    setClicked(true)
  }

  function handleScroll(el = 1) {
    window.scrollBy({
      top: (window.innerHeight - 20) * el,
      // top: window.innerHeight * el,
      left: 0,
      behavior: 'smooth'
    });
  }
  return (
    <>
      <div className="full-page-box">
        <img className="arrow-down" src={arrowImg} onClick={() => handleScroll()} />
        <header>
          <div className="header-components-left">
            <img className='code-img' src={codeIMG} alt="" />
            <p onClick={() => handleScroll()} >About me</p>
            <p onClick={() => handleScroll(2)} >My Projects</p>
            <p onClick={() => handleScroll(3)} >My Knowledge</p>
          </div>
          <div className='header-components-right'>
            <div className="icon-box">
              <a href=''>
                <img src={linkedlinImg} alt="" />
              </a>
              <a href=''>
                <img src={githubImg} alt="" />
              </a>
              <a href=''>
                <img src={gmailImg} alt="" />
              </a>
              <a href=''>
                <img src={phoneImg} alt="" />
              </a>
            </div>
            <p>Download CV</p>
          </div>
        </header>
        <div className="introdution">
          <div className='introdution-content'>
            <p>Hello</p>
            <p>My Name is</p>
            <h1>Konrad Sordyl</h1>
            <p>And i would like to become a</p>
            <h2>Front-end Developer</h2>
            <p>Tech Stack:</p>
            <div className="tech-stack">
              <img className='tech-img' src={htmlIMG} alt="" />
              <img className='tech-img' src={cssIMG} alt="" />
              <img className='tech-img' src={javaScriptIMG} alt="" />
              <img className='tech-img' src={reactIMG} alt="" />
              <img className='tech-img' src={pythonIMG} alt="" />
              <img className='tech-img' src={photoshopIMG} alt="" />
            </div>
          </div>
        </div>
        <div className="my-photo">
          <img src={faceImg} alt="" />
        </div>
      </div>
      <div className="full-page-box">
        <img className='arrow-home' src={arrowHomeIMG} onClick={() => handleScroll(-1)} alt="" />
        <img className='arrow-down' src={arrowImg} onClick={() => handleScroll()} alt="" />
        <dic className='sushi-img-box' >
          <img className='sushi-img' src={sushiIMG} alt="" />
        </dic>
        <div className="about-me">
          <h4>About Me</h4>
          <div className='about-me-info'>
            <p> Od 6 lat pracuje jako 'SushiMaster' w różnych restauracjach we
              Wrocławiu. Jakiś czas temu postanowiłem coś zmienić. Zacząłem uczyć się
              programowania i bardzo to polubiłem. Od ponad roku każdą wolną chwilę
              poświęcałem na naukę po to by dziś wysłać do Was moje CV i zmienić
              coś w swoim życiu.</p>
            <br />
            <p>Ciekawi mnie zarówno Front-End jak i Back-End, dlatego chciałbym kiedyś zostać Full-Stack Developerem, moją podróż postanowiłem zacząć od Front-End'u</p>
            <br />
            <h5>Hobby:</h5>
            <br />
            <p>Interesuję się bardzo Motoryzacją i sportami z nią związanymi (Wyścigi, Drift, F1).</p>
            <p>Często gram w gry na komputerze czy też konsoli.</p>
            <p>Lubię gotować i sam tworzyć nowe potrawy z uzyciem niestandardowych metod</p>
          </div>
        </div>
      </div>
      <div className="full-page-box">
        <img className='arrow-home' src={arrowHomeIMG} onClick={() => handleScroll(-2)} alt="" />
        <img className='arrow-down' src={arrowImg} onClick={() => handleScroll()} alt="" />
        <div className="my-portfolio-code"><span>My Portfolio Code</span></div>
        <div className="my-projects-box">
          {/* <div className="project-box">
            <div className="project-image-box">
              <img className='pad-img' src={padIMG} alt="" />
            </div>
            <div className="project-descripttion-box">
              <div className='technology-box'><h6>JavaScript</h6><h6>HTML</h6><h6>CSS</h6></div>
              <br />
              <p>Prosta gra w wisielca z losowo wybieranym zbiorem haseł. Stylizowana na grę na tablicy szkolnej</p>
            </div>
            <div className="project-buttons-box">
              <div className='more-box'>
                <div className="more-click-box">
                  <div className="click">Click</div>
                  <div className="more">More</div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="project-box">
            <div className="project-image-box">
              <img className='f1-img' src={f1LogoIMG} alt="" />
            </div>
            <div className="project-descripttion-box">
              <div className='technology-box'><h6>React</h6><h6>HTML</h6><h6>CSS</h6></div>
              <br />
              <p>Strona o F1 zawierająca na bierząco aktualizowany ranking kierowców i zespołów, oraz archiwum wszystkich wyścigów od 1950 roku</p>
            </div>
            <div className="project-buttons-box">
              <div className='more-box' onClick={handleMore} ref={moreBoxRef}>
                {clicked === false ? <>
                  <div className="more-click-box">
                    <div className="click">Click</div>
                    <div className="more">More</div>
                  </div>
                </> : null}
                {timeoutTrigger === true ?
                  <div className='code-site-about-box'>
                    <div className="code-site-about">Code</div>
                    <div className="code-site-about">Site</div>
                    <div className="code-site-about">About</div>
                  </div>
                  : null}
              </div>
            </div>
          </div>
          {/* <div className="project-box">
            <div className="project-image-box">
              <img className='currency-img' src={currencyIMG} alt="" />
            </div>
            <div className="project-descripttion-box">
              <div className='technology-box'><h6>React</h6><h6>HTML</h6><h6>CSS</h6></div>
              <br />
              <p>Strona używająca różnych API oraz obliczeń pozwalająca na dowolne porównanie wartości Walut , Kryptowalut oraz Akcji w dowolnej kombinacji </p>
            </div>
            <div className="project-buttons-box">
              <div className='more-box'>
                <div className="more-click-box">
                  <div className="click">Click</div>
                  <div className="more">More</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="full-page-box">
        <img className='arrow-home' src={arrowHomeIMG} onClick={() => handleScroll(-3)} alt="" />
        <img className='arrow-down' src={arrowImg} onClick={() => handleScroll()} alt="" />
      </div>
    </>
  );
}

export default App;
