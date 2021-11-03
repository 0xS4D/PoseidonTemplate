import { createSignal } from 'solid-js'

const useCounter = () => {
  const [count, setCount] = createSignal(0)
  const increase = () => setCount(count() + 1)
  const decrease = () => setCount(count() - 1)
  const reset = () => setCount(0)
  return { count, increase, decrease, reset }
}

export default function Counter () {
  const { count, increase, decrease, reset } = useCounter()
  return (
    <>
      <div className="py-1 my-2 bg-blue-900 text-blue-300 rounded border-2 border-blue-900">
      <b className="p-1 text-sm">Counter: {count}</b>
    </div>
      <div className='flex gap-2'>
        <button
          className='border-2 border-blue-800 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-800 hover:text-blue-400'
          onClick={increase}
        >
          +
        </button>
        <button
          className='border-2 border-blue-800 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-800 hover:text-blue-400'
          onClick={reset}
        >
          Reset
        </button>
        <button
          className='border-2 border-blue-800 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-800 hover:text-blue-400'
          onClick={decrease}
        >
          -
        </button>
      </div>
    </>
  )
}
