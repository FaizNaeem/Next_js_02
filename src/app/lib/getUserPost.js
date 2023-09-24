export default async function getUserPost(id) {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await fetch(`https://jsonplaceholder.typicode.com/post?userId=${id}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }