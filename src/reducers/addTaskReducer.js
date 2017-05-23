/**
 * Created by hengl on 22/05/2017.
 */

const addSingleWeekTask = (state={}, action) =>{
    return {
        weekno: state.weekno,
        monday: action.monday,
        tuesday: action.tuesday,
        wednesday: action.wednesday,
        thursday: action.thursday,
        friday: action.friday
    }
}


const addTask = (state=[], action) => {
    switch (action.type){
        case 'ADD_TASK':
            return [
                ...state,
                addSingleWeekTask(state, action),
            ]
        default: return state
    }
}

export default addTask