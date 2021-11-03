export default function Socials () {
  return (
    <div className='flex flex-wrap justify-center gap-2'>
      <a
        target='_blank'
        href='https://www.instagram.com/cc.zeta/'
        rel='noreferrer'
      >
        <button className='bg-gradient-to-b from-indigo-500 via-pink-500 to-yellow-200 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded'>
          <svg
            className='w-5 h-5 fill-current'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M 8 3 C 5.2 3 3 5.2 3 8 L 3 16 C 3 18.8 5.2 21 8 21 L 16 21 C 18.8 21 21 18.8 21 16 L 21 8 C 21 5.2 18.8 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.7 5 19 6.3 19 8 L 19 16 C 19 17.7 17.7 19 16 19 L 8 19 C 6.3 19 5 17.7 5 16 L 5 8 C 5 6.3 6.3 5 8 5 z M 17 6 C 16.4 6 16 6.4 16 7 C 16 7.6 16.4 8 17 8 C 17.6 8 18 7.6 18 7 C 18 6.4 17.6 6 17 6 z M 12 7 C 9.2 7 7 9.2 7 12 C 7 14.8 9.2 17 12 17 C 14.8 17 17 14.8 17 12 C 17 9.2 14.8 7 12 7 z M 12 9 C 13.7 9 15 10.3 15 12 C 15 13.7 13.7 15 12 15 C 10.3 15 9 13.7 9 12 C 9 10.3 10.3 9 12 9 z'></path>
          </svg>
        </button>
      </a>

      <a
        target='_blank'
        href='https://github.com/EtZeta/PoseidonTemplate'
        rel='noreferrer'
      >
        <button className='bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded'>
          <svg
            aria-hidden='true'
            role='img'
            className='w-5'
            preserveAspectRatio='xMidYMid meet'
            viewBox='0 0 24 24'
          >
            <g fill='none'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z'
                fill='currentColor'
              />
            </g>
          </svg>
        </button>
      </a>
    </div>
  )
}
