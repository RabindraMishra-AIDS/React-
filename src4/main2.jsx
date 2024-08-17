import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function MyApp(){
  const username='Chess'
  return (
    <>
    <h3>React is fun and learning react is an amazing experience.</h3>
    <p>Testing the paragraph and plays {username}</p>                       //Using username as Variable.
    </>
  )
}
export default MyApp