import { FC, useState } from 'react';
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthFormData } from '@/components/screens/auth/auth.interface';
import { useAuth } from '@/hooks/useAuth';
import { Loader } from '@/components/ui/layout/Loader';
import { Button } from '@/components/ui/layout/Button';

export const Auth: FC = () => {
  const [isReq, setIsReq] = useState<boolean>(false);
  const {control, reset, handleSubmit} = useForm<IAuthFormData>({
    mode: 'onChange',
  });

  const {setUser} = useAuth();

  const onSubmit: SubmitHandler<IAuthFormData> = data => {
    setUser({
      _id: '',
      ...data,
    });
  };

  const isLoading = false;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className='items-center justify-center flex-1'>
        <View className='w-3/4'>
          <Text className='text-white text-5xl font-bold text-center'>
            {isReq ? 'Sign up' : 'Sign in'}
          </Text>
          {isLoading ?
            <Loader /> :
            <>
              {/*fields*/}
              <Button className=''>
                Let's go!
              </Button>
            </>
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
