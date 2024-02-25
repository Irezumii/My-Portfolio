import './App.css';
import { useRef } from 'react';
import HomePage from './Components/HomePage';
import AboutMe from './Components/AboutMe';
import MyProjects from './Components/MyProjects/MyProjects';
import MyKnowledge from './Components/MyKnowledge';

function App() {
  const homeScroll = useRef(null)
  const aboutMeScroll = useRef(null)
  const myProjectsScroll = useRef(null)
  const myKnowledgeScroll = useRef(null)

  function handleScroll(targetRef) {
    let temp;
    switch (true) {
      case targetRef === "aboutMe":
        temp = aboutMeScroll.current
        break
      case targetRef === "myProjects":
        temp = myProjectsScroll.current
        break
      case targetRef === "myKnowledge":
        temp = myKnowledgeScroll.current
        break
      default:
        temp = homeScroll.current
        break
    }
    if (temp) {
      temp.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <>
      <div className="full-page-box" ref={homeScroll}>
        <HomePage handleScroll={handleScroll} />
      </div>
      <div className="full-page-box" ref={aboutMeScroll}>
        <AboutMe handleScroll={handleScroll} />
      </div>
      <div className="full-page-box" ref={myProjectsScroll}>
        <MyProjects handleScroll={handleScroll} />
      </div>
      <div className="full-page-box" ref={myKnowledgeScroll}>
        <MyKnowledge handleScroll={handleScroll} />
      </div>
    </>
  );
}

export default App;
