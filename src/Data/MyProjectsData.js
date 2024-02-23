import padIMG from '../Assets/pad.png'
import f1LogoIMG from '../Assets/f1-logo.png'
import currencyIMG from '../Assets/currency.png'

export const objData = {
    "hangman": {
        "img": padIMG,
        "imgClass": "pad-img",
        "title": "Hangman Game",
        "technologies": {
            "first": "JavaScript",
            "secound": "HTML",
            "third": "CSS",
        },
        "description": "Prosta gra w wisielca z losowo wybieranym zbiorem haseł. Stylizowana na grę na tablicy szkolnej",
        "codeLink": "https://github.com/Irezumii/hangman-react.git",
        "siteLink": "https://hangman-react-tau.vercel.app/",
        "aboutTrigger": "hangman"
    },
    "f1": {
        "img": f1LogoIMG,
        "imgClass": "f1-img",
        "title": "F1 Data",
        "technologies": {
            "first": "React",
            "secound": "HTML",
            "third": "CSS",
        },
        "description": "Strona o F1 zawierająca na bierząco aktualizowany ranking kierowców i zespołów, oraz archiwum wszystkich wyścigów od 1950 roku",
        "codeLink": "https://github.com/Irezumii/f1-react-webside.git",
        "siteLink": "https://f1-react-webside.vercel.app/",
        "aboutTrigger": "f1"
    },
    "exchangeEverything": {
        "img": currencyIMG,
        "imgClass": "currency-img",
        "title": "Exchange Everything",
        "technologies": {
            "first": "React",
            "secound": "HTML",
            "third": "CSS",
        },
        "description": "Strona używająca różnych API oraz obliczeń pozwalająca na dowolne porównanie wartości Walut , Kryptowalut oraz Akcji w dowolnej kombinacji",
        "codeLink": "https://github.com/Irezumii/exchange-everythingv2",
        "siteLink": "http://exchange-everything.wuaze.com/?i=1",
        "aboutTrigger": "exchangeEverything"    },
}