import linkedlinImg from '../Assets/linkedin.png'
import githubImg from '../Assets/github.png'
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
            <img className="arrow-down" src={arrowImg} onClick={() => handleScroll("aboutMe")} alt=''/>
            <header>
                <div className="header-components-left">
                    <img className='code-img' src={codeIMG} alt="" />
                    <p onClick={() => handleScroll("aboutMe")} >About me</p>
                    <p onClick={() => handleScroll("myProjects")} >My Projects</p>
                    <p onClick={() => handleScroll("myKnowledge")} >My Knowledge</p>
                </div>
                <div className='header-components-right'>
                    <div className="icon-box">
                        <a href='https://www.linkedin.com/in/konrad-sordyl-9ba787267/' target="_blank" rel="noreferrer">
                            <img src={linkedlinImg} alt="" />
                        </a>
                        <a href='https://github.com/Irezumii' target='_blank' rel="noreferrer">
                            <img src={githubImg} alt="" />
                        </a>
                    </div>
                    <a href='' target='_blank' rel='noreferrer' download><p>Download CV</p></a>
                </div>
            </header>
            <div className="introdution">
                <div className='introdution-content'>
                    <p>Hello</p>
                    <p>My Name is</p>
                    <h1>Konrad Sordyl</h1>
                    <p>And i would like to become a</p>
                    <h2>Front-end Developer</h2>
                    <div className='tech-stack-box'>
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
            </div>
            <div className="my-photo">
                <img src={faceImg} alt="" />
            </div>
        </>
    )
}