import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@/components/ui/button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      <h1>Real-Time Chat App</h1>
      <Button className="w-[75%] flex items-center justify-center space-x-2 bg-white text-black border border-gray-300 hover:bg-gray-100 py-2 px-4 rounded-md">Click Me</Button>
    </div>
    </>
  )
}

export default App



