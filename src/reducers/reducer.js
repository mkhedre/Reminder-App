import { Add_Reminder,Delete_Reminder,Clear_all } from "../types"

const reminder = (state=[] ,action)=>{
    let reminders =null
    if(action.type === Add_Reminder){ //have err because ===
        reminders = [...state ,{text:action.text , date :action.date , id:Math.random()}]
        console.log('from reducer',reminders)
        return reminders
    }else if(action.type===Delete_Reminder){
        reminders=state.filter(reminder=>reminder.id !==action.id)
        return reminders
    }else if(action.type=Clear_all){
        reminders =[]
        return reminders
    }
    else{
        return state
    }
}
export default reminder