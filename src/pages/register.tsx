import React from 'react';
import circularLogo from '../assets/HackSpaceLogo/CircularLogo/2.png';
import { Link } from 'react-router-dom';

const Register = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="h-screen w-screen bg-[url('/src/assets/loginbg.png')] bg-cover flex items-center justify-center">
            <form
                onSubmit={onSubmit}
                className='flex flex-col items-center justify-center gap-4 border-3 bg-[#f6f6f6] w-fit p-8 pt-4 rounded-md'
            >
                <img src={circularLogo} className='w-48' />
                <input
                    className='border-2 border-black rounded-md p-2 w-96'
                    type='text'
                    placeholder='Username'
                />
                <input
                    className='border-2 border-black rounded-md p-2 w-96'
                    type='password'
                    placeholder='Password'
                />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4'>
                    Signup
                </button>
                <Link to="/login" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4 text-center'>
                    Login
                </Link>
            </form>
        </div>
    );
};

export default Register;
