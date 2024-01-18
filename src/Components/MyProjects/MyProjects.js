
import arrowImg from '../../Assets/arrow.png'
import arrowHomeIMG from '../../Assets/arrow-home.png'
import backImg from '../../Assets/next.png'
import hangmanImg from '../../Assets/hangman-site.png'
import f1Img from '../../Assets/f1-site.png'
import exchangeEverythingImg from '../../Assets/exchangeSite.png'
import { objData } from '../../Data/MyProjectsData'
import Project from './Project'
import { useRef, useState } from 'react'

import './MyProjects.css'

export default function MyProjects({ handleScroll }) {
    const swipeBox = useRef(null)
    const [renderTrigger, setRenderTrigger] = useState(null)
    function handleSwipe() {
        swipeBox.current.style.marginLeft = "-100%"
        setTimeout(function () {
            setRenderTrigger(null)
        }, 300)
    }
    return (
        <>
            <div className="full-page-box">
                <img className='arrow-home' src={arrowHomeIMG} onClick={() => handleScroll(-2)} alt="" />
                <img className='arrow-down' src={arrowImg} onClick={() => handleScroll()} alt="" />
                <div className='swipe-to-about'>
                    <div className='left-swipe-half' ref={swipeBox}>
                        <img className='back-img' src={backImg} alt="" onClick={handleSwipe} />
                        {renderTrigger === "hangman" ?
                            <>
                                <div className='hangman-img-box'>
                                    <img src={hangmanImg} alt="" className='hangman-img' />
                                </div>
                                <div className="hangman-button-box">
                                    <p>Webside</p>
                                    <p>GitHub</p>
                                </div>
                                <div className="hangman-description">
                                    <p>&nbsp; Prosta gra która posłużyła mi do nauki (pierwszy już taki bardziej zaawansowany projekt który zrobiłem) łączenia
                                        JavaScript'u z HTML'em i CSS'em. Nauczyłęm się na niej manipulować DOM'em z poziomu JS.
                                    </p>
                                    <p>&nbsp; Na stronie pierwsze co nas wita to wybór kategori hasła, po wybraniu konkretnej do zmiennej zostaje przypisana
                                        konkretna tablica z hasłami a z niej losowo jest wybierane hasło (wyświetlane jest w konsoli).
                                    </p>
                                    <p>&nbsp; Wybierając literę jest pobierane z elementu DOM textContent elementu (czyli ta litera) i aplikacja sprawdza
                                        czy znajduję się ona w haśle a jeżeli tak to ile razy ona tam występuje.
                                    </p>
                                    <p>&nbsp; Wybranej wcześniej litery nie można wybrać już poraz kolejny, litery które są obecne w haśle zmieniają kolor na
                                        zielony a te których nie ma na czerwony.
                                    </p>
                                    <p>&nbsp; Po wygranej lub przegranej pokazuje się okno wyświetlające w zależności "Wygrałeś" lub "Przegrałeś" i pyta czy chcesz zagrać jeszcze raz</p>
                                </div>
                            </>
                            : null}
                        {renderTrigger === "f1" ?
                            <>
                                <div className="f1-image-box">
                                    <img src={f1Img} alt="" className='f1-site-img' />

                                </div>
                                <div className="f1-button-box">
                                    <p>Webside</p>
                                    <p>GitHub</p>
                                </div>
                                <div className='f1-description'></div>
                            </>
                            : null}
                        {renderTrigger === "exchangeEverything" ?
                            <>
                                <div className="exchange-everything-image-box">
                                    <img src={exchangeEverythingImg} alt="" className='exchange-everything-img' />

                                </div>
                                <div className="exchange-everything-button-box"></div>
                                <div className="exchange-everything-description"></div>
                            </>
                            : null}
                    </div>
                    <div className='right-swipe-half'>
                        <div className="my-portfolio-code"><span>My Portfolio Code</span></div>
                        <div className="my-projects-box">
                            <Project myData={objData.hangman} swipeBox={swipeBox} onSetRenderTrigger={setRenderTrigger} />
                            <Project myData={objData.f1} swipeBox={swipeBox} onSetRenderTrigger={setRenderTrigger} />
                            <Project myData={objData.exchangeEverything} swipeBox={swipeBox} onSetRenderTrigger={setRenderTrigger} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
