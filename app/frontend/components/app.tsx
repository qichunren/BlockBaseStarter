import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Switch } from './ui/switch';
import Pages1 from '../pages/pages1';
import Pages2 from '../pages/pages2';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <div className='text-4xl font-bold'>Rails React Starter</div>
        <header>
          <ul className='flex gap-4 p-4 items-center'>
            <li><a href='/'>Home</a></li>
            <li><a href='/posts'>Posts</a></li>
            <li><Link to='/app/pages1'>Pages1</Link></li>
            <li><Link to='/app/pages2'>Pages2</Link></li>
            <li><Link to='/app/login'>登录</Link></li>
            <li><Link to='/app/register'>注册</Link></li>
            <Switch />
          </ul>
        </header>
        <Routes>
          <Route path='/app/pages1' element={<Pages1 />} />
          <Route path='/app/pages2' element={<Pages2 />} />
          <Route path='/app/login' element={<Login />} />
          <Route path='/app/register' element={<Register />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;