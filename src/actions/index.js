export default function addTask(monday, tuesday, wednesday, thursday, friday){
    return{
        type: "ADD_TASK",
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
    }
}