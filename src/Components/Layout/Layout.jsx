import React from 'react'
import Navbar from './../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import Shop from './../Shop/Shop';

export default function Layout() {
  return (
    <div>
      

    <Navbar/>
      <main className=""> 
        <Outlet></Outlet>
      </main>
    <Footer/>


    </div>
  )
}
