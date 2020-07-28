import React from 'react'

import NewGame from './NewGame'

export default function Header(props) {
  return (
    <div className="header">
      <h1 className="header--title">2048</h1>
      <div className="header--scores">{props.children}</div>
      <p className="header--instructions">
        Join the numbers and get to the <strong>2048</strong> tile!
      </p>
      <NewGame
        className="header--new_game"
        onResetGame={props.onResetGame}
      ></NewGame>
    </div>
  )
}
