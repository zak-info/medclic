import Login from '@/components/Login'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from '../api/auth/[...nextauth]/route';


const page = async () => {


  const session = await getServerSession(authOptions);
  console.log("the sess",session);
  if (session) redirect("/dashboard/home");

  return (
    <Login />
  )
}

export default page