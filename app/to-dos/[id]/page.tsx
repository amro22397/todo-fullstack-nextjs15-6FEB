
import TasksDialog from "../../../components/todosComponents/Dialogs/TaskDialog/TaskDialog";
import { getSession } from "@/app/actions/getUser";
import { redirect } from "next/navigation";
import TasksWithId from "./TasksWithId";

interface TaskListId {
  id: string;
}

const page = async ({ params }: { params: TaskListId}) => {

  const session = await getSession();
    console.log(session?.user?.email);

    

    if (!session?.user?.email) {
      return redirect("/");
    }

  return (
    <>
    <TasksWithId id={params.id} email={session?.user?.email} />
    </>
  )
}

export default page

// function AllTasksHeader({ taskListId }: { taskListId: string}) {

  
//   return (
//     <div className="flex justify-between items-center mt-4 mb-3">
//       <div className="flex flex-col gap-1">
//         <h2 className="text-xl font-semibold">{`Today's Task`}</h2>
//         <p className="text-sm text-gray-400">{formatDate()}</p>
//       </div>

      
//       <TasksDialog taskListId={taskListId} email={email} />
      
//     </div>
//   );
// }

// function formatDate(date: Date = new Date()): string {
//   const options: Intl.DateTimeFormatOptions = {
//     day: "numeric", // Should be 'numeric', not 'string'
//     month: "long", // Should be 'long' (for full month name)
//     year: "numeric", // Should be 'numeric', not 'string'
//   };
//   return date.toLocaleDateString("en-GB", options);
// }
