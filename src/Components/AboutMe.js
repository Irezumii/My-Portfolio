import sushiIMG from '../Assets/sushi.JPG'
import arrowImg from '../Assets/arrow.png'
import arrowHomeIMG from '../Assets/arrow-home.png'
import './AboutMe.css'

export default function AboutMe({ handleScroll }) {
    return (
        <>
            <img className='arrow-home' src={arrowHomeIMG} onClick={() => handleScroll()} alt="" />
            <img className='arrow-down' src={arrowImg} onClick={() => handleScroll("myProjects")} alt="" />
            <dic className='sushi-img-box' >
                <img className='sushi-img' src={sushiIMG} alt="" />
            </dic>
            <div className="about-me">
                <h4>About Me</h4>
                <div className='about-me-info'>
                    <p> &nbsp;&nbsp;For the past 6 years, I have been working as a chef and 'Sushi Master'.
                        Some time ago, I decided to make a change.
                        I started learning to code and I really enjoyed it.
                        For over a year now, I have dedicated every free moment to learning.</p>
                    <br />
                    {/* <p> &nbsp;&nbsp;Od 6 lat pracuje jako kucharz oraz 'SushiMaster'.
                        Jakiś czas temu postanowiłem coś zmienić. Zacząłem uczyć się
                        kodu i bardzo to polubiłem. Od ponad roku każdą wolną chwilę
                        poświęcałem na naukę.</p>
                    <br /> */}
                    <p>&nbsp;&nbsp;I am interested in both Front-End and Back-End development,
                        which is why I aim to become a Full-Stack Developer in the future.
                        I have decided to start my journey with Front-End development.</p>
                    <br />
                    {/* <p>&nbsp;&nbsp;Ciekawi mnie zarówno Front-End jak i Back-End, dlatego celuje w przyszłości by zostać Full-Stack Developerem,
                        moją podróż postanowiłem zacząć od Front-End'u</p>
                    <br /> */}
                    <h5>Hobby:</h5>
                    <br />
                    <p>&nbsp;&nbsp;My favorite way of spending free time is playing various computer games.
                        At the same time, I am interested in motorsports and sports related to it such as Drift, F1, WRC.
                    </p>
                    {/* <p>&nbsp;&nbsp;Moja ulubioną formą spedzania wolnego czasu są wszelkiego rodzaju gry komputerowe.
                        Równolegle interesuje się motoryzacją oraz sportami z nią związanymi np: Drift, F1, WRC.
                    </p> */}
                    <br />
                    <p>&nbsp;&nbsp;I love cooking. I enjoy creating new dishes using unconventional methods.</p>
                    {/* <p>&nbsp;&nbsp;Uwielbiam gotować. Samodzielnie  tworzyć nowe potrawy z użyciem niestandardowych metod.</p> */}
                </div>
            </div>
        </>
    )
}