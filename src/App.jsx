import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"; 
import Header from './components/Homepage/Header';
import Footer from './components/Homepage/Footer';
import HomePage from './pages/HomePage';


function App() {

  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
