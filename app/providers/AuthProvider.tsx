import * as Splash from 'expo-splash-screen';
import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useEffect, useState } from 'react';
import type { IUser } from '@/types/user.interface';

export type TypeUserState = IUser | null;

interface IContext {
 user: TypeUserState;
 setUser: Dispatch<SetStateAction<TypeUserState>>;
}

export const AuthContext = createContext({} as IContext);

let ignore = Splash.preventAutoHideAsync();

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>(null);

  useEffect(() => {
    let isMounted = false;

    const getUserFromStorage = async () => {
      if (isMounted) {
        // Get user from async storage and write store
      }
      await Splash.hideAsync();
    };

    let ignore = getUserFromStorage();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      { children }
    </AuthContext.Provider>
  );
};
