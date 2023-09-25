export default async function UserPost({ promise }) {
  const post = await promise
  console.log(post);
    return (
  <div>
    {
        post.map((data,i)=>{
return(
    <div className='p-5 w-full m-4 bg-blue-300 rounded-md' >
<h1 className='font-bold bg-slate-300 p-5 '> {data.title}</h1>
<p className='font-bold  bg-slate-300 p-5 ' >{data.body}</p>
      </div>
)
        })
    }
  </div>
  )
}
