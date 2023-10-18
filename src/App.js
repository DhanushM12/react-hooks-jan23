import { Route, Routes } from 'react-router-dom';
import './App.css';
import UseCallback from './hooks/UseCallback';
import UseContext from './hooks/UseContext';
import UseEffect from './hooks/UseEffect';
import UseMemo from './hooks/UseMemo';
import UseRef from './hooks/UseRef';
import UseState from './hooks/UseState';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Notfound from './components/Notfound';

function App() {
  return (
    <div className="App">
        {/* <UseState />
        <UseEffect />
        <UseRef />
        <UseMemo />
        <UseCallback />
        <UseContext /> */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='*' element={<Notfound />} />
        </Routes>
    </div>
  );
}

export default App;
