import getUserPost from '@/app/lib/getUserPost'
import getUserDetail from '@/app/lib/getUserDetails'
import UserPost from '@/com/UserPost'
import './loader.css'
import { Suspense } from 'react'
export async function generateMetadata({ params }){
  const getUserDetail1 = await getUserDetail(params.id);
  return{
    title : getUserDetail1.name,
    description : getUserDetail1.email,
  }
}
export default async function IdPage({params}) {
    const getUserDetail1 =  getUserDetail(params.id)
    const userpost =  getUserPost(params.id)
    const [user] = await Promise.all([getUserDetail1])
  
  console.log(user);
    return (
    <div className='flex min-h-screen flex-col justify-between p-23'>
       <div>
        <h2 className='text-center text-2xl font-semibold p-3 mt-3 bg-gray-300 sticky'>User name : {user.name}</h2>
        <h2 className='text-center text-2xl font-semibold p-3  bg-gray-300'>User email : {user.email}</h2>
        <Suspense fallback={<div style={{display:"flex" , alignItems:"center" , justifyContent:"center", width:"100%", height:"50vh"}}>
<div className="loader"></div>
        </div>}>
       <UserPost promise={userpost}/>
        </Suspense> 
       </div>

    </div>
  )
}
