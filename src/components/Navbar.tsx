import { useContext } from 'react';
import bimage from './../assets/homebg.png';
import Button from '../components/Button';
import { UserContext } from '../context/user';
import * as md5 from 'md5';

const Navbar = () => {
    const { user } = useContext(UserContext);

    return (
        <div className='h-14 bg-neutral-300 m-4 p-4 flex justify-between items-center rounded-lg'>
            <div className='flex gap-10 items-center '>
                <Button
                    border='none'
                    color='#011E2F'
                    height='90%'
                    onClick={() => {
                        alert('clicked');
                    }}
                    radius='4px'
                    width='auto'
                    children='My WorkSpace'
                    fontColor='white'
                />
                <Button
                    border='none'
                    color='#ABC2F7'
                    height='90%'
                    onClick={() => {
                        alert('clicked');
                    }}
                    radius='4px'
                    width='auto'
                    children='Create Team'
                    fontColor='black'
                />
            </div>
            <img
                src={`https://www.gravatar.com/avatar/${md5(user.email)}`}
                alt='User profile picture'
                className='h-12 rounded-full'
            />
        </div>
    );
};

export default Navbar;
