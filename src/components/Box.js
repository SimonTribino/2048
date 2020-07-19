import React from 'react'

export default function Box(props) {
  return <div className={`box box-${props.value}`}>{props.value}</div>
}
