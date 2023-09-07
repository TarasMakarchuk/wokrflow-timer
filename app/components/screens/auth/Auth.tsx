import { FC, useState } from 'react';
import { Keyboard, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthFormData } from '@/types/auth.interface';
import { useAuth } from '@/hooks/useAuth';
import { Loader } from '@/components/ui/layout/Loader';
import { Button } from '@/components/ui/layout/Button';
import { AuthFields } from '@/components/screens/auth/AuthFields';

export const Auth: FC = () => {
  const [ isReq, setIsReq ] = useState<boolean>(false);
  const { control, reset, handleSubmit } = useForm<IAuthFormData>({
    mode: 'onChange',
  });
  const { setUser } = useAuth();
  const isLoading = false;

  const onSubmit: SubmitHandler<IAuthFormData> = data => {
    setUser({
      _id: '',
      ...data,
    });
    reset();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="items-center justify-center flex-1">
        <View className="w-3/4">
          <Text className="text-white text-5xl font-bold text-center mb-5">
            {isReq ? 'Sign up' : 'Sign in'}
          </Text>
          { isLoading ?
            <Loader /> :
            <>
              <AuthFields control={control}/>
              <Button
                onPress={handleSubmit(onSubmit)}
              >
                Let's go!
              </Button>
              <Pressable onPress={() => setIsReq(!isReq)} className="w-16 self-end">
                <Text className="text-opacity-60 text-white text-base mt-3 text-right">
                  {isReq ? 'Login' : 'Register'}
                </Text>
              </Pressable>
            </>
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
