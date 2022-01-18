import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import DatePicker from "react-datepicker";
import logo from './logo.jpeg'

import "react-datepicker/dist/react-datepicker.css";
import {addReminder,DeleteReminder,ClearAll} from './Actions'
class App extends Component {
    state={
        text :'',
        date: new Date()
    }

    render_reminder =()=>{
        const {reminders} = this.props
        return(
            <ul className='list-group'>
                {
                    reminders.map(reminder=>{
                        return(
                            <li className='list-group-item' key={reminder.id}>
                                <div>{reminder.text}</div>
                                <div>{moment(new Date(reminder.date)).fromNow()}</div>
                                <div className='closeicon btn btn-danger' onClick={()=>this.props.DeleteReminder(reminder.id)}>x</div>
                            </li>
                            
                        )
                    })
                }
            </ul>
        )
        
    }
    render() {
        console.log(this.props)
        return (
            
            <div className='reminder'>
                <div className='reminde-img'>
                    <img src={logo} />
                </div>
                <div className='reminder-title'>
                    <h2>what should i do</h2>
                </div>
                <input 
                    onChange={(e)=>{this.setState({text:e.target.value})}}
                    className='form-control'
                    type="text" 
                    placeholder='what should i do'
                />
                
                <DatePicker
                    selected={this.state.date}
                    placeholder='Enter Date'
                    className='form-control'
                    onChange={(date)=>{this.setState({date})}}
                    showTimeSelect
                    dateFormat="Pp"
                />
                <div>{this.render_reminder()}</div>

                <button
                    onClick={()=>this.props.addReminder(this.state.text , this.state.date)}
                    className='btn btn-primary btn-block'
                >
                    Add Reminder
                </button>
                <button 
                    className="btn btn-danger btn-block clearReminder"
                    onClick={()=>this.props.ClearAll()}
                >
                     Clear reminders
                </button>
            </div>
        )
    }
}

// function mapDispatchToProps(dispatch){
//     return{
//         add:()=>{dispatch(addReminder())}
//     }
// }
// function mapStateToProps(state){
//     return{
//         reminders : state
//     }
// }

export default connect(state=>{
    return{
        reminders:state
    }
},{addReminder,DeleteReminder,ClearAll})(App)