import Link from 'next/link'

function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      <Link href='/users'>
        <a>Users</a>
      </Link>
      <hr />
      <Link href='/posts'>
        <a>Posts</a>
      </Link>
      <hr />
    </>
  )
}

export default Home