import React, { useState, useEffect } from 'react'
import useSound from 'use-sound'
import play from '../assets/sounds/play.mp3'
import correct from '../assets/sounds/correct.mp3'
import wrong from '../assets/sounds/wrong.mp3'

function Trivia({ data, questionNumber, setQuestionNumber, setStop }) {
  const [question, setQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [className, setClassName] = useState('answer')

  const [letsPlay] = useSound(play)
  const [correctAnswer] = useSound(correct)
  const [wrongAnswer] = useSound(wrong)

  useEffect(() => {
    letsPlay()
  }, [letsPlay])

  useEffect(() => {
    setQuestion(data[questionNumber - 1])
  }, [data, questionNumber])

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback()
    }, duration)
  }

  function handleClick(a) {
    setSelectedAnswer(a)
    setClassName('answer active')
    delay(3000, () => {
      setClassName(a.correct ? 'answer correct' : 'answer wrong')
    })
    delay(6000, () => {
      if (a.correct) {
        correctAnswer()
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1)
          setSelectedAnswer(null)
        })
      } else {
        wrongAnswer()
        delay(1000, () => {
          setStop(true)
        })
      }
    })
    setTimeout(() => {
      setClassName(a.correct ? 'answer correct' : 'answer wrong')
    }, 3000)
  }

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a, idx) => {
          return (
            <div
              key={idx}
              className={selectedAnswer === a ? className : 'answer'}
              onClick={() => handleClick(a)}
            >
              {a.text}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Trivia
