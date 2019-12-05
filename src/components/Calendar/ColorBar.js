import React from 'react'
import './style.css'
class ColorBar extends React.Component{
  /*constructor(props){
    super(props)
    this.state = {
      colortype : {colortype}
    }
  }*/
    render () {
        const style = {
            backgroundColor: this.props.colortype,
            width: '60px',
            padding: '0',
         };
        return (
          <div className = "colorbar" style = {style}>
          </div>
        )
      }
}

export default ColorBar