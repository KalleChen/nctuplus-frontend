import React from 'react'
import Day from './Day'
import ColorBar from './ColorBar'
import ColorBarTypes from './ColorBarTypes'
import ReactDOM from 'react-dom';
import './style.css'
class Calendar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dt: new Date()
    }
    this.renderDate = this.renderDate.bind(this)
    this.moveDate = this.moveDate.bind(this)
    this.colorbarData = [
      {id: 1, name: '考試', colortype: 'purple'},
      {id: 2, name: '作業', colortype: 'blue'},
      {id: 3, name: '放假', colortype: 'orange'},
      {id: 4, name: '活動', colortype: 'green'}
    ]
  }
  /*
  printColorBarTypes (props) {
    const item = this.props.colorbarData.map((colorbarData) =>
    <div key={colorbarData.id}>
      <div>{colorbarData.name}</div>
      <ColorBar props = {colorbarData}/>
    </div>
    );
    //var lst = ''
    //lst += '<div>' + "haha " + {item} + '<div>'
    //document.getElementsByClassName('printCB')[0].innerHTML = item
    return (
      <div>
        {item}
      </div>
    );
  }
  */

  render () {
  
    return (
      <div className='wrapper'>
        <div className='calendar'>
          <div className='month'>
            <div className='prev' onClick={() => this.moveDate('prev')}>
              <span>&#10094;</span>
            </div>
            <div>
              <h2 id='month' />
              <p id='date_str' />
            </div>
            <div className='next' onClick={() => this.moveDate('next')}>
              <span>&#10095;</span>
            </div>
          </div>
          <div className='weekdays'>
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className='days' />
          <ColorBarTypes />
        </div>
      </div>
    )
  }

  

  renderDate () {
    this.state.dt.setDate(1)
    var day = this.state.dt.getDay()
    var today = new Date()
    var endDate = new Date(
      this.state.dt.getFullYear(),
      this.state.dt.getMonth() + 1,
      0
    ).getDate()

    var prevDate = new Date(
      this.state.dt.getFullYear(),
      this.state.dt.getMonth(),
      0
    ).getDate()
    var months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
    document.getElementById('month').innerHTML = months[this.state.dt.getMonth()]
    document.getElementById('date_str').innerHTML = this.state.dt.toDateString()
    var cells = ''
    
    var count = 0;
    for (let x = day; x > 0; x--) {
      count++;
      cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>"
      //cells += "<Day date = {" + (prevDate - x + 1) + "} />";
    }
    console.log(day)
    for (let i = 1; i <= endDate; i++) {
      count++;
      if (i === today.getDate() && this.state.dt.getMonth() === today.getMonth()) cells += "<div class='today'>" + i +'<div id="today"></div>' + '</div>'
      else { cells += '<div>' + i  + '</div>' }
    }
    for(let i = 1; i <= 35-count; i++) {
      cells += "<div class='next_date'>" + i + '</div>'
    }
    document.getElementsByClassName('days')[0].innerHTML = cells;
    ReactDOM.render(
      <ColorBar colortype="purple" />
      , document.getElementById('today')
    );
  }

  moveDate (para) {
    if (para === 'prev') {
      this.state.dt.setMonth(this.state.dt.getMonth() - 1)
    } else if (para === 'next') {
      this.state.dt.setMonth(this.state.dt.getMonth() + 1)
    }
    this.renderDate()
  }

  componentDidMount () {
    this.renderDate()
  }
}
export default Calendar
