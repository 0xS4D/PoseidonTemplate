import { Link } from 'solid-app-router'

export default function RouterExample (props) {
  return (
    <div>
      <button>
        <Link
          href={props.href}
          className='relative inline-flex items-center px-4 py-2 rounded-md bg-white text-sm font-medium text-gray-700 border-b-4 border-blue-600 shadow-md shadow-blue-500/50'
        >
          {props.text}
        </Link>
      </button>
    </div>
  )
}
