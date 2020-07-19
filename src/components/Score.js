import React from 'react'

export default function Score(props) {
  return (
    <div className="score flex-container flex-column">
      <label>SCORE</label>
      <span className="score-value">{props.score}</span>
    </div>
  )
}
