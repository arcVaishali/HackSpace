import React, { useState} from 'react';
import { Client } from 'appwrite';
import { AppwriteContext } from '../context/appwrite';
import appwriteConfig from '../appwrite.json';

const AppwriteProvider = ({ children}: {children: React.ReactNode}) => {
    const [client] = useState(new Client());
    client
    .setEndpoint(appwriteConfig.endpoint) // Your API Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    ;
    return (
        <AppwriteContext.Provider value={client}>
            {children}
        </AppwriteContext.Provider>
    );
};

export default AppwriteProvider;
