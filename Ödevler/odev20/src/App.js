import React, { useEffect, useState, useMemo } from 'react'
import Trivia from './components/Trivia'
import { data } from './data/data'
import Timer from './components/Timer'
import useSound from 'use-sound'
import wait from './assets/sounds/wait.mp3'

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stopGame, setStop] = useState(false)
  const [earned, setEarned] = useState('$ 0')

  const [waitPlay, { stop }] = useSound(wait)

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: '$ 100' },
        { id: 2, amount: '$ 200' },
        { id: 3, amount: '$ 300' },
        { id: 4, amount: '$ 500' },
        { id: 5, amount: '$ 1000' },
        { id: 6, amount: '$ 2000' },
        { id: 7, amount: '$ 4000' },
        { id: 8, amount: '$ 8000' },
        { id: 9, amount: '$ 16000' },
        { id: 10, amount: '$ 32000' },
        { id: 11, amount: '$ 64000' },
        { id: 12, amount: '$ 125000' },
        { id: 13, amount: '$ 250000' },
        { id: 14, amount: '$ 500000' },
        { id: 15, amount: '$ 100000' },
      ].reverse(),
    []
  )

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount)
  }, [questionNumber, moneyPyramid])

  useEffect(() => {
    stop()
  }, [stopGame])

  return (
    <div className="app">
      <div className="main">
        {stopGame ? (
          <h1 className="endText">You earned: {earned} </h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer
                  setStop={setStop}
                  questionNumber={questionNumber}
                  waitPlay={waitPlay}
                  stop={stop}
                />
              </div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setStop={setStop}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              key={m.id}
              className={
                questionNumber === m.id
                  ? 'moneyListItem active'
                  : 'moneyListItem'
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
