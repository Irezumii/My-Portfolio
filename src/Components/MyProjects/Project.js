import { useState,useEffect, useRef } from "react";

import './Project.css'

export default function Project({ myData, swipeBox, onSetRenderTrigger }) {

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
        if (!clicked) {
            moreBoxRef.current.style.width = "100px"
            const timeoutId = setTimeout(() => {
                setTimeoutTrigger(false)
            }, 250);
            return () => clearTimeout(timeoutId); // Wyczyszczenie timeoutu po odmontowaniu komponentu
        }
    }, [clicked]);

    function handleMore() {
        setClicked(true)
    }
    function handleAbout(){
        if(swipeBox){
            swipeBox.current.style.marginLeft = "0"
            onSetRenderTrigger(myData.aboutTrigger)
        }
    }
    return (
        <div className="project-box">
            <div className="project-image-box">
                <img className={myData.imgClass} src={myData.img} alt="" />
            </div>
            <div className="project-title-box">{myData.title}</div>
            <div className="project-descripttion-box">
                <div className='technology-box'><h6>{myData.technologies.first}</h6><h6>{myData.technologies.secound}</h6><h6>{myData.technologies.third}</h6></div>
                <br />
                <p>{myData.description}</p>
            </div>
            <div className="project-buttons-box">
                <div className='more-box' onClick={handleMore} ref={moreBoxRef} onBlur={()=>setClicked(false)} onMouseLeave={()=>setTimeout(function(){setClicked(false)},300)}>
                    {clicked === false ? <>
                        <div className="more-click-box">
                            <div className="click">Click</div>
                            <div className="more">More</div>
                        </div>
                    </> : null}
                    {timeoutTrigger === true ?
                        <div className='code-site-about-box'>
                            <div className="code-site-about"><a href={myData.codeLink} target="_blank" rel="noreferrer">Code</a></div>
                            <div className="code-site-about"><a href={myData.siteLink} target="_blank" rel="noreferrer">Site</a></div>
                            <div className="code-site-about" onClick={handleAbout}>About</div>
                        </div>
                        : null}
                </div>
            </div>
        </div>
    )
}