import { createContext } from 'react';

interface AuthContextData {
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;
