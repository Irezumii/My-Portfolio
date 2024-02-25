
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
            <img className='arrow-home' src={arrowHomeIMG} onClick={() => handleScroll()} alt="" />
            <img className='arrow-down' src={arrowImg} onClick={() => handleScroll("myKnowledge")} alt="" />
            <div className='swipe-to-about'>
                <div className='left-swipe-half' ref={swipeBox}>
                    <img className='back-img' src={backImg} alt="" onClick={handleSwipe} />
                    {renderTrigger === "hangman" ?
                        <>
                            <div className='hangman-img-box'>
                                <img src={hangmanImg} alt="" className='hangman-img' />
                            </div>
                            <div className="hangman-button-box">
                                <a href='https://hangman-react-tau.vercel.app/' target='_blank' rel='noreferrer'> <p>Webside</p></a>
                                <a href='https://github.com/Irezumii/hangman-react.git' target='_blank' rel='noreferrer'><p>GitHub</p></a>
                            </div>
                            {/* <div className="hangman-description">
                                <p>&nbsp; Jeden z moich pierwszych mini-projektów. Uczyłem się na nim podstaw tworzenia stron:</p>
                                <ul>
                                    <li>pozycjonowania elementów</li>
                                    <li>podstawowych animacji</li>
                                    <li>aplikacji skryptów i manipulacji DOM'em z poziomu JS</li>
                                    <li>mapowania oraz warunkowego renderowania elementów</li>
                                    <li>itp</li>
                                </ul>
                                <br />
                                <p>&nbsp; Na stronie pierwsze co nas wita to wybór kategori, po jej wyborze, do zmiennej zostaje przypisana
                                    konkretna tablica z hasłami, następnie z niej wybierane jest jedno losowe.
                                </p>
                                <p>&nbsp; Wybierając literkę, aplikacja pobiera jej textContent i sprawdza
                                    czy znajduję się ona w haśle, jeżeli tak to ile razy tam występuje.
                                </p>
                                <p>&nbsp; Wybranej wcześniej litery nie można ponownie wybrać, litery które są obecne w haśle zmieniają kolor na
                                    zielony a te których nie ma na czerwony.
                                </p>
                                <p>&nbsp; Po wygranej lub przegranej pokazuje się okno wyświetlające "Wygrałeś" lub "Przegrałeś" oraz pyta czy chcesz zagrać jeszcze raz</p>
                                <p>&nbsp;Zaimplementowana też została muzyka w tle którą mozna włączać lub wyłączać. </p>
                                <p>Oraz z użyciem LocalStorage została zaimplementowana tablica wyników</p>
                            </div> */}
                            <div className="hangman-description">
                                <p>&nbsp; One of my first mini-projects. I was learning basic web development concepts through it:</p>
                                <ul>
                                    <li>Element positioning</li>
                                    <li>Basic animations</li>
                                    <li>Scripting and DOM manipulation with JavaScript</li>
                                    <li>Mapping and conditional rendering of elements</li>
                                    <li>And so on</li>
                                </ul>
                                <br />
                                <p>&nbsp; On the website, the first thing you encounter is the choice of category. After selecting a category, a specific array of phrases is assigned to a variable, and then one random phrase is chosen from it.</p>
                                <p>&nbsp; When selecting a letter, the application retrieves its textContent and checks if it is present in the phrase, and if so, how many times it appears.</p>
                                <p>&nbsp; Once a letter has been chosen, it cannot be chosen again. Letters that are present in the phrase change color to green, while those that are not turn red.</p>
                                <p>&nbsp; After winning or losing, a window appears displaying "You won" or "You lost", and asks if you want to play again.</p>
                                <p>&nbsp; Background music has also been implemented, which can be turned on or off.</p>
                                <p>&nbsp; Additionally, a leaderboard has been implemented using LocalStorage.</p>
                            </div>
                        </>
                        : null}
                    {renderTrigger === "f1" ?
                        <>
                            <div className="f1-image-box">
                                <img src={f1Img} alt="" className='f1-site-img' />
                            </div>
                            <div className='what-i-learned-f1'>
                                {/* <p>Dzięki temu projektowi nauczyłem się:</p>
                                <br />
                                <ul>
                                    <li>pracować z API stałym, jak i zmieniającym się w czasie</li>
                                    <li>mapowania po elementach API</li>
                                    <li>tworzyć wzory ogólne dla pobieranych danych</li>
                                    <li>weryfikacji otrzymanych danych i obsługi błędów</li>
                                    <li>podstawowej obsługi Postman'a</li>
                                    <li>warunkowego renderowania elementów z pobranymi danymi</li>
                                    <li>tworzenia responsywności na potrzeby mniejszych lub większych ekranów</li>
                                    <li>tworzenia lokalnych baz danych w celu przedstawiania ich na stronie</li>
                                    <li>organizacji plików w aplikacji</li>
                                </ul> */}
                                <p>Thanks to this project, I learned:</p>
                                <br />
                                <ul>
                                    <li>to work with both static and dynamically changing APIs</li>
                                    <li>to map through API elements</li>
                                    <li>to create general patterns for fetched data</li>
                                    <li>to verify received data and handle errors</li>
                                    <li>basic usage of Postman</li>
                                    <li>conditional rendering of elements with fetched data</li>
                                    <li>to create responsiveness for smaller or larger screens</li>
                                    <li>to create local databases for displaying them on the website</li>
                                    <li>to organize files in the application</li>
                                </ul>
                            </div>
                            <div className="f1-button-box">
                                <a href='https://f1-react-webside.vercel.app/' target='_blank' rel='noreferrer'><p>Webside</p></a>
                                <a href='https://github.com/Irezumii/f1-react-webside.git' target='_blank' rel='noreferrer'><p>GitHub</p></a>
                            </div>
                            <div className='f1-description'>
                                {/* <p>&nbsp;Mała stronka o f1 w której znajdują się wszyscy kierowcy sezonu oraz drużyny.</p>
                                <p>&nbsp;Rankingi są podpięte do API i są generowane na jego podstawie, dlatego cały czas wyświetlane są w rich aktualne pozycje kierowców ich punkty oraz pozycje i punkty zespołów.</p>
                                <p>&nbsp;Archiwum jest wizualizacją bazy danych API f1 i przedstawia wszystkie wyścigi, wyniki wyścigów, czasy oraz pozycję kierowców oraz kto zrobił najszybsze okrążenie.
                                    Pobierane z API jest tylko to co jest niezbędne do wyświetlenia wyników, i jest inicjowane dopiero po wybraniu konkretnej daty czy konkretnego wyścigu.
                                </p> */}
                                <p>&nbsp;A small website about F1 where you can find all the drivers of the season and teams.</p>
                                <p>&nbsp;The rankings are connected to an API and are generated based on it, so the current positions of the drivers,
                                    their points, as well as the positions and points of the teams are constantly displayed in real time.</p>
                                <p>&nbsp;The archive is a visualization of the F1 API database and presents all races,
                                    race results, times, driver positions, and who set the fastest lap.
                                    Only the necessary data for displaying the results is fetched from the API,
                                    and it is initiated only after selecting a specific date or specific race.</p>

                                <div className='what-i-learned-f1-mobile'>
                                    <br />
                                    {/* <p>Dzięki temu projektowi nauczyłem się:</p>
                                    <br />
                                    <ul>
                                        <li>pracować z API stałym, jak i zmieniającym się w czasie</li>
                                        <li>mapowania po elementach API</li>
                                        <li>tworzyć wzory ogólne dla pobieranych danych</li>
                                        <li>weryfikacji otrzymanych danych i obsługi błędów</li>
                                        <li>podstawowej obsługi Postman'a</li>
                                        <li>warunkowego renderowania elementów z pobranymi danymi</li>
                                        <li>tworzenia responsywności na potrzeby mniejszych lub większych ekranów</li>
                                        <li>tworzenia lokalnych baz danych w celu przedstawiania ich na stronie</li>
                                        <li>organizacji plików w aplikacji</li>
                                    </ul> */}
                                    <p>Thanks to this project, I learned:</p>
                                    <br />
                                    <ul>
                                        <li>to work with both static and dynamically changing APIs</li>
                                        <li>to map through API elements</li>
                                        <li>to create general patterns for fetched data</li>
                                        <li>to verify received data and handle errors</li>
                                        <li>basic usage of Postman</li>
                                        <li>conditional rendering of elements with fetched data</li>
                                        <li>to create responsiveness for smaller or larger screens</li>
                                        <li>to create local databases for displaying them on the website</li>
                                        <li>to organize files in the application</li>
                                    </ul>

                                </div>

                            </div>
                        </>
                        : null}
                    {renderTrigger === "exchangeEverything" ?
                        <>
                            <div className="exchange-everything-image-box">
                                <img src={exchangeEverythingImg} alt="" className='exchange-everything-img' />

                            </div>
                            <div className="exchange-everything-button-box">
                                <a href='http://exchange-everything.wuaze.com/?i=1' target='_blank' rel='noreferrer'><p>Webside</p></a>
                                <a href='https://github.com/Irezumii/exchange-everythingv2.git' target='_blank' rel='noreferrer'> <p>GitHub</p></a>
                            </div>
                            <div className="what-i-learned-exchange-everything">
                                {/* <p>Ten projekt nauczył mnie:</p>
                                <ul>
                                    <li>jak prawidłowo używać Hook'ów i który najlepiej będzie pasował do konkretnego celu</li>
                                    <li>manipulować elementami DOM za pośrednictwem React</li>
                                    <li>manipulować zapytaniami do różnych API w tym samym czasie</li>
                                    <li>bardziej zaawansowanej metody fetch'owania danych</li>
                                    <li>lepiej zrozumieć zasady i sposoby warunkowego renderowania oraz pobierania danych</li>
                                    <li>używać, zarządzać i aktualizować LoacalStorage wraz ze stanem</li>
                                    <li>tworzyć i zarządzać bardziej skomplikowanymi formularzami</li>
                                    <li>kiedy stosować, używać i tworzyć nowe Hooki</li>
                                    <li>jak płyną dane wewnątrz aplikacji, jak obsługiwać te kanały którymi płyną i jak je modyfikować według własnych potrzeb</li>
                                    <li>jak optymalizować rendery i całą stronę, jak i również zapytania do API</li>
                                    <li>obsługi kluczy do API, jak je przechowywać, wysyłać i aplikować kolejne gdy skończą się ich użycia</li>
                                </ul> */}
                                <p>This project taught me:</p>
                                <ul>
                                    <li>how to properly use Hooks and which one will best suit a specific purpose</li>
                                    <li>how to manipulate DOM elements using React</li>
                                    <li>how to manipulate requests to different APIs simultaneously</li>
                                    <li>a more advanced method of data fetching</li>
                                    <li>to better understand the principles and methods of conditional rendering and data fetching</li>
                                    <li>to use, manage, and update LocalStorage along with state</li>
                                    <li>to create and manage more complex forms</li>
                                    <li>when to use, implement, and create new Hooks</li>
                                    <li>how data flows within the application, how to handle the channels through which they flow, and how to modify them according to your needs</li>
                                    <li>how to optimize renders and the entire website, as well as API requests</li>
                                    <li>handling API keys, how to store, send, and apply new ones when they run out of use</li>
                                </ul>

                            </div>
                            <div className="exchange-everything-description">
                                {/* <p>&nbsp;&nbsp;Exchange Everything, czyli strona internetowa której celem jest porównywanie wartości walut, kryptowalut oraz akcji</p>
                                <br />
                                <p>Na stronie używane są dwa różne API, eodhd dla rynku forex oraz akcji, coinLayer dla kryptowalut.
                                    Użyte klucze są darmowe, mają swoje ograniczeniami, min: liczba zapytań,dość sporye opóźnienie względem prawdziwych rynków, oraz dla CoinLayer wysyłanie w protokole http.
                                </p>
                                <br />
                                <p>Wybieramy w pierwszym formularzu pierwszą wartość, która będzie obliczona i przedstawiona w wartości drugiej.</p>
                                <p>Możemy też manipulować wymianą za pośrednictwem amount, czyli jaką liczbę wartości chcemy przyrównać.</p>
                                <p>Tabelki "Favorites" oraz historia przeglądania oparte są na LocalStorage</p>
                                <br />
                                <p>&nbsp;Najtrudniejszym w tym projekcie była dla mnie optymalizacja re-renderów, oraz pobieranie i przedstawianie danych z API tylko wtedy gdy oczekuje i jest to potrzebne</p> */}
                                <p>&nbsp;&nbsp;Exchange Everything, a website aimed at comparing the values of currencies, cryptocurrencies, and stocks.</p>
                                <br />
                                <p>Two different APIs are used on the website, EODHD for the forex and stock market, and CoinLayer for cryptocurrencies.
                                    The used keys are free, but they have their limitations, including: a minimum number of queries, a fairly large delay compared to real markets, and for CoinLayer, sending requests in the http protocol.
                                </p>
                                <br />
                                <p>In the first form, we select the first value that will be calculated and presented in the second value.</p>
                                <p>We can also manipulate the exchange rate using the amount, which determines the quantity of value we want to compare.</p>
                                <p>The "Favorites" tables and browsing history are based on LocalStorage.</p>
                                <br />
                                <p>&nbsp;The most challenging part of this project for me was optimizing re-renders, as well as fetching and presenting data from APIs only when expected and necessary.</p>

                                <div className="what-i-learned-exchange-everything-mobile">
                                    {/* <p>Ten projekt nauczył mnie:</p>
                                    <ul>
                                        <li>jak prawidłowo używać Hook'ów i który najlepiej będzie pasował do konkretnego celu</li>
                                        <li>manipulować elementami DOM za pośrednictwem React</li>
                                        <li>manipulować zapytaniami do różnych API w tym samym czasie</li>
                                        <li>bardziej zaawansowanej metody fetch'owania danych</li>
                                        <li>lepiej zrozumieć zasady i sposoby warunkowego renderowania oraz pobierania danych</li>
                                        <li>używać, zarządzać i aktualizować LoacalStorage wraz ze stanem</li>
                                        <li>tworzyć i zarządzać bardziej skomplikowanymi formularzami</li>
                                        <li>kiedy stosować, używać i tworzyć nowe Hooki</li>
                                        <li>jak płyną dane wewnątrz aplikacji, jak obsługiwać te kanały którymi płyną i jak je modyfikować według własnych potrzeb</li>
                                        <li>jak optymalizować rendery i całą stronę, jak i również zapytania do API</li>
                                        <li>obsługi kluczy do API, jak je przechowywać, wysyłać i aplikować kolejne gdy skończą się ich użycia</li>
                                    </ul> */}
                                    <p>This project taught me:</p>
                                    <ul>
                                        <li>how to properly use Hooks and which one will best suit a specific purpose</li>
                                        <li>how to manipulate DOM elements using React</li>
                                        <li>how to manipulate requests to different APIs simultaneously</li>
                                        <li>a more advanced method of data fetching</li>
                                        <li>to better understand the principles and methods of conditional rendering and data fetching</li>
                                        <li>to use, manage, and update LocalStorage along with state</li>
                                        <li>to create and manage more complex forms</li>
                                        <li>when to use, implement, and create new Hooks</li>
                                        <li>how data flows within the application, how to handle the channels through which they flow, and how to modify them according to your needs</li>
                                        <li>how to optimize renders and the entire website, as well as API requests</li>
                                        <li>handling API keys, how to store, send, and apply new ones when they run out of use</li>
                                    </ul>
                                </div>
                            </div>
                        </>
                        : null}
                </div>
                <div className='right-swipe-half'>
                    <div className="my-portfolio-code"><a href='https://github.com/Irezumii/My-Portfolio' target='_blank' rel='noreferrer'><span>My Portfolio's Code</span></a></div>
                    <div className="my-projects-box">
                        <h3>My Projects</h3>
                        <h1>My Projects</h1>
                        <Project myData={objData.hangman} swipeBox={swipeBox} onSetRenderTrigger={setRenderTrigger} />
                        <Project myData={objData.f1} swipeBox={swipeBox} onSetRenderTrigger={setRenderTrigger} />
                        <Project myData={objData.exchangeEverything} swipeBox={swipeBox} onSetRenderTrigger={setRenderTrigger} />
                    </div>
                </div>
            </div>
        </>
    )
}
