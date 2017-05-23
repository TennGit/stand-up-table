/**
 * Created by hengl on 22/05/2017.
 */

const addSingleWeekTask = (state={}, action) =>{
    return {
        weekno: action.weekno,
        monday: action.monday,
        tuesday: action.tuesday,
        wednesday: action.wednesday,
        thursday: action.thursday,
        friday: action.friday
    }
}


const addToTask = (state=[], action) => {
    console.log(`wwwww `)
    console.log(action)
    switch (action.type){
        case 'ADD_TASK':
            console.log("whaaaaaaaaaa")
            const array = [...state, addSingleWeekTask(state, action)];
            console.log(array)
            return array
        default:return state
    }
}

export default addToTask