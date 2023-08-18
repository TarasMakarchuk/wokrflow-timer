import { FC, PropsWithChildren } from 'react';
import { Pressable, Text } from 'react-native';
import cn from 'clsx';

export const Button: FC<PropsWithChildren<{ className: string }>> = ({ children, className }) => {
  return (
    <Pressable className={cn('self-center mt-3 bg-primary py-3 px-8 rounded', className)}>
      <Text className='font-semibold text-white text-xl'>
        {children}
      </Text>
    </Pressable>
  );
};
