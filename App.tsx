import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function () {
  return (
    <View className='bg-[#1E1C2E]'>
        <Text className='text-white'>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
  );
}
