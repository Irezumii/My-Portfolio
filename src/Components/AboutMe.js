import sushiIMG from '../Assets/sushi.JPG'
import arrowImg from '../Assets/arrow.png'
import arrowHomeIMG from '../Assets/arrow-home.png'

import './AboutMe.css'



export default function AboutMe({ handleScroll }) {
    return (
        // <div className="full-page-box">
        <>
            <img className='arrow-home' src={arrowHomeIMG} onClick={() => handleScroll()} alt="" />
            <img className='arrow-down' src={arrowImg} onClick={() => handleScroll("myProjects")} alt="" />
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
        </>
        // </div>
    )
}