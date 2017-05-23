export default function addToTask(weekno, monday, tuesday, wednesday, thursday, friday){
    return{
        type: "ADD_TASK",
        weekno,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
    }
}
