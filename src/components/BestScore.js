import React from 'react'

export default function BestScore(props) {
  return (
    <div className="score flex-container flex-column">
      <label>BEST</label>
      <span className="score-value">{props.bestScore}</span>
    </div>
  )
}
