import getUser from '@/app/lib/getUser'
import Link from 'next/link'
export default async function IdPage() {
    const get = await getUser()
  return (
    <div className='flex min-h-screen flex-col justify-between p-23'>
        <h1 className='text-center font-bold text-2xl'>Users</h1>

    </div>
  )
}
