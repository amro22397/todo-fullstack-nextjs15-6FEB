import TasksList from "@/models/tasks-list";
import mongoose from "mongoose";

export async function DELETE(request: Request, { params }: { params: { id: string }}) {
    mongoose.connect(process.env.MONGO_URL as string)

    const taskList = await TasksList.findByIdAndDelete(params.id);

    return Response.json(taskList);
}