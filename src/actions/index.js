export default function addTask(monday, tuesday, wednesday, thursday, friday, weekno){
    console.log("Action creator")
    console.log(weekno)
    return{
        type: "ADD_TASK",
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        weekno
    }
}