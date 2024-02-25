import bookImg from '../Assets/book.png'
import pythonImg from '../Assets/python.png'
import htmlImg from '../Assets/html.png'
import cssImg from '../Assets/css.png'
import javaScriptImg from '../Assets/javascript.png'
import reactImg from '../Assets/react.png'
import arrowHomeIMG from '../Assets/arrow-home.png'
import './MyKnowledge.css'

export default function MyKnowledge({handleScroll}) {
    return (
        <>
            <img className='arrow-home' src={arrowHomeIMG} onClick={() => handleScroll()} alt="" />
            <div className='my-knowledge-info-box'>
                <div className='my-knowledge-header-box'>
                    <h1>My knowledge</h1>
                    <img src={bookImg} alt="book-img" />
                </div>
                <div className='my-knowledge-info'>
                    {/* <p> &nbsp;&nbsp;Swoją przygodę z nauką programowania zacząłem od pythona ,z którym poznawałem podstawy programowania jak na przykład:
              <img className='python-img' src={pythonImg} alt="python-img" />
              <ul>
                <li>struktury danych(w tym też trochę bardziej zaawansowane jak Binary Search Tree czy Linked Lists)</li>
                <li>pętle</li>
                <li>iteracje</li>
                <li>instrukcje warunkowe</li>
                <li>itp.</li>
              </ul>
              &nbsp;&nbsp;Przyswoiłem również trochę podstawowej wiedzy teoretycznej:<ul><li>jak działają algorytmy</li><li>co to jest złożoność obliczeniowa</li><li>rekurencja</li><li>tablice hashujące</li><li>czym jest programowanie Obiektowe, co to są obiekty, klasy oraz instancje obiektów.</li></ul></p>
            <div style={{ clear: "both" }}></div>
            <p> Po zrozumianiu podstaw i zasad działania języka programowania , określiłem sobie jasny cel którym jest full-stack developer.
              Lubię wiedzieć jak coś działa i z frontu i z zaplecza, to taka moja strefa komfortu. Frustruje mnie jeśli trafiam na coś czego nie rozumiem ,
              z reguły wtedy staram się to najpierw zrozumieć a dopiero później rozwiązywać dany problem. Ale musiałem od czegoś najpierw czacząć ,więc zacząłem od front-end'u
            </p>
            <div className='html-css-js'>
              <img src={htmlImg} alt="html img" />
              <img src={cssImg} alt="css img" />
              <img src={javaScriptImg} alt="java script img" />
            </div>
            <p>Więc Html, a jak Html to i CSS oraz w międzyczasie jak działa internet
              ... pozniej został Javascript</p>
            <br />
            <p>Odkąd poznałem podstawy Javascript'u odrazu wiedziałem że to dokładnie to co chce robić w życiu. Pozwolił mi zrozumieć takie zagadnienia jak np:
              <ul>
                <li>requesty</li>
                <li>asynchroniczność</li>
                <li>fetch</li>
                <li>API oraz jego obsługę</li>
                <li>obiekty</li>
                <li>JSON i jak na nim pracować</li>
                <li>zmienne i stałe, niemutowalność, ich zakresy</li>
                <li>this, i jakie przybiera formy w zależności od kontekstu</li>
              </ul>
            </p>
            <p>Czas poświęcany na naukę starałem się rozdzielać po równo pomiędzy więdzę teoretczną a pisanie własnych projektów.
              Napisałem ich wiele, mniejszych czy większych i poznając nową technologie, czy nowy sposób upraszaczania czegoś starałem się zawsze do nich wracać i implementować nową wiedzę.</p>
            <br />
              <div style={{ clear: "both" }}></div>
            <p>Czując się już w miarę pewnie w Vanilla JavaScript zacząłem się uczyć bilbioteki React. Bardzo mi się ona spodobała,a zwłaszcza problemy które rozwiązuje i rzeczy które upraszacza</p>
            <img src={reactImg} alt="react img" className='react-img' />
            <p>Dowiedziałem się jeszcze więcej o:
              <ul className='ul-react'>
                <li>asynchroniczności</li>
                <li>tym jak są przesyłane dane wewnątrz aplikacji "data flow"</li>
                <li>State'ach oraz props'ach, kiedy elementy są re-renderowane przy prostej zmianie stanu/props'ów a kiedy trzeba użyc "deep copy"</li>
                <li>Hook'ach Wbudowanych oraz tych customowych</li>
                <li>Optymalizacji strony w kontekście pobierania danych i re-renderowań</li>
                <br />
                <p>Zrozumiałem również jak ważne są:</p>
                <li>destrukturyzacja</li>
                <li>mapowanie i jak bardzo ułatwia to prace i poprawia czytelność kodu</li>
                <li>cookie's oraz local storage, kiedy je się stosuje oraz jakie mają mocne i słabe strony</li>
                <br />
                <p>Poznałem też bliżej jak działa sam React:</p>
                <li>co to jest Reconciler i dlaczego jest nazywany "silnikiem" reacta</li>
                <li>fiber tree, czym jest i jak jest zbudowane</li>
                <li>fazy renderowania reacta od wprowadzenia inputu aż po browser paint</li>
                <li>side effect i jak działają</li>
                <li>kiedy powinno się używać local state a kiedy global state, kiedy użyć "derived state"</li>
                <li>sposób kierowania danych w react "one way data flow"</li>
              </ul>
            </p>
            <p>Po tym jak zacząłem sie czuć już w miarte swobodnie w react, przepisałem dwa moim zdaniem najlepsze projekty które zrobiłem i stworzyłem jeden projekt od zera (wszystkie projekty są opisane w "My Projects").</p>
            <br />
            <p>Cały czas sie rozwijam ,uczę się zawsze jak mam wolny czas. Jestem w pełni zaangażowany żeby zostać dobrym programistą i robić to co sprawaia mi tyle przyjemności. Czyli programować</p> */}
                    <p> &nbsp;&nbsp;I began my programming journey with Python, where I learned the basics of programming, such as:
                        <img className='python-img' src={pythonImg} alt="python-img" />
                        <ul>
                            <li>data structures (including more advanced ones like Binary Search Tree or Linked Lists)</li>
                            <li>loops</li>
                            <li>iterations</li>
                            <li>conditional statements</li>
                            <li>etc.</li>
                        </ul>
                        &nbsp;&nbsp;I also acquired some basic theoretical knowledge:<ul><li>how algorithms work</li><li>what computational complexity is</li><li>recursion</li><li>hash tables</li><li>what Object-Oriented Programming is, what objects, classes, and object instances are.</li></ul></p>
                    <div style={{ clear: "both" }}></div>
                    <p> After understanding the basics and principles of programming, I set myself a clear goal of becoming a full-stack developer.
                        I like to know how things work both on the front end and back end; it's my comfort zone. It frustrates me when I encounter something I don't understand; usually, I try to understand it first and then solve the problem. But I had to start somewhere, so I began with front-end development.
                    </p>
                    <div className='html-css-js'>
                        <img src={htmlImg} alt="html img" />
                        <img src={cssImg} alt="css img" />
                        <img src={javaScriptImg} alt="java script img" />
                    </div>
                    <p>So, HTML, and with HTML comes CSS, and in the meantime, how the internet works
                        ... and then came JavaScript</p>
                    <br />
                    <p>Since I learned the basics of JavaScript, I immediately knew it was exactly what I wanted to do in life. It allowed me to understand concepts such as:
                        <ul>
                            <li>requests</li>
                            <li>asynchronicity</li>
                            <li>fetch</li>
                            <li>API and its handling</li>
                            <li>objects</li>
                            <li>JSON and how to work with it</li>
                            <li>variables and constants, immutability, their scopes</li>
                            <li>this, and its different forms depending on context</li>
                        </ul>
                    </p>
                    <p>I tried to divide my learning time evenly between theoretical knowledge and writing my own projects. I wrote many of them, smaller or larger, and as I learned new technologies or new ways of simplifying something, I always tried to go back to them and implement new knowledge.</p>
                    <br />
                    <div style={{ clear: "both" }}></div>
                    <p>Feeling relatively comfortable with Vanilla JavaScript, I started learning the React library. I liked it a lot, especially the problems it solves and the things it simplifies</p>
                    <img src={reactImg} alt="react img" className='react-img' />
                    <p>I learned even more about:
                        <ul className='ul-react'>
                            <li>asynchronicity</li>
                            <li>how data flows within the application "data flow"</li>
                            <li>States and props, when elements are re-rendered with a simple change of state/props and when "deep copy" is required</li>
                            <li>Built-in and custom Hooks</li>
                            <li>Optimizing the page regarding data fetching and re-renders</li>
                            <br />
                            <p>I also understood how important:</p>
                            <li>destructuring is</li>
                            <li>mapping and how much it simplifies work and improves code readability</li>
                            <li>cookie's and local storage, when to use them, and their strengths and weaknesses</li>
                            <br />
                            <p>I also got to know more about how React works:</p>
                            <li>what Reconciler is and why it is called the "engine" of React</li>
                            <li>fiber tree, what it is and how it is built</li>
                            <li>react rendering phases from introducing input to browser paint</li>
                            <li>side effect and how they work</li>
                            <li>when to use local state and when global state, when to use "derived state"</li>
                            <li>how data is directed in react "one way data flow"</li>
                        </ul>
                    </p>
                    <p>After feeling somewhat comfortable with React, I rewrote two of my best projects and created one project from scratch (all projects are described in "My Projects").</p>
                    <br />
                    <p>I am constantly developing, learning whenever I have free time. I am fully committed to becoming a good programmer and doing what gives me so much pleasure. Which is programming</p>

                </div>
            </div>
        </>
    )
}