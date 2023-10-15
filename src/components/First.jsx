import React, { useState } from "react";
import Third from "./Third";
import AlertModal from "./AlertModal";
import { Link } from 'react-router-dom';
import "../style/style.css";

export const First = () => {

    //https://opentdb.com/api.php?amount=10&category=23

    // let questions = "https://opentdb.com/api.php?amount=10&category=23";
    const [showFinalResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    const [wrongans, setWrongAns] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answeredQues, setAnsweredQues] = useState(0);
    const [convertButton, setConvertButton] = useState("Next");
    const [showAlertModal, setShowAlertModal] = useState(false);


    const Alert = () => setShowResults(true);


    const questions = [
        {
            "text": "Which planet is known as the 'Red Planet'?",
            "options": [
                { "id": 0, "text": "Earth", "isCorrect": false },
                { "id": 1, "text": "Venus", "isCorrect": false },
                { "id": 2, "text": "Mars", "isCorrect": true },
                { "id": 3, "text": "Jupiter", "isCorrect": false }
            ]
        },
        {
            "text": "What is the largest planet in our solar system?",
            "options": [
                { "id": 0, "text": "Earth", "isCorrect": false },
                { "id": 1, "text": "Mars", "isCorrect": false },
                { "id": 2, "text": "Saturn", "isCorrect": false },
                { "id": 3, "text": "Jupiter", "isCorrect": true }
            ]
        },
        {
            "text": "Which celestial body is often referred to as Earth's natural satellite?",
            "options": [
                { "id": 0, "text": "Mars", "isCorrect": false },
                { "id": 1, "text": "Venus", "isCorrect": false },
                { "id": 2, "text": "The Moon", "isCorrect": true },
                { "id": 3, "text": "Jupiter", "isCorrect": false }
            ]
        },
        {
            "text": "What is the closest star to Earth?",
            "options": [
                { "id": 0, "text": "Venus", "isCorrect": false },
                { "id": 1, "text": "Jupiter", "isCorrect": false },
                { "id": 2, "text": "The Sun", "isCorrect": true },
                { "id": 3, "text": "Mars", "isCorrect": false }
            ]
        },
        {
            "text": "Which planet has the largest number of moons in our solar system?",
            "options": [
                { "id": 0, "text": "Earth", "isCorrect": false },
                { "id": 1, "text": "Mars", "isCorrect": false },
                { "id": 2, "text": "Saturn", "isCorrect": true },
                { "id": 3, "text": "Jupiter", "isCorrect": false }
            ]
        },
        {
            "text": "What is the name of the first human to walk on the Moon?",
            "options": [
                { "id": 0, "text": "Neil Armstrong", "isCorrect": true },
                { "id": 1, "text": "Buzz Aldrin", "isCorrect": false },
                { "id": 2, "text": "John Glenn", "isCorrect": false },
                { "id": 3, "text": "Alan Shepard", "isCorrect": false }
            ]
        },
        {
            "text": "Which space agency launched the Hubble Space Telescope?",
            "options": [
                { "id": 0, "text": "NASA", "isCorrect": true },
                { "id": 1, "text": "ESA", "isCorrect": false },
                { "id": 2, "text": "Roscosmos", "isCorrect": false },
                { "id": 3, "text": "CNSA", "isCorrect": false }
            ]
        },
        {
            "text": "What is the name of the largest volcano in the solar system, located on Mars?",
            "options": [
                { "id": 0, "text": "Mount Kilimanjaro", "isCorrect": false },
                { "id": 1, "text": "Mauna Loa", "isCorrect": false },
                { "id": 2, "text": "Olympus Mons", "isCorrect": true },
                { "id": 3, "text": "Mount Vesuvius", "isCorrect": false }
            ]
        },
        {
            "text": "What is the name of the spacecraft that first landed humans on the Moon in 1969?",
            "options": [
                { "id": 0, "text": "Apollo 11", "isCorrect": true },
                { "id": 1, "text": "Gemini 7", "isCorrect": false },
                { "id": 2, "text": "Mercury 3", "isCorrect": false },
                { "id": 3, "text": "Voyager 2", "isCorrect": false }
            ]
        },
        {
            "text": "Which gas is the most abundant in Earth's atmosphere?",
            "options": [
                { "id": 0, "text": "Carbon dioxide (CO2)", "isCorrect": false },
                { "id": 1, "text": "Nitrogen (N2)", "isCorrect": true },
                { "id": 2, "text": "Oxygen (O2)", "isCorrect": false },
                { "id": 3, "text": "Argon (Ar)", "isCorrect": false }
            ]
        },
        {
            "text": "What is the name of the space telescope launched by the European Space Agency (ESA) in 2009?",
            "options": [
                { "id": 0, "text": "Kepler Space Telescope", "isCorrect": false },
                { "id": 1, "text": "James Webb Space Telescope", "isCorrect": false },
                { "id": 2, "text": "Hubble Space Telescope", "isCorrect": false },
                { "id": 3, "text": "Planck Space Telescope", "isCorrect": true }
            ]
        },
        {
            "text": "What is the name of the first artificial satellite, launched by the Soviet Union in 1957?",
            "options": [
                { "id": 0, "text": "Sputnik 1", "isCorrect": true },
                { "id": 1, "text": "Explorer 1", "isCorrect": false },
                { "id": 2, "text": "Vostok 1", "isCorrect": false },
                { "id": 3, "text": "Telstar 1", "isCorrect": false }
            ]
        },
        {
            "text": "Which planet in our solar system is known for its beautiful rings?",
            "options": [
                { "id": 0, "text": "Mars", "isCorrect": false },
                { "id": 1, "text": "Earth", "isCorrect": false },
                { "id": 2, "text": "Venus", "isCorrect": false },
                { "id": 3, "text": "Saturn", "isCorrect": true }
            ]
        },
        {
            "text": "What is the name of the galaxy that includes our solar system?",
            "options": [
                { "id": 0, "text": "Andromeda Galaxy", "isCorrect": false },
                { "id": 1, "text": "Milky Way Galaxy", "isCorrect": true },
                { "id": 2, "text": "Whirlpool Galaxy", "isCorrect": false },
                { "id": 3, "text": "Triangulum Galaxy", "isCorrect": false }
            ]
        },
        {
            "text": "How many moons does Earth have?",
            "options": [
                { "id": 0, "text": "0", "isCorrect": false },
                { "id": 1, "text": "1", "isCorrect": false },
                { "id": 2, "text": "2", "isCorrect": true },
                { "id": 3, "text": "3", "isCorrect": false }
            ]
        },
        {
            "text": "What is the name of the mission that successfully landed the rover 'Perseverance' on Mars?",
            "options": [
                { "id": 0, "text": "Mars Odyssey", "isCorrect": false },
                { "id": 1, "text": "Mars Reconnaissance Orbiter", "isCorrect": false },
                { "id": 2, "text": "Mars Science Laboratory", "isCorrect": false },
                { "id": 3, "text": "Mars 2020", "isCorrect": true }
            ]
        },
        {
            "text": "Which planet is sometimes referred to as the 'Morning Star' or 'Evening Star'?",
            "options": [
                { "id": 0, "text": "Jupiter", "isCorrect": false },
                { "id": 1, "text": "Venus", "isCorrect": true },
                { "id": 2, "text": "Mars", "isCorrect": false },
                { "id": 3, "text": "Saturn", "isCorrect": false }
            ]
        },
        {
            "text": "What is the name of the mission that first reached Pluto and provided close-up images of the dwarf planet?",
            "options": [
                { "id": 0, "text": "Cassini-Huygens", "isCorrect": false },
                { "id": 1, "text": "New Horizons", "isCorrect": true },
                { "id": 2, "text": "Voyager 1", "isCorrect": false },
                { "id": 3, "text": "Pioneer 10", "isCorrect": false }
            ]
        },
        {
            "text": "Which gas makes up the majority of Jupiter's atmosphere?",
            "options": [
                { "id": 0, "text": "Oxygen (O2)", "isCorrect": false },
                { "id": 1, "text": "Methane (CH4)", "isCorrect": false },
                { "id": 2, "text": "Hydrogen (H2)", "isCorrect": true },
                { "id": 3, "text": "Nitrogen (N2)", "isCorrect": false }
            ]
        }
    ];


    const optionClicked = (isCorrect) => {
        console.log("Entered function");
        // Increment the score
        if (currentQuestion >= answeredQues) {
            setAnsweredQues(answeredQues + 1);
            if (isCorrect) {
                setScore(score + 1);
            }
            if (!isCorrect) {
                setWrongAns(wrongans + 1);
            }
            if(currentQuestion === questions.length - 2){
                setConvertButton("Submit");
            }
            if(currentQuestion === questions.length - 1){
                setShowAlertModal(true);  
            }
            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1);
            } 
            else {
                setShowResults(true);
            }
        }

        setCurrentQuestion(currentQuestion + 1);

    };

    /* Resets the game back to default */
    const restartGame = () => {
        setScore(0);
        setWrongAns(0);
        setCurrentQuestion(0);
        setAnsweredQues(0);
        setShowResults(false);
        setConvertButton("Next");
        setShowAlertModal(false);
    };

    const Previous = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }
    const Next = () => {
        if (currentQuestion < questions.length) {
            if (currentQuestion === questions.length - 2) {
                setConvertButton("Submit");
            }
            if (currentQuestion === questions.length - 1) {
                setShowAlertModal(true);   
            }
            else {
                setCurrentQuestion(currentQuestion + 1);
            }
        }
    }

    const closeAlert = () => setShowAlertModal(false)

    return (
        <>
            {showFinalResults ? <Third questions={questions} restartGame={restartGame} score={score} wrongans={wrongans} currentQuestion={currentQuestion}/>
                :
                <div className="quiz-app-UI-design">
                    <div className="div1">
                        <div className="overlap1">
                            <div className="rectangle" />
                            <div className="ellipse1" />
                            <div className="ellipse1-2" />
                            <div className="ellipse1-3" />

                            <Link to="/">
                                <svg className="frame1" width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.6461 23.6604L16.5561 24.6771C16.0945 25.1076 15.3482 25.1076 14.8915 24.6771L5.34617 15.7786C4.88461 15.3481 4.88461 14.6519 5.34617 14.226L14.8915 5.32288C15.3531 4.89237 16.0994 4.89237 16.5561 5.32288L17.6461 6.33959C18.1126 6.77467 18.1028 7.48454 17.6265 7.91046L11.7097 13.1681H25.8216C26.4746 13.1681 27 13.6581 27 14.2672V15.7328C27 16.3419 26.4746 16.8319 25.8216 16.8319H11.7097L17.6265 22.0895C18.1077 22.5155 18.1175 23.2253 17.6461 23.6604Z" fill="white" fillOpacity="0.9" />
                                </svg>

                            </Link>

                            <div className="ellipse1-4" />
                            <div className="rectangle1-2" />
                            <div className="group1">
                                <div className="overlap-group1">

                                    <svg className="img1" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M57 28.5C57 44.2401 44.2401 57 28.5 57C12.7599 57 0 44.2401 0 28.5C10 28.5 28.5 20 28.5 0C44.2401 0 57 12.7599 57 28.5Z" fill="#FEB005" />
                                    </svg>
                                    <div className="ellipse1-5" />
                                    <div className="text-wrapper1">{currentQuestion + 1}</div>
                                </div>
                            </div>
                            <div className="rectangle1-3" />
                            <div className="rectangle1-4" />
                            <div className="text-wrapper1-2">{score}</div>
                            <div className="text-wrapper1-3">Question {currentQuestion + 1}/{questions.length}</div>
                            <div className="quiz-score flex">
                                <span idname="correct-score"></span>/<span idname="total-question"></span>
                            </div>
                            <p className="how-many-students-in1">
                                {questions[currentQuestion].text}
                            </p>
                            <div className="text-wrapper1-4">{wrongans}</div>

                            <ul className="quiz-options">
                                {questions[currentQuestion].options.map((option) => {
                                    return (
                                        <li
                                            key={option.id}
                                            onClick={() => optionClicked(option.isCorrect)}
                                        >
                                            {option.text}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="btnBox">
                                <button className="btn" onClick={Previous}>Previous</button>
                                <button type="button" className="btnP" onClick={Next}>{convertButton}</button>

                            </div>
                        </div>

                    </div>
                    {showAlertModal && <AlertModal Alert = {Alert} closeAlert={closeAlert}/>}
                </div>

            }
        </>



    );
};

export default First;