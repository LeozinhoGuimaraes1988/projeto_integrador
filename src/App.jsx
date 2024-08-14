import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

//templates
import UserTemplate from './templates/UserTemplate/Template';

// pages
import Home from './pages/Home';
import About from './pages/About';
import ListRecentsProducts from './pages/ListRecentsProducts/ListRecentsProducts';
import ListAllProducts from './pages/ListAllProducts/ListAllProducts';
import Details from './pages/Details/Details';
import SearchResult from './pages/SearchResult/SearchResult';
import NotFound from './pages/NotFound/NotFound';
import TalkWithUs from './pages/TalkWithUs/TalkWithUs';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import UserProducts from './pages/UserProducts/UserProducts';
import FormProduct from './pages/FormProduct/FormProduct';
import Categories from './pages/Categories/Categories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/all-recents-products"
              element={<ListRecentsProducts />}
            />
            <Route path="/all-products" element={<ListAllProducts />} />
            <Route path="/products/details/:id" element={<Details />} />
            <Route
              path="/products/search/:product"
              element={<SearchResult />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-products" element={<UserProducts />} />
            <Route path="/form-product" element={<FormProduct />} />
            <Route
              path="/products/categories/:category"
              element={<Categories />}
            />
            <Route path="/talk" element={<TalkWithUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
