import * as SplashScreen from 'expo-splash-screen';
import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useEffect, useState } from 'react';
import type { IUser } from '@/types/user.interface';

export type TypeUserState = IUser | null;

interface IContext {
 user: TypeUserState;
 setUser: Dispatch<SetStateAction<TypeUserState>>;
}

export const AuthContext = createContext({} as IContext);

let ignore = SplashScreen.preventAutoHideAsync();

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>(null);

  useEffect(() => {}, [
    // Get user from async storage and write store
  ]);


  return (
    <AuthContext.Provider value={{ user, setUser }}>
      { children }
    </AuthContext.Provider>
  );
};
