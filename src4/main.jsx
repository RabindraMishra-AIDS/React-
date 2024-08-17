import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

const anotherUser= 'Chai aur React'
const reactElement= React.createElement(
  'a',
  {href:'https://google.com'},
  'Please click'

)
createRoot(document.getElementById('root')).render(
  
      reactElement
)
