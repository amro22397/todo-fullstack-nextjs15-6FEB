import mongoose from "mongoose"

const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
        required: true,
    },
}, { timestamps: true });

export default mongoose.models?.Todo || mongoose.model("Todo", TodoSchema)