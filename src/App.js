import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route element={<PrivateComponent/>}>
            <Route path="/" element={<h2>All product</h2>}/>
            <Route path="/addProduct" element={<AddProduct/>}/>
            <Route path="/update" element={<h2>Update product</h2>}/>
            <Route path="/logout" element={<h2>Logout</h2>}/>
            <Route path="/profile" element={<h2>Profile</h2>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
