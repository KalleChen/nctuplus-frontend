import React from 'react'
import styles from './style.scss'

class AddKistCustom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date:[4,12,'三'],
            deadline:[0,0,'','Deadline'],
            content:'備註：...',
            calendar:'hidden'
        }
    }

    ChangeCalendar(){
        console.log(this.state.calendar)
        if (this.state.calendar=='hidden'){
            this.setState({calendar:'visible'})
        }
        else{
            this.setState({calendar:'hidden'})
        }
        console.log(this.state.calendar)
    }


    render() {
        return(
            <div className={styles.Container}>
                <input type="text" style={{border:0,outline:0}}/>
                
                <div className={styles.Content}>
                    <div className={styles.Title}>
                        <div className={styles.TitleDate}>
                            from  {this.state.date[0]}/{this.state.date[1]} ({this.state.date[2]}) 
                            </div>
                        <div className={styles.TitleDate} onClick={(e)=>this.ChangeCalendar()}>
                            {this.state.deadline[3]}
                        </div>
                    </div>
                    <textarea className={styles.Textarea} placeholder={this.state.content}>
                    </textarea>
                    <div className={styles.calendar} style={{visibility:this.state.calendar}}>

                    </div>
                </div>

            </div>
        )
    }
}

export default AddKistCustom