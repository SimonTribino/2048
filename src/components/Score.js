import React from 'react'

export default function Score(props) {
  return (
    <div className="header--score">
      <label>SCORE</label>
      <span>{props.score}</span>
    </div>
  )
}
