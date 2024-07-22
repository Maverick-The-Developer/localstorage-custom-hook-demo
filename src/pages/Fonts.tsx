import { useLocalStorage } from '../hooks/localStorage'

export default function Fonts() {
  const [fontSize, setFontSize] = useLocalStorage<number>('fontSize', 16)

  return (
    <div>
      <h1 className='text-2xl my-4'>Font sizes</h1>
      <div className='space-y-4'>
        <div className='flex justify-between items-center gap-4'>
          <label>Base Size</label>
          <p>
            <input
              type='number'
              className='border py-1 px-2 rounded w-10 mr-1'
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
            />
            px
          </p>
        </div>
      </div>
    </div>
  )
}
