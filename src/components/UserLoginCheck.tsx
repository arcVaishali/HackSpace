import {useContext} from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/user';
import Loading from './Loading';

const UserLoginCheck = ({ children}: {children: React.ReactNode}) => {
    const { state } = useContext(UserContext);

    if(state === 'loading') {
        return (
            <Loading />
        )
    }
    if(state === 'loggedin') {
        return (
            <>
                {children}
            </>
        )
    } else {
        return (
            <Navigate to='/login' />
        )
    }
}

export default UserLoginCheck
