import Link from 'next/link'
import getUserPost from '@/app/lib/getUserPost'
import getUserDetail from '@/app/lib/getUserDetails'
export default async function IdPage({params}) {
    const getUserDetail1 =  getUserDetail(params.id)
    const getUserPost =  getUserPost(params.id)
    const [user] = await Promise.all([getUserDetail1])
  return (
    <div className='flex min-h-screen flex-col justify-between p-23'>
       <div>
        <h2>user name : {user.name}</h2>
        <h2>user name : {user.email}</h2>
       </div>

    </div>
  )
}
