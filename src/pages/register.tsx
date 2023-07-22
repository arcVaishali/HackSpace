import React, { useContext, useState } from 'react';
import circularLogo from '../assets/HackSpaceLogo/CircularLogo/2.png';
import { Link } from 'react-router-dom';
import { AppwriteContext } from '../context/appwrite';
import { Account, ID } from 'appwrite';
import { toast } from 'react-toastify';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const client = useContext(AppwriteContext);
    const account = new Account(client);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await account.create(ID.unique(), email, password);
            console.log(res);
            toast.success('Sign Up Successful');
        } catch (error) {
            console.log(error);
            toast.error('Sign Up Failed: ' + error.message);
        }
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
                    type='email'
                    placeholder='Username'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='border-2 border-black rounded-md p-2 w-96'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4'
                >
                    Signup
                </button>
                <Link
                    to='/login'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4 text-center'
                >
                    Login
                </Link>
            </form>
        </div>
    );
};

export default Register;
