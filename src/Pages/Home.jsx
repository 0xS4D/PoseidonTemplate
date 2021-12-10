import Socials from '@/Components/Socials'
import RouterExample from '@/Components/RouterExample'
import Logo from '@/Assets/Logo.jsx'

export default function Home () {
  return (
    <>
      <div className='min-h-screen bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <main>
            <div className='flex flex-col items-center justify-center min-h-screen text-white layout gap-2'>
              <Logo className='h-52 -mt-20 text-blue-800 fill-current' />
              <h1 className='text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-800'>
                Starter using Vite, Solid, Tailwind
                <span className='px-2 ml-1 cursor-default align-middle text-xs font-semibold rounded-full bg-blue-100 text-blue-800 inline-block animate-bounce'>
                  Now v3!
                </span>
                , Eslint and Router.
              </h1>
              <p className='font-bold text-base text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-800'>
                By EternumZeta
              </p>
              <br />
              <RouterExample text={'Layout'} href={'/layout'} />
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
