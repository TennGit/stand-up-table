/**
 * Created by hengl on 22/05/2017.
 */

const addTask = (state={}, action) => {
    console.log("action")
    console.log(action)
    
    switch (action.type){
        case 'ADD_TASK':
            return {
                monday: action.monday,
                tuesday: action.tuesday,
                wednesday: action.wednesday,
                thursday: action.thursday,
                friday: action.friday
            }
        default: return state
    }
}

export default addTask