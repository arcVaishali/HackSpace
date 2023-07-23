import { useContext, useEffect } from 'react';
import { Account } from 'appwrite';
import { AppwriteContext } from '../context/appwrite';
import { UserContext } from '../context/user';
import Loading from '../components/Loading';

const Logout = () => {
    const client = useContext(AppwriteContext);
    const { state, setState, setUser } = useContext(UserContext);
    const account = new Account(client);

    if (!setUser || !setState || state === 'loading') {
        return <Loading />;
    }
    if (state !== 'loggedin') {
        return <div>User is not logged in!</div>;
    }
    useEffect(() => {
        (async () => {
            try {
                await account.deleteSession('current');
                setUser(null);
                setState('loggedout');
            } catch (error) {
                console.error(error);
            }
        })();
    });
    return <div>logout</div>;
};

export default Logout;
