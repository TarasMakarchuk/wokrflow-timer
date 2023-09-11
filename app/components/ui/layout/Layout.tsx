import { FC, PropsWithChildren } from 'react';
import { Platform, SafeAreaView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Layout: FC<PropsWithChildren<{ title?: string }>> = ({ children, title }) => {
  const { top } = useSafeAreaInsets();

  return (
    <SafeAreaView
      className='flex-1'
      style={{
        paddingTop: Platform.OS === 'ios' ? top / 5 : top * 1.6
      }}
    >
      <View className='flex-1 px-6'>
        { title &&
          <Text className="pt-3 text-3xl text-white font-semibold text-center">
            { title }
          </Text>
        }
        <View className='flex-1'>
          { children }
        </View>
      </View>
    </SafeAreaView>
  );
};
