import './App.css';
import Core from './components/Core';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Nopage from './pages/Nopage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Password from './pages/Password';
import StoryPage from './components/other/storyPage';
// import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Core />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="stories" element={<Stories />} />
        <Route path="stories/:id" element={<StoryPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="password" element={<Password />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </>
  );
}

export default App;
