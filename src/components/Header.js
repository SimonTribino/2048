import React from 'react'

import NewGame from './NewGame'

export default function Header(props) {
  return (
    <div>
      <div className="flex-container flex-between">
        <h1 className="main-title flex-between">2048</h1>
        <div className="flex-container flex-between">{props.children}</div>
      </div>
      <div className="flex-container flex-between info-container">
        <p className="intro-text">
          Join the numbers and get to the <strong>2048</strong> tile!
        </p>
        <NewGame onResetGame={props.onResetGame}></NewGame>
      </div>
    </div>
  )
}
