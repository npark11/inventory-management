import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import Forgot from './pages/Auth/Forgot';
import Layout from './components/Layout/Layout';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Reset from './pages/Auth/Reset';
import Home from './pages/Home/Home';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.withCredentials = true;


function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/resetpassword/:resetToken' element={<Reset />} />
        <Route path='/dashboard' element={
          <Sidebar>
            <Layout>
              <Dashboard />
            </Layout>
          </Sidebar>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
