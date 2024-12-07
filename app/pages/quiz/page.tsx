'use client'

import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Quiz: React.FC = () => {
    const questions = [
        {
            question: 'Who directed the first Star Wars movie?',
            options: [
                'George Lucas',
                'Steven Spielberg',
                'J.J. Abrams',
                'James Cameron'
            ],
            answer: 'George Lucas'
        },
        {
            question: 'What is the name of Han Solo’s ship?',
            options: [
                'X-Wing',
                'TIE Fighter',
                'Millennium Falcon',
                'Star Destroyer'
            ],
            answer: 'Millennium Falcon'
        },
        {
            question: 'What is the name of Luke Skywalker’s home planet?',
            options: ['Tatooine', 'Endor', 'Hoth', 'Naboo'],
            answer: 'Tatooine'
        }
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)

    const handleAnswer = (option: string) => {
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1)
        }
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowResult(true)
        }
    }

    const restartQuiz = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowResult(false)
    }

    return (
        <div
            style={{
                paddingTop: '60px',
                paddingBottom: '40px',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center'
            }}
        >
            <Header />
            <div style={{ padding: '20px' }}>
                <h1>Star Wars Quiz</h1>
                {showResult ? (
                    <div>
                        <h2>
                            Your Score: {score}/{questions.length}
                        </h2>
                        <button
                            onClick={restartQuiz}
                            style={{
                                padding: '10px 20px',
                                fontSize: '16px',
                                cursor: 'pointer',
                                backgroundColor: '#333',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                                marginTop: '20px'
                            }}
                        >
                            Restart Quiz
                        </button>
                    </div>
                ) : (
                    <div>
                        <h2>{questions[currentQuestion].question}</h2>
                        <div style={{ marginTop: '20px' }}>
                            {questions[currentQuestion].options.map(
                                (option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswer(option)}
                                        style={{
                                            display: 'block',
                                            margin: '10px auto',
                                            padding: '10px 20px',
                                            fontSize: '16px',
                                            cursor: 'pointer',
                                            backgroundColor: '#333',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '4px'
                                        }}
                                    >
                                        {option}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Quiz
