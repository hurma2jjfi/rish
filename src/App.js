import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'; 
import About from './About'; 
import Register from './Register';
// import Orders from './Orders';
import Login from './Login';
// import Cart from './Cart';

const products = [
    { id: 1, name: "Название товара 1", price: "100р.", description: "Описание товара 1" },
    { id: 2, name: "Название товара 2", price: "200р.", description: "Описание товара 2" },
    { id: 3, name: "Название товара 3", price: "300р.", description: "Описание товара 3" },
    { id: 4, name: "Название товара 4", price: "400р.", description: "Описание товара 4" },
    { id: 5, name: "Название товара 5", price: "500р.", description: "Описание товара 5" },
    { id: 6, name: "Название товара 6", price: "600р.", description: "Описание товара 6" },
];

const ProductCard = ({ product }) => {
    return (
        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">{product.name}</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">{product.price}</h1>
                    <p>{product.description}</p>
                    <button 
                        type="button" 
                        style={{ 
                            backgroundColor: '#FF6200', 
                            color: '#fff', // Text color
                            border: '2px solid #FF6200' // Border color
                        }} 
                        className="w-100 btn btn-lg"
                    >
                        Добавить в корзину
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProductCatalog = () => {
    return (
        <main>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
};

const App = () => {
    const location = useLocation(); // Get the current location

    return (
        <div className="container py-3">
            <header>
                <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                    <Link to="/" className="d-flex align-items-center text-dark text-decoration-none">
                        <span className="fs-4">«Самоход»</span>
                    </Link>

                    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                        <Link className="me-3 py-2 text-dark text-decoration-none" to="/register">Регистрация</Link>
                        <Link className="me-3 py-2 text-dark text-decoration-none" to="/login">Авторизация</Link>
                        {/* <Link className="me-3 py-2 text-dark text-decoration-none" to="/orders">Мои заказы</Link>
                        <Link className="me-3 py-2 text-dark text-decoration-none" to="/cart">Корзина</Link> */}
                    </nav>
                </div>

               
                {location.pathname === '/' && (
                    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                        <h1 className="display-4 fw-normal">Каталог товаров</h1>
                    </div>
                )}
            </header>

          
            <Routes>
                <Route path="/" element={<ProductCatalog />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/cart" element={<Cart />} /> */}
                <Route path="/login" element={<Login />} />
                {/* <Route path="/orders" element={<Orders />} /> */}
            </Routes>

            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div className="row">
                    <div className="col-12 col-md">
                        <small className="d-block mb-3 text-muted">&copy; 2017–2021</small>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;