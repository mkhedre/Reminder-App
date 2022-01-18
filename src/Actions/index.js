import { Add_Reminder,Delete_Reminder,Clear_all } from "../types";

// make function which return action

export const addReminder = (text,date)=>{
    const action ={
        type:Add_Reminder,
        text,
        date
    }
    console.log(action)
    return action

}
export const DeleteReminder= (id)=>{
    const action ={
        type :Delete_Reminder,
        id
    }
    console.log('del',action)
    return action

}
export const ClearAll =()=>{
    const action = {
        type:Clear_all
    }
    return action
}
