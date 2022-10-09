import { useEffect } from 'react';
import Carousel from 'react-grid-carousel'
import { Routes, Route } from 'react-router-dom'
import Login from './account/Login';
import Register from './account/Register';
import './App.css';
import Privacy from './components/Privacy';
import Trending from './components/Trending';

import Home from './features/Home';
import ProductsList from './features/ProductsList';

function App() {

useEffect(() => {
  document.documentElement.setAttribute('class', 'dark');
      localStorage.setItem('theme', 'dark');
});


  const randomImgUrl = 'https://picsum.photos/{x}/{y}?random='

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/productslist' element={<ProductsList />} />
        <Route path='/trending' element={<Trending/>} />
        <Route path='/privacy' element={<Privacy/>} />

      </Routes>

    </>
  );
}

export default App;
