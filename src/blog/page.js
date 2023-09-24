import getUser from '@/app/lib/getUser'
import Link from 'next/link'
export default async function Show() {
    const get = await getUser()
  return (
    <div className='flex min-h-screen flex-col justify-between p-23'>
        <h1 className='text-center font-bold text-2xl'>Users</h1>
        {
            get.map((e,id)=>{
return(
    <Link href={`/blog/${id}`}>
    <div className='p-5 w-full m-4 bg-blue-300 rounded-md'>
        <h1 className='font-bold border'>{e.name}</h1>
<p>{e.email}</p>
    </div>
    </Link>
)
            })
        }
    </div>
  )
}
