import getPayloadClient from '@/payload/client'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const payload = await getPayloadClient()
  const greeting = await payload.findGlobal({ slug: 'greeting' })

  return (
    <main className="min-h-screen p-4">
      <p>Website</p>
      {greeting.message ? (
        <p>{greeting.message}</p>
      ) : (
        <p>
          Try adding a message using admin portal{' '}
          <Link
            href="/admin/globals/greeting"
            className="text-pink-400 underline"
            target="_blank"
          >
            here
          </Link>{' '}
          and refresh the page.
        </p>
      )}
    </main>
  )
}
