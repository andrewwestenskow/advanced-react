import React from 'react'
import StyleHOC from './StyleHOC'

const SimpleButton = props => {
  return (
    <button disabled={props.disabled} style={props.style}>
      Simple Button
    </button>
  )
}

export default StyleHOC(SimpleButton)
