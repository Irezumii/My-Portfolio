
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
                                    <p>&nbsp; Prosta gra która posłużyła mi do nauki (pierwszy już taki baardziej niż prosty projekt który zrobiłem) łączenia
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
                                <div className='f1-description'>
                                    <p>#&nbsp;Mała stronka o f1 w której znajdują się wszyscy kierowcy sezonu oraz drużyny.</p>
                                    <p>#&nbsp;Rankingi są podpięte do API i są generowane na jego podstawie, dlatego cały czas wyświetlane są w rich aktualne pozycje kierowców ich punkty oraz pozycje i punkty zespołów.</p>
                                    <p>#&nbsp;Archiwum jest wizualizacją bazy danych API f1 i przedstawia wszystkie wyścigi, wyniki wyścigów, czasy oraz pozycję kierowców oraz kto zrobił najszybsze okrążenie.
                                        Pobierane z API jest tylko to co jest niezbędne do wyświetlenia wyników, i jest inicjowane dopiero po wybraniu konkretnej daty czy konkretnego wyścigu.
                                    </p>
                                    <p>#&nbsp;Nauczyłem się dzięki temu projektowi pracować z API, unikać niepotrzebnego pobierania danych oraz gdy nie jest to konieczne,
                                        optymalizować stronę pod kątem wyświetlania i przechowywania elementów DOM (tworzenia ich tylko gdy są potrzebne)
                                    </p>
                                    <p>#&nbsp;Do operowania na API pomagałem sobie Postman'em</p>
                                </div>
                            </>
                            : null}
                        {renderTrigger === "exchangeEverything" ?
                            <>
                                <div className="exchange-everything-image-box">
                                    <img src={exchangeEverythingImg} alt="" className='exchange-everything-img' />

                                </div>
                                <div className="exchange-everything-button-box">
                                    <p>Webside</p>
                                    <p>GitHub</p>
                                </div>
                                <div className="exchange-everything-description">
                                    <p>#&nbsp;Mój do tej pory najbardziej zaawansowany projekt</p>
                                    <p>#&nbsp;Strona internetowa której celem jest porównywanie wartości walut, kryptowalut oraz akcji, do prawidłowego działąnia strony użyłem API z dwóch róznych źródeł.
                                        <p>#&nbsp;Niestety API walut jest dosyć ograniczone i niektóre wymiany nie są przez nie wspierane.</p>
                                        <p>#&nbsp;W zależności od wybranych wartości wykonywana jest konkretna operacja oraz konkretne działanie wyliczające wartośc pierwszej odzwiercieglona w drugiej.</p>
                                        <p>#&nbsp;Dzięki temu projektowi zrozumiałem bardziej samo API, asynchroniczność pobierania z niego danych, funkcje zwrotne i logikę renderowania pobranych danych. </p>
                                        <p>#&nbsp;Zrozumiałem też dużo odnośnie renderowania, re-renderowań aplikacji, samych stanów, hook'ów, przepływu danych, jak działa i jak wykożystać localStorage i operowania na ciągle zmieniających się danych.</p>
                                        <p>#&nbsp;Najtrudniejszym w tym projekcie była dla mnie optymalizacja re-renderów, oraz pobieranie i przedstawianie danych z API tylko wtedy gdy chce i jest to potrzebne</p>
                                    </p>
                                </div>
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
