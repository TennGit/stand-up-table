export default function addTask(monday, tuesday, wednesday, thursday, friday){
    console.log("Action creator")
    return{
        type: "ADD_TASK",
        monday,
        tuesday,
        wednesday,
        thursday,
        friday
    }
}