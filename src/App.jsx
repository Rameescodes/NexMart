import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import './index.css';
import FavoritePage from './pages/FavoritePage';
import OrderList from './pages/OrderList';
import ProductStockPage from './pages/Product Stock';
import CalendarPage from './pages/Calender';
import ToDoPage from './pages/To-Do';
import InvoicePage from './pages/Invoice';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';    
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';
import TransactionPage from './pages/TransactionPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/OrderList" element={<OrderList />} />
        <Route path="/product Stock" element={<ProductStockPage />} />
        <Route path="/Calender" element={<CalendarPage/>} />
        <Route path="/To-Do" element={<ToDoPage/>} />
        <Route path="/Invoice" element={<InvoicePage/>} />
        <Route path="/NotFoundPage" element={<NotFoundPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/TransactionPage" element={<TransactionPage />} />
        


        



        

      </Routes>
    </Router>
  );
}

export default App;
