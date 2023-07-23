import { useContext } from 'react';
import bimage from './../assets/homebg.png';
import Button from '../components/Button';
import { UserContext } from '../context/user';
import * as md5 from 'md5';

const Navbar = () => {
    const { user } = useContext(UserContext);

    return (
        <div
            className='h-screen w-screen bg-cover justify-center flex p'
            style={{ backgroundImage: `url(${bimage})` }}
        >
            {/* navbar */}
            <div className='w-4/5 '>
                <div className='h-14 bg-neutral-300 w-full mt-3 flex justify-between pl-10 pr-10 items-center'>
                    {/* profile  */}

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
                        src={`https://www.gravatar.com/avatar/${md5(
                            user.email
                        )}`}
                        alt='User profile picture'
                        className='h-12 rounded-full'
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
