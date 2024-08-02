import { Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import User from './components/User';

function App() {
  return (
    <div>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/signin' Component={SignIn} />
          <Route path='/user' Component={User} />
        </Routes>
      </div>
    </div>
  );
}

export default App;