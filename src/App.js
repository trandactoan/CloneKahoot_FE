import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import Registeration from './component/Registration';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="register" element={<Registeration/>}></Route>
    </Routes>
  );
}

export default App;
