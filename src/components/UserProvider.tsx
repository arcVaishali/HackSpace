import { useState, useContext, useEffect } from 'react';
import { Account } from 'appwrite';
import { UserContext } from '../context/user';
import { AppwriteContext } from '../context/appwrite';

const UserProvider = ({ children}: {children: React.ReactNode}) => {
    const [state, setState] = useState('loading');
    const [user, setUser] = useState<any>(null);

    const client = useContext(AppwriteContext);

    useEffect(() => {
        (async () => {
            try {
                const account = new Account(client);
                const res = await account.get();
                setUser(res);
                setState('loggedin');
            } catch (error) {
                setUser(null);
                setState('loggedout');
            }
        })();
    }, [client]);

    return (
        <UserContext.Provider value={{
            state,
            setState,
            user,
            setUser,
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

