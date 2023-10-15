import React from 'react';
import "../style/Review.css";

function Review({ currentQuestion, score, questions, wrongans, closeReview, option, showReview }) {
    return (
        <>
        <div className={`main ${showReview ? 'show' : ''}`}>
            {console.log("Entered Review page")}
            <div className="page">
                <h1 className='Heading'>Review Page</h1>
                <br />
                <div>
                {questions.map((question, index) => (
                    <div key={index}>
                        <p>{question.text}</p>
                        <ul>
                            {question.options.map((option, optionIndex) => (
                                <li key={optionIndex}
                                style={{
                                    color: option.isCorrect ? 'green' : 'black',
                                  }}
                                >
                                    {option.text}
                                    {option.isCorrect && <span> (Correct)</span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            </div>
            <div className="btnBox">
                <button onClick={closeReview} className='btn'>Exit</button>
            </div>

            </div>

        </>
    )
}

export default Review