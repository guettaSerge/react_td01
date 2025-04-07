import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainContent />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
