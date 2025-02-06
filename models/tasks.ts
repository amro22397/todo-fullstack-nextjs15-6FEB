import mongoose from "mongoose";


const TasksSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    priority: {
        type: String,
        default: "high"
    },
    status: {
        type: String,
        default: "in progress"
    },
    userEmail: {
        type: String,
    },
    userId: {
        type: String,
    },
    taskListId: {
        type: String,
    },
}, {
    versionKey: false,
    timestamps: true
});


export default mongoose.models?.Tasks || mongoose.model("Tasks", TasksSchema)