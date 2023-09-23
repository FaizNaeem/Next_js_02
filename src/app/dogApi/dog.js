 export default async function getData() {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await fetch('https://dog.ceo/api/breeds/image/random',{cache:"no-cache"})
      
    
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }