import mongoose from "mongoose";


const TasksListSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    userEmail: {
        type: String,
    },
    userId: {
        type: String,
    },
}, { timestamps: true });


export default mongoose.models?.TasksList || mongoose.model("TasksList", TasksListSchema)