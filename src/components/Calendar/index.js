import React from 'react'
import './style.css'
class Calendar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dt: new Date()
    }
    this.renderDate = this.renderDate.bind(this)
    this.moveDate = this.moveDate.bind(this)
  }

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
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    document.getElementById('month').innerHTML = months[this.state.dt.getMonth()]
    document.getElementById('date_str').innerHTML = this.state.dt.toDateString()
    var cells = ''
    for (let x = day; x > 0; x--) {
      cells += "<div class='prev_date'>" + (prevDate - x + 1) + '</div>'
    }
    console.log(day)
    for (let i = 1; i <= endDate; i++) {
      if (i === today.getDate() && this.state.dt.getMonth() === today.getMonth()) cells += "<div class='today'>" + i + '</div>'
      else { cells += '<div>' + i + '</div>' }
    }
    document.getElementsByClassName('days')[0].innerHTML = cells
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
