import getUserPost from '@/app/lib/getUserPost'
import getUserDetail from '@/app/lib/getUserDetails'
import Link from 'next/link'
import getUserDetail from '@/app/lib/getUserDetails'
export default async function IdPage({params}) {
    const getUserDetail = await getUserDetail(params.id)
    const getUserPost = await getUserPost(params.id)
    const [user] = await Promise.all([getUserDetail])
  return (
    <div className='flex min-h-screen flex-col justify-between p-23'>
        <h1 className='text-center font-bold text-2xl'>Users</h1>

    </div>
  )
}
