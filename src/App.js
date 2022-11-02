import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Registeration from './components/Registration';
import Login from './components/Login';
function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage/>} />
      <Route path="register" element={<Registeration/>}></Route>
      <Route path="login" element={<Login/>}></Route>
    </Routes>
  );
}

export default App;
