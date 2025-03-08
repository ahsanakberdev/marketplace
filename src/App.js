import './App.css';
import React, { useEffect, useState } from "react";
import {Routes,Route } from 'react-router-dom'
import Index from "./Pages/Index";
// import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ItemPage from './Pages/ItemPage';
import Product from './Pages/Product';
import Listing from './Pages/Listing';
import Profile from './Pages/AccountPages/Profile';
import ChangePass from './Pages/AccountPages/ChangePass';
import AccountSetting from './Pages/AccountPages/AccountSetting';
import LinkWallet from './Pages/AccountPages/LinkWallet';
import Inventory from './Pages/Inventory';

function App() {

    return (
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/itempage' element={<ItemPage/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/listing' element={<Listing/>} />
          <Route path='/inventory' element={<Inventory/>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/changepassword' element={<ChangePass/>} />
          <Route path='/linkwallet' element={<LinkWallet/>} />
          <Route path='/accountsetting' element={<AccountSetting/>} />
          <Route path='/' element={<Index/>}/>
        </Routes>
    );
}

export default App;
