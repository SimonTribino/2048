import React from 'react'

export default function NewGame({ onResetGame, className }) {
  return (
    <button className={className} onClick={onResetGame}>
      New Game
    </button>
  )
}
