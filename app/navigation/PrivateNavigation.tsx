import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IRoute, TypeRootStackParamList } from './navigation.types';
import { useAuth } from '@/hooks/useAuth';
import { routes } from '@/navigation/routes';
import { Auth } from '@/components/screens/auth/Auth';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

export const PrivateNavigation: FC = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: '#1E1C2E'
      },
    }}>
      { user ?
        routes.map((route: IRoute) => (
          <Stack.Screen key={ route.name } { ...route } />
        )) : <Stack.Screen name="Auth" component={Auth} />
      }
    </Stack.Navigator>
  );
};
