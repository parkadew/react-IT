import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState<number>(0)

  //react typescript event type
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <Button variant={'priamry'} color={'White'}> 확인</Button>
    </>
  )
}

export default App
