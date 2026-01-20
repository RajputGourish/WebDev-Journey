

export default async function Home() {
  // const data = await fetch('https://jsonplaceholder.typicode.com/posts', { cache:'no-store' })
  const data = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 3600 } })
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
