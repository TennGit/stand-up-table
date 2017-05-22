/**
 * Created by hengl on 22/05/2017.
 */
const initalState={weekno:1};

const controlBtnGroup = (state=initalState, action) => {
    console.log("reducer")
    console.log(action)
    console.log(`sssssssss + ${state.weekno}`)
    switch (action.type){
        case 'GO_TO_PREVIOUS_WEEK':
            return {
                weekno:state.weekno>1? state.weekno-1: state.weekno,
            }
        case 'GO_TO_NEXT_WEEK':
            return {
                weekno:state.weekno+1,
            }
        default: return state
    }
}

export default controlBtnGroup