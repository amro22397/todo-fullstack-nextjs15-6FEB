import UserProfile from "./UserProfile";

import SearchButton from "./SearchButton";
import { FaCheckDouble } from "react-icons/fa6";
import { TaskList } from "@/app/data/Tasks";
import { getSession } from "@/app/actions/getUser";
import { AppLogo } from "@/components/AppLogo";

const TaskHeader = ({ pagetaskList, email }: {pagetaskList?: TaskList | any, email: string | null | undefined}) => {

  // const session = await getSession();
  //   console.log(session?.user?.email)

  return (
    <div className="flex justify-between  items-center mb-0">
      <AppLogo />
      <div className="flex items-center ">
      <div className="flex flex-col gap-0 mr-3 md:hidden lg:flex">
          <span className="font-semibold">{pagetaskList?.name}</span>
        </div>
        <SearchButton />
        <UserProfile email={email} />
      </div>
    </div>
  )
}
  

export default TaskHeader
