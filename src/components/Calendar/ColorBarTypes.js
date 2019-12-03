import React from 'react'
import ColorBar from './ColorBar'
import './style.css'
class colorBarTypes extends React.Component{
    render () {
        return (
          <div className='colorBarTypes'>
              <div>考試</div>
              <span>
              <ColorBar colortype="purple" />
              </span>
              <div>作業</div>
              <span>
              <ColorBar colortype="blue" />
              </span>
              <div>放假</div>
              <span>
              <ColorBar colortype="orange" />
              </span>
              <div>活動</div>
              <span>
              <ColorBar colortype="green" />
              </span>
          </div>
        )
      }
}

export default colorBarTypes