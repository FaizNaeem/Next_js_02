export default async function getUser() {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }