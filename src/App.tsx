import { useState } from 'react'
import './App.css'
import Colors from './pages/Colors'
import Fonts from './pages/Fonts'
export default function App() {
  const pages = [<Colors />, <Fonts />]
  const [pagesIndex, setPagesIndex] = useState(0)
  return (
    <div className='flex h-screen'>
      <aside className='w-[240px] h-full p-4 bg-slate-700'>
        <nav className='text-white flex flex-col gap-4 items-start'>
          <button onClick={() => setPagesIndex(0)}>Colors</button>
          <button onClick={() => setPagesIndex(1)}>Font Sizes</button>
          </nav>
      </aside>

      <section className='p-4 h-screen overflow-auto'>
        {pages[pagesIndex]}
      </section>
    </div>
  )
}
