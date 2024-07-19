import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

//templates
import UserTemplate from './templates/UserTemplate/Template';

// pages
import Home from './pages/Home';
import About from './pages/About';
import ListProducts from './pages/ListProducts/ListProducts';
import Details from './pages/Details/Details';
import SearchResult from './pages/SearchResult/SearchResult';
import NotFound from './pages/NotFound/NotFound';
import TalkWithUs from './pages/TalkWithUs/TalkWithUs';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <UserTemplate> */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ListProducts />} />
            <Route path="/products/details" element={<Details />} />
            <Route path="/products/search" element={<SearchResult />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/talk" element={<TalkWithUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {/* </UserTemplate> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
