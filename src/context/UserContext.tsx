import { createContext } from 'react';

type User = { name: string; isLoggedIn: boolean };

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = createContext<UserContextType>({} as UserContextType);

export default UserContext;
