import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@/providers/AuthProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from '@/navigation/Navigation';
import { StatusBar } from 'react-native';

/**
TODO:
 [*] - Auth page + form
 [*] - Timer
 [*] - Day name
 [*] - Play/Pause
 [*] - Profile
 [*] - Customize flow, break, session count

 [] - Skip flow
 [] - reset
 [] - Week/mount statistics ???
 [] - Settings
 [] - Statistics
 [] - Animation
*/

const queryClient = new QueryClient();

export default function () {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </AuthProvider>
      <StatusBar style="light" />
    </QueryClientProvider>
  );
}
