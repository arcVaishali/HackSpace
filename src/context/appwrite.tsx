import { createContext } from 'react';
import { Client } from 'appwrite';

export const AppwriteContext = createContext(new Client());
