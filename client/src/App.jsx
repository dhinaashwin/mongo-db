import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemList from './Item'
import AddItem from './AddItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <ItemList/>
        <AddItem/>
    </div>
  )
}

export default App
