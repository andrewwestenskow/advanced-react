import React, { Component } from 'react'

const styles = {
  default: {
    color: '#0f0f0f',
    background:
      'linear-gradient(to bottom, #98989877, #d8d8d8 65%, #ababab33 100%',
    borderRadius: '4px',
    padding: '.4rem 1rem',
    border: '1px solid #d8d8d8ab',
    outline: 'none',
    fontSize: '1rem',
  },

  darkMode: {
    background: 'linear-gradient(to bottom, #000000 ,#434343 50%',
    color: 'white',
  },
}

export default WrappedComponent => {
  return class Hoc extends Component {
    render() {
      let style = { ...styles.default }

      if (this.props.darkMode) {
        style = { ...style, ...styles.darkMode }
      }

      return <WrappedComponent {...this.props} style={style} />
    }
  }
}
