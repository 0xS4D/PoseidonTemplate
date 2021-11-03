import RouterExample from '@/Components/RouterExample'

export default function Subroute () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-black via-gray-800 to-blue-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <main>
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout gap-2'>
            <h1 className='text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-800'>
              Hi! Im Secret and I dont like layouts
            </h1>
            <p className='animate-bounce text-3xl'>🤫</p>
            <RouterExample text={'Layout'} href={'/layout'} />
          </div>
        </main>
      </div>
    </div>
  )
}
