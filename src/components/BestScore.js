import React from 'react'

export default function BestScore(props) {
  return (
    <div className="header--score">
      <label>BEST</label>
      <span>{props.bestScore}</span>
    </div>
  )
}
