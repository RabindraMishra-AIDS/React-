import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function MyApp(){
  return (
    <h3>React is fun and learning react is an amazing experience.</h3>
  )
}
//We can define the function here itself thus no need to import.
const Anotherelement=(
  <a href="https://google.com">Visit Google</a>
) 
createRoot(document.getElementById('root')).render(
  
      Anotherelement
)
