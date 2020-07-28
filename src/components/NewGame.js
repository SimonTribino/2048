import React from 'react'

export default function NewGame(props) {
  return (
    <button className="header--new_game" onClick={props.onResetGame}>
      New Game
    </button>
  )
}
