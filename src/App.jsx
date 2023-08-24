import './App.css';
import Core from './components/Core';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Nopage from './pages/Nopage';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Core />}>
          <Route path="/" element={<Home />} />
          <Route path="stories" element={<Stories />} />
        </Route>
        <Route path="*" element={<Nopage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
