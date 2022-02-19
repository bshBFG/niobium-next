import type { NextPage } from 'next'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

const Home: NextPage = () => {
  const { data: session, status } = useSession()

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Link href="/dashboard">
        <a className="rounded-full bg-cyan-500 py-2 px-4 font-bold text-white hover:bg-cyan-700">
          Dashboard
        </a>
      </Link>
      {status === 'loading' && <h1>Loading...</h1>}
      {session && (
        <>
          Signed is as {session.user?.email} <br />
          <button
            type="button"
            onClick={() => signOut()}
            className="rounded-full bg-fuchsia-500 py-2 px-4 font-bold text-white hover:bg-fuchsia-700"
          >
            Sign out
          </button>
        </>
      )}
      {!session && (
        <>
          Not signed in <br />
          <button
            type="button"
            onClick={() => signIn()}
            className="rounded-full bg-fuchsia-500 py-2 px-4 font-bold text-white hover:bg-fuchsia-700"
          >
            Sign in
          </button>
        </>
      )}
    </div>
  )
}

export default Home
