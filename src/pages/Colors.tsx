import { useLocalStorage } from '../hooks/localStorage'

export default function Colors() {

  const [ color, setColor ] = useLocalStorage<string>('color', '#ff0000')

  return (
    <div className='w-[340px] flex flex-col gap-4'>
      <h1 className='text-2xl my-4'>Colors</h1>
      {/* primary color */}
    <div className='flex gap-2 items-center'>
      <p>Primary Color</p>
      <input
        className='ml-auto w-14 h-14 border rounded cursor-pointer'
        type='color'
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        className='border py-1 px-4 rounded w-28'
        type='text'
        onChange={(e) => setColor(e.target.value)}
        value={color}
      />
    </div>
    </div>
  )
}
