import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Account, AppwriteException } from 'appwrite';

import circularLogo from '../assets/HackSpaceLogo/CircularLogo/2.png';
import { AppwriteContext } from '../context/appwrite';
import { UserContext } from '../context/user';

const login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const client = useContext(AppwriteContext);
    const { state, setState, setUser } = useContext(UserContext);
    const account = new Account(client);

    if(!setState || !setUser || state === 'loading') {
        return (
            <div>Loading...</div>
        )
    }
    if(state === 'loggedin') {
        return (
            <div>User is already logged in!</div>
        )
    }
    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        try {
            const res = await account.createEmailSession(email, password);
            console.log(res);
            toast.success('Login Successful');
            setState('loggedin');
            setUser(res);
        } catch (error) {
            console.log(error);
            toast.error('Login Failed: ' + (error as AppwriteException).message);
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
                    placeholder='Email'
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
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4'>
                    Login
                </button>
                <Link
                    to='/register'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4 text-center'
                >
                    Register
                </Link>
            </form>
        </div>
    );
};

export default login;
