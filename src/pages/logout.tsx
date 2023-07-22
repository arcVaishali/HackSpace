import { useContext, useEffect } from 'react';
import { Account } from 'appwrite';
import { AppwriteContext } from '../context/appwrite';
import { UserContext } from '../context/user';

const Logout = () => {
    const client = useContext(AppwriteContext);
    const { state, setState, setUser } = useContext(UserContext);
    const account = new Account(client);

    if (!setUser || !setState || state === 'loading') {
        return <div>Loading...</div>;
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
                console.log(error);
            }
        })();
    });
    return <div>logout</div>;
};

export default Logout;
