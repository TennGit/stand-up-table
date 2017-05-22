/**
 * Created by hengl on 22/05/2017.
 */

const controlBtnGroup = (state={}, action) => {
    console.log("reducer")
    console.log(action)
    switch (action.type){
        case 'GO_TO_PREVIOUS_WEEK':
            return {
                weekno:action.weekno,
                monday: state.monday,
                tuesday: state.tuesday,
                wednesday: state.wednesday,
                thursday: state.thursday,
                friday: state.friday
            }
        case 'GO_TO_NEXT_WEEK':
            return {

            }
        default: return state
    }
}

export default controlBtnGroup