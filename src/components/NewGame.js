import React from 'react'

export default function NewGame(props) {
  return (
    <button className="secondary-btn" onClick={props.onResetGame}>
      New Game
    </button>
  )
}
