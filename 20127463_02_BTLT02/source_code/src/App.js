import React from 'react';
import './App.css'

import Header from './components/Header/Header'
import HomeDetail from './components/HomeDetail/HomeDetail'
import CartDetail from './components/CartDetail/CartDetail'
import ItemDetail from './components/ItemDetail/ItemDetail'
import ListItemDetail from './components/ListItemDetail/ListItemDetail'
import Footer from './components/Footer/Footer'

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import BuyDetail from './components/BuyDetail/BuyDetail';


function App() {
    return (
        <BrowserRouter>
            <div className='bg-eee'>
                <Header/>

                <Routes>
                    <Route exact path="/" element={<HomeDetail/>} />
                </Routes>

                <Routes>
                <Route path="/cart" element={<CartDetail/>} />
                </Routes>

                <Routes>
                <Route path="/item" element={<ItemDetail/>} />
                </Routes>

                <Routes>
                <Route path="/buy" element={<BuyDetail/>} />
                </Routes>

                <Routes>
                <Route path="/list" element={<ListItemDetail/>} />
                </Routes>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default App;
