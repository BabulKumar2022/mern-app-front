import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductAll from './components/ProductAll';
import Update from './components/Update';
import NewLetter from './components/NewLetter';
import Xle from './components/Xle';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route element={<PrivateComponent/>}>
            <Route path="/" element={<ProductAll/>}/>
            <Route path="/addProduct" element={<AddProduct/>}/>
            <Route path="/update/:id" element={<Update/>}/>
            <Route path="/logout" element={<h2>Logout</h2>}/>
            <Route path="/newLetter" element={<NewLetter/>}/>
            <Route path="/xle" element={<Xle/>}/>
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
