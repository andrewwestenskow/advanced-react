import React from 'react'
import StyleHOC from './StyleHOC'

const Square = props => {
  return (
    <div style={{ ...props.style, width: '100px', height: '100px' }}>
      HELLO I AM A SQUARE
    </div>
  )
}
export default StyleHOC(Square)
