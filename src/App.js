
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/users" element={<Users></Users>}></Route>
          <Route path="/adduser" element={<AddUser></AddUser>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
