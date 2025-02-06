import React from 'react'
import SignUp from '@/components/signUp/SignUp'
import { getSession } from '../actions/getUser';
import { redirect } from 'next/navigation';

const page = async () => {

  const session = await getSession();
    console.log(session?.user?.email)
  
    if (session?.user?.email) {
      return redirect('/to-dos');
    }

  return (
    <div className="flex justify-center items-center h-screen poppins
    dark:bg-zinc-800">
      <SignUp />
    </div>
  )
}

export default page
