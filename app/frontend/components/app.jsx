import React, { createContext } from 'react';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <div className='text-4xl font-bold'>Rails React Starter</div>
      <header>
        <ul className='flex gap-4 bg-gray-500 p-4'>
          <li><a href='/'>Home</a></li>
          <li><a href='/posts'>Posts</a></li>
        </ul>
      </header>
    </div>
  )
}

export default App;