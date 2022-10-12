import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from './account/Login';
import Register from './account/Register';
import './App.css';
import Privacy from './components/Privacy';
import Trending from './components/Trending';

import Home from './features/Home';
import ProductsList from './features/ProductsList';
import CustomerLayout from './layout/CustomerLayout';

function App() {

  // set default theme
  useEffect(() => {
    document.documentElement.setAttribute('class', 'dark');
    localStorage.setItem('theme', 'dark');
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<Home />} />
          <Route path='/productslist' element={<ProductsList />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/privacy' element={<Privacy />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

    </>
  );
}

export default App;
