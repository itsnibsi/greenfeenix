import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className='prose max-w-none'>
      <h2>Not Found</h2>
      <p>The page you are trying to access was not found.</p>
      <p>Please use the navigation links to find what you are looking for.</p>
    </main>
  )
}