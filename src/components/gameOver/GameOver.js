import './gameOver.css'

import NewGame from '../NewGame'

import React from 'react'

export default function Board({ onResetGame }) {
  return (
    <div className="game_over">
      <div className="game_over--dimmer"></div>
      <div className="game_over--card">
        <h2 className="game_over--title">Game Over!</h2>
        <NewGame
          className="game_over--new_game"
          onResetGame={() => onResetGame(true)}
        ></NewGame>
      </div>
    </div>
  )
}
