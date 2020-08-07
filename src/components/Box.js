import React from 'react'

import {
  getBoxsColors,
  getCssCustomProperty,
  hexToRgb,
} from '../utils/board.utils'

const colors = getBoxsColors()

const getRgbColor = (value) => {
  if (!value) {
    return hexToRgb(getCssCustomProperty('--empty-box-color'))
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
      {props.value ? props.value : ''}
    </div>
  )
}
