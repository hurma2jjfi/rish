import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState(null); 
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setError(null); 

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/', {
                name,
                email,
                password,
            });
            
            localStorage.setItem('token', response.data.token);
            navigate('/'); 
        } catch (err) {
            setError(err.response?.data?.message || 'Ошибка регистрации'); 
        }
    };

    return (
        <div className="container py-3">
            <h2 className='text-center'>Регистрация</h2>
            <div className='center'>
                <form onSubmit={handleSubmit}>
                    {error && <p style={{ color: 'red' }}>{error}</p>} { }
                    <div className="mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="username" 
                            placeholder="ФИО" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Почта" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Пароль" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn">Зарегистрироваться</button>
                    <br />
                    <button type="button" className="btn__not" onClick={() => navigate('/login')}>Уже есть аккаунт?</button>
                </form>
            </div>
        </div>
    );
};

export default Register;