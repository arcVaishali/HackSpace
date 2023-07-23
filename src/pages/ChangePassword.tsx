import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AppwriteContext } from '../context/appwrite';
import { Account, AppwriteException } from 'appwrite';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const client = useContext(AppwriteContext);
    const navigate = useNavigate();

    const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
        e
    ) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange: React.ChangeEventHandler<
        HTMLInputElement
    > = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit: React.FormEventHandler = async (e) => {
        e.preventDefault();
        // Check if the passwords match and handle form submission logic
        if (password === confirmPassword) {
            // Passwords match - handle form submission logic here
            const account = new Account(client);
            try {
                await account.updatePassword(
                    password,
                    oldPassword ? oldPassword : undefined
                );
                toast.success('Password set successfully');
                navigate('/');
            } catch (error) {
                toast.error(
                    'Error when setting password: ' +
                        (error as AppwriteException).message
                );
                console.error(error);
            }
        } else {
            toast.error('Passwords do not match');
            setPassword('');
            setConfirmPassword('');
        }
    };

    return (
        <div className='p-4 my-auto flex h-screen'>
            <form
                className='w-fit min-w-[16rem] m-auto bg-white rounded shadow-lg'
                onSubmit={handleSubmit}
            >
                <p className='m-2  p-4 text-gray-700'>
                    Please create a new password below. This will be used for
                    logging into your account.
                </p>

                <div className='p-4'>
                    <label
                        htmlFor='oldPassword'
                        className='block font-medium text-gray-700 mb-2'
                    >
                        Old Password
                        <p className='text-sm'>
                            Please leave this empty if you are a new user.
                        </p>
                    </label>
                    <input
                        type='password'
                        id='oldPassword'
                        className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300'
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                </div>

                <div className='p-4'>
                    <label
                        htmlFor='password'
                        className='block font-medium text-gray-700 mb-2'
                    >
                        New Password
                    </label>
                    <input
                        type='password'
                        id='password'
                        className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300'
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>

                <div className='p-4'>
                    <label
                        htmlFor='confirmPassword'
                        className='block font-medium text-gray-700 mb-2'
                    >
                        Confirm Password
                    </label>
                    <input
                        type='password'
                        id='confirmPassword'
                        className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300'
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                    />
                </div>

                <div className='p-4'>
                    <button
                        type='submit'
                        className='w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
                    >
                        Change Password
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;
