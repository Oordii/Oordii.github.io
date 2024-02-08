import { useState } from 'react'
import './App.css'

function App() {
    const [noCount, setNoCount] = useState(0)
    const messages = [
        " ",
        "Может передумаешь?",
        "Ну пожалуйста",
        "А так?",
        "Ты разбиваешь моё сердце...",
        "Абобус?",
        "Хватит! у тебя нет выбора"
    ];

    const handleNoClick = () => {
        if (noCount < 6) {
            setNoCount(noCount + 1);
            document.getElementById("valentine").src = `/${noCount + 2}.jpg`;
            document.getElementById("message").innerHTML = messages[noCount + 1];
        }

        if (noCount === 6) {
            moveButton();
        }
    }

    const handleYesClick = () => {
        document.getElementById("noButton").style.display = "none";
        document.getElementById("yesButton").style.display = "none";
        document.getElementById("valentine").src = "/yes.jpg";
        document.getElementById("valentineTitle").innerHTML = "Урааа! Люблю тебя <3";
        document.getElementById("message").innerHTML = "";
    }

    const moveButton = () => {
        if (noCount > 5) {
            const button = document.getElementById('noButton');
            const x = Math.random() * (window.innerWidth - button.offsetWidth);
            const y = Math.random() * (window.innerHeight - button.offsetHeight);
            button.style.left = `${x}px`;
            button.style.top = `${y}px`;
        }
    };

    return (
        <>
            <img id="valentine" alt="valentine" src="/1.jpg"/>
            <h1 id="valentineTitle">Будешь моей любими навсегда?</h1>
            <h2 id="message">{messages[0]}</h2>
            <div className="buttons">
                <button id="yesButton" onClick={handleYesClick}>
                    Да
                </button>
                <button id="noButton"
                    onClick={handleNoClick}
                    onMouseOver={moveButton}>
                    Нет
                </button>
            </div>
        </>
    )
}

export default App
