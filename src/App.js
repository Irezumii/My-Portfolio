
import './App.css';
import pythonImg from './Assets/python.png'
import htmlImg from './Assets/html.png'
import cssImg from './Assets/css.png'
import javaScriptImg from './Assets/javascript.png'
import reactImg from './Assets/react.png'

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
        <div className='my-knowledge-info-box'>
          <p>My knowledge</p>
          <div className='my-knowledge-info'>
            <p> &nbsp;&nbsp;Swoją przygodę z nauką programowania zacząłem od pythona ,na bazie którego uczyłem się podstaw programowania takich jak
              <img className='python-img' src={pythonImg} alt="python-img" />
              <ul>
                <li>struktury danych(w tym też trochę bardziej zaawansowane jak Binary Search Tree czy Linked Lists)</li>
                <li>pętle</li>
                <li>iteracje</li>
                <li>instrukcje warunkowe</li>
                <li>itp.</li>
              </ul>
              &nbsp;&nbsp;Zrozumiałem bardzo dużo podstaw kierujących światem programowania jak naprzykład <ul><li>jak działają algorytmy</li><li>co to jest złożoność obliczeniowa</li><li>rekurencja</li><li>tablice hashujące</li><li>czym jest programowanie Obiektowe, co to są obiekty, klasy oraz instancje obiektów.</li></ul></p>
            <div style={{ clear: "both" }}></div>
            <p> Po zrozumianiu podstaw i zasad działania języka programowania , musiałem wbrać stronę w którą będę podążał z dalszym rozwijaniem wiedzy.
              Wybrałęm drogę fullstack developera ponieważ lubię wiedzieć wszystko co się dzieje wokół mnie czy to w projekcie czy w życiu, stwierdziłem że to będzie cięzka droga ale jednak najbardziej mi odpowiadająca.
            </p>
            <div className='html-css-js'>
              <img src={htmlImg} alt="html img" />
              <img src={cssImg} alt="css img" />
              <img src={javaScriptImg} alt="java script img" />
            </div>
            <p>Więc Html, a jak Html to i CSS oraz w międzyczasie jak działa internet
              <ul>
                <li>Co to jest internet i jak działa</li>
                <li>co to DNS</li>
                <li>Co to jest IP</li>
                <li>jak wysyłać zapytania na server</li>
                <li>jakie typy zapytań można wysyłać</li>
                <li>co się z nimi dzieje po wysłaniu</li>
                <li>protokoły http, https</li>
                <li>jak trasportowane są informacje w internecie</li>
              </ul> ... pozniej został Javascript</p>
            <br />
            <p>Odkąd poznałem podstawy Javascript'u odrazu wiedziałem że to dokładnie to co chce robić w życiu. JavaScript nauczył mnie bardzo wiele o
              <ul>
                <li>requestach</li>
                <li>asynchroniczności</li>
                <li>fetch'owaniu</li>
                <li>obsłudze API</li>
                <li>obiektach</li>
                <li>czym jest JSON</li>
                <li>jak pracować na zmiennych i stałych</li>
                <li>co to jest this, i jakie przybiera formy w zależności od kontekstu</li>
              </ul>
              <div style={{ clear: "both" }}></div>
            </p>
            <p>Czas poświęcany na naukę starałem się rozdzielać po równo pomiędzy więdzę teoretczną a pisanie własnych projektów.
              Napisałem ich wiele, mniejszych czy większych i poznając nową technologie, czy nowy sposób upraszaczania czegoś starałem się zawsze wracać do poprzednich projektów i implementować te nową wiedzę we wcześniej napisane już projekty.</p>
            <br />
            <p>Czując się już w miarę pewnie w Vanilla JavaScript zacząłem się uczyć bilbioteki React. Bardzo mi się ona spodobała,a zwłaszcza problemy które rozwiązuje i rzeczy które upraszacza w porównaniu do Vanilla Javascript</p>
            <img src={reactImg} alt="react img" className='react-img' />
            <p>Dowiedziałem się jeszcze więcej o
              <ul className='ul-react'>
                <li>asynchroniczności</li>
                <li>tym jak są przesyłane dane wewnątrz aplikacji "data flow"</li>
                <li>State'ach oraz props'ach, kiedy elementy są re-renderowane przy prostej zmianie stanu/props'ów a kiedy trzeba użyc "deep copy"</li>
                <li>Hook'ach Wbudowanych oraz tych customowych</li>
                <li>Optymalizacji strony w kontekście pobierania danych i ograniczeń niepotrzebnych re-renderowań</li>
                <br />
                <p>Zrozumiałem również jak ważne są :</p>
                <li>destrukturyzacja</li>
                <li>mapowanie i jak bardzo ułatwia to prace i poprawia czytelność kodu</li>
                <li>cookie's oraz local storage, kiedy je się stosuje oraz jakie mają mocne i słabe strony</li>
                <br />
                <p>Poznałem też bliżej jak działa sam React :</p>
                <li>co to jest Reconciler i dlaczego jest nazywany "silnikiem" reacta</li>
                <li>co to i jak działa fiber tree oraz jego pojedyńcze fiber'y</li>
                <li>fazy renderowania reacta od wprowadzenia inputu aż po browser paint</li>
                <li>side effect i jak działają</li>
                <li>kiedy powinno się używać local state a kiedy global state, a kiedy użyć "derived state"</li>
                <li>sposób kierowania danych w react "one way data flow"</li>
              </ul>
            </p>
            <p>Po tym jak zacząłem sie czuć już w miarte swobodnie w react, przepisałem do React'a dwa moim zdaniem najlepsze projekty które zrobiłem i stworzyłem jeden projekt od zera (exchange everything). wszystkie te projekty znajdują się w moim portfolio</p>
            <br />
            <p>Cały czas sie rozwijam ,uczę się zawsze jak mam wolny czas. Jestem w pełni zaangażowany żeby zostać dobrym programistą i robić to co sprawaia mi tyle przyjemności. Czyli programować</p>
          </div>
        </div>


      </div>
    </>
  );
}

export default App;
