import React from 'react';
import { Switch } from './ui/switch';
const App = () => {
  return (
    <div className="container mx-auto p-4">
      <div className='text-4xl font-bold'>Rails React Starter</div>
      <header>
        <ul className='flex gap-4 p-4 items-center'>
          <li><a href='/'>Home</a></li>
          <li><a href='/posts'>Posts</a></li>
          <Switch />
        </ul>
      </header>
    </div>
  )
}

export default App;