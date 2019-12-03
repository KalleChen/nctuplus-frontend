import React from 'react'
import './style.css'
class ColorBar extends React.Component {
  render () {
    const style = {
      hight: '10px',
      backgroundColor: this.props.colortype,
      font: 'inherit',
      borderradius: '50px',
      padding: '5px',
      cursor: 'pointer',
      fontFamily: 'Microsoft JhengHei'
    }
    return (
      <div style={style} />
    )
  }
}

export default ColorBar
