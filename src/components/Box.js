import React from 'react'

import { getBoxsColors } from '../utils/board.utils'

const colors = getBoxsColors()

const getRgbColor = (value) => {
  if (!value) {
    return 'white'
  }
  return colors[Math.log2(value)]
}

export default function Box(props) {
  return (
    <div
      style={{
        backgroundColor: getRgbColor(props.value),
      }}
      className={'board--box'}
    >
      {props.value}
    </div>
  )
}
