import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout, MainContainer } from './styles/Applayout.styles';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductList from './pages/ProductList/ProductList ';
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Favorites from './pages/Favorites/Favorites';

function App() {

  return (
    <>
    <BrowserRouter>
      <AppLayout>
        <Header />
        <MainContainer>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </MainContainer>
        <Footer />
      </AppLayout>
    </BrowserRouter> 
    </>
  )
}

export default App
