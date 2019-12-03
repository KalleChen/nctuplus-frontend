import React from 'react'
import ColorBar from './ColorBar'
class Day extends React.Component{
    render () {
        return (
          <div>
            {this.props.date}
            <ColorBar colortype = "blue" />
          </div>
        )
      }
}

export default Day