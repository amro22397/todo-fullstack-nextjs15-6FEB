"use client"


import { LoginForm } from "@/components/login-form"

export default function LoginPage() {

  // const session = useSession();
  // const router = useRouter();


  return (
    <div className="bg-white dark:bg-zinc-800 flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm />
      </div>
    </div>
  )
}
