import {useContext} from 'react'
import { redirect } from 'react-router-dom';
import { UserContext } from '../context/user';

const UserLoginCheck = ({ children}: {children: React.ReactNode}) => {
    const { state } = useContext(UserContext);

    if(state === 'loading') {
        return (
            <div>Loading...</div>
        )
    }
    if(state === 'loggedin') {
        return (
            <>
                {children}
            </>
        )
    } else {
        redirect('/login');
    }
}

export default UserLoginCheck
