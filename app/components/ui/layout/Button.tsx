import { FC, PropsWithChildren } from 'react';
import { Pressable, PressableProps, Text } from 'react-native';
import cn from 'clsx';

interface IButton extends PressableProps {}

export const Button: FC<PropsWithChildren<IButton>> = ({children, className}) => {
  return (
    <Pressable className={cn('self-center mt-4 bg-primary py-3 px-8 rounded', className)}>
      <Text className='font-semibold text-white text-xl'>
        {children}
      </Text>
    </Pressable>
  );
};