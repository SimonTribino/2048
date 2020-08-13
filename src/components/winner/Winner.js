import './winner.css'

import NewGame from '../NewGame'

import React from 'react'

export default function Board({ onResetGame }) {
  return (
    <div className="winner">
      <div className="winner--dimmer"></div>
      <div className="winner--card">
        <h2 className="winner--title">You Win!</h2>
        <NewGame
          className="winner--new_game"
          onResetGame={() => onResetGame(true)}
        ></NewGame>
      </div>
    </div>
  )
}
