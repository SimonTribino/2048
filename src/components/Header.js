import React from 'react'

import NewGame from './NewGame'

export default function Header(props) {
  return (
    <div>
      <div className="flex-container">
        <h1>2048</h1>
        <div className="flex-container">{props.children}</div>
      </div>
      <div className="flex-container">
        <p>
          Join the numbers and get to the <strong>2048</strong> tile!
        </p>
        <NewGame onResetGame={props.onResetGame}></NewGame>
      </div>
    </div>
  )
}
