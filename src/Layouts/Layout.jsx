import Socials from '@/Components/Socials'
import RouterExample from '@/Components/RouterExample'
import { Link, Outlet } from 'solid-app-router'

export default function Layout () {
  return (
    <>
      <div className='min-h-screen bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <main>
            <div className='flex flex-col items-center justify-center min-h-screen text-white layout gap-2'>
              <h1 className='text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-800'>
                Hi! Im Layout
              </h1>
              <Outlet />
              <br />
              <RouterExample text={'Home'} href={'/'} />
              <Link href='/layout/secret'>
                <button
                  type='button'
                  className='px-4 py-2 rounded-md bg-transparent text-xs font-thin text-gray-700'
                >
                  Secret button?
                </button>
              </Link>
              <br />
              <footer className='absolute text-gray-300 bottom-10'>
                <Socials />
              </footer>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
