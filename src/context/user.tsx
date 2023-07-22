import { createContext } from 'react';

interface UserContextInterface {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>> | null;
    user: any;
    setUser: React.Dispatch<any> | null;
};
export const UserContext = createContext<UserContextInterface>({state: 'loading', setState: null, user: null, setUser: null});
