import linkedlinImg from '../Assets/linkedin.png'
import githubImg from '../Assets/github.png'
import gmailImg from '../Assets/gmail.png'
import phoneImg from '../Assets/phone.png'
import faceImg from '../Assets/IMG-6059 (1).png'
import arrowImg from '../Assets/arrow.png'
import codeIMG from '../Assets/code.png'
import javaScriptIMG from '../Assets/javascript.png'
import htmlIMG from '../Assets/html.png'
import cssIMG from '../Assets/css.png'
import reactIMG from '../Assets/react.png'
import pythonIMG from '../Assets/python.png'
import photoshopIMG from '../Assets/photoshop.png'

import './HomePage.css'


export default function HomePage({ handleScroll }) {
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
        </>
    )
}