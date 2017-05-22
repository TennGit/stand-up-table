/**
 * Created by hengl on 22/05/2017.
 */


export default function gotoprevious(currentPageWeekNo){
    return{
        type: "GO_TO_PREVIOUS_WEEK",
        weekno:currentPageWeekNo-1,
    }
}

export function gotonext(){
    return{
        type: "GO_TO_NEXT_WEEK",
        weekNo:3
    }
}