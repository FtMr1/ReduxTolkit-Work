import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './companents/Forms'
import Search from './companents/Search'
import List from './companents/List'
import Value from './companents/Value'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container is-fluid'>
        <Forms/>
         <Search/> 
        <List/>
        <Value/> 
     </div>
  )
}

export default App
