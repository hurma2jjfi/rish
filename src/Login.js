import React from 'react';

const Login = () => {
    return (
        <div className="container py-3">
            <div className="container text-center">
            <h2>Авторизация</h2>
            </div>
            <div className='center text-center'>
            <form>
                <div className="mb-3">
                    {/* <label htmlFor="email" className="form-label">Электронная почта</label> */}
                    <div className='cont'>
                    <input type="email" className="form-control" id="email" placeholder="Почта" /></div>
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="password" className="form-label">Пароль</label> */}
                    <div className='cont'>
                    <input type="password" className="form-control" id="password" placeholder="Пароль" /></div>
                </div>
                <button type="submit" className="btn">Войти</button><br></br>
                <button type="submit" className="btn__not">Нету аккаунта?</button>
            </form></div>
        </div>
    );
};

export default Login;