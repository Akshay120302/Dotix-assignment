import React, { useState } from "react";
import Third from "./Third";
import { Link } from 'react-router-dom';
import "../style/style.css";

export const First = () => {

    //https://opentdb.com/api.php?amount=10&category=23

    // let questions = "https://opentdb.com/api.php?amount=10&category=23";
    const [showFinalResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    const [wrongans , setWrongAns] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
            text: "What is the capital of America?",
            options: [
                { id: 0, text: "New York City", isCorrect: false },
                { id: 1, text: "Boston", isCorrect: false },
                { id: 2, text: "Santa Fe", isCorrect: false },
                { id: 3, text: "Washington DC", isCorrect: true },
            ],
        },
        {
            text: "What year was the Constitution of America written?",
            options: [
                { id: 0, text: "1787", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
            ],
        },
        {
            text: "Who was the second president of the US?",
            options: [
                { id: 0, text: "John Adams", isCorrect: true },
                { id: 1, text: "Paul Revere", isCorrect: false },
                { id: 2, text: "Thomas Jefferson", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
            ],
        },
        {
            text: "What is the largest state in the US?",
            options: [
                { id: 0, text: "California", isCorrect: false },
                { id: 1, text: "Alaska", isCorrect: true },
                { id: 2, text: "Texas", isCorrect: false },
                { id: 3, text: "Montana", isCorrect: false },
            ],
        },
        {
            text: "Which of the following countries DO NOT border the US?",
            options: [
                { id: 0, text: "Canada", isCorrect: false },
                { id: 1, text: "Russia", isCorrect: true },
                { id: 2, text: "Cuba", isCorrect: true },
                { id: 3, text: "Mexico", isCorrect: false },
            ],
        },
    ];


    const optionClicked = (isCorrect) => {
        // Increment the score
        if (isCorrect) {
            setScore(score + 1);
        }

        if(!isCorrect){
            setWrongAns(wrongans+1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    /* Resets the game back to default */
    const restartGame = () => {
        setScore(0);
        setWrongAns(0);
        setCurrentQuestion(0);
        setShowResults(false);
    };

    const Previous = (isCorrect) =>{
        if(currentQuestion>0){
            setCurrentQuestion(currentQuestion-1);
            // if(isCorrect){
            // setScore(score-1);
            // }
            // else{
            //     setWrongAns(wrongans-1);
            // }
        }
    }
    const Next = () =>{
        if(currentQuestion<questions.length){
            if(currentQuestion === questions.length-1){
                setShowResults(true);
                }
                else{
                    setCurrentQuestion(currentQuestion+1);
                }
        }
    }

    return (
        <>
            {showFinalResults ? <Third questions ={questions} restartGame = {restartGame}  score = {score} wrongans = {wrongans}/>
            // {showFinalResults && <Third questions ={questions} restartGame = {restartGame}  score = {score}/>}
                :
                <div className="quiz-app-UI-design">
                    <div className="div1">
                        <div className="overlap1">
                            <div className="rectangle" />
                            <div className="ellipse1" />
                            <div className="ellipse1-2" />
                            <div className="ellipse1-3" />
                            {/* <img className="frame" alt="Frame" src="#" /> */}

                            <Link to="/">
                                <svg className="frame1" width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.6461 23.6604L16.5561 24.6771C16.0945 25.1076 15.3482 25.1076 14.8915 24.6771L5.34617 15.7786C4.88461 15.3481 4.88461 14.6519 5.34617 14.226L14.8915 5.32288C15.3531 4.89237 16.0994 4.89237 16.5561 5.32288L17.6461 6.33959C18.1126 6.77467 18.1028 7.48454 17.6265 7.91046L11.7097 13.1681H25.8216C26.4746 13.1681 27 13.6581 27 14.2672V15.7328C27 16.3419 26.4746 16.8319 25.8216 16.8319H11.7097L17.6265 22.0895C18.1077 22.5155 18.1175 23.2253 17.6461 23.6604Z" fill="white" fillOpacity="0.9" />
                                </svg>

                            </Link>

                            <div className="ellipse1-4" />
                            <div className="rectangle1-2" />
                            <div className="group1">
                                <div className="overlap-group1">
                                    {/* <img className="img" alt="Ellipse" src="#" /> */}
                                    <svg className="img1" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M57 28.5C57 44.2401 44.2401 57 28.5 57C12.7599 57 0 44.2401 0 28.5C10 28.5 28.5 20 28.5 0C44.2401 0 57 12.7599 57 28.5Z" fill="#FEB005" />
                                    </svg>
                                    <div className="ellipse1-5" />
                                    <div className="text-wrapper1">{currentQuestion+1}</div>
                                </div>
                            </div>
                            <div className="rectangle1-3" />
                            <div className="rectangle1-4" />
                            <div className="text-wrapper1-2">{score}</div>
                            <div className="text-wrapper1-3">Question {currentQuestion + 1}/{questions.length}</div>
                            <div className="quiz-score flex">
                                <span idName="correct-score"></span>/<span idName="total-question"></span>
                            </div>
                            <p className="how-many-students-in1">
                                {questions[currentQuestion].text}
                            </p>
                            <div className="text-wrapper1-4">{wrongans}</div>
                            {/* <img className="vector" alt="Vector" src="#" /> */}
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
                                <button type="button" className="btnP" onClick={Next}>Next</button>

                            </div>
                        </div>

                    </div>
                </div>

            }
        </>



    );
};

export default First;