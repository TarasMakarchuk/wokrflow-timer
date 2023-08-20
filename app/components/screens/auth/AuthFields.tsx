import { FC } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { validEmail } from './email.rgx';
import { IAuthFormData } from '@/types/auth.interface';
import cn from 'clsx';

export const AuthFields: FC<{ control: Control<IAuthFormData> }> = ({control}) => {
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: validEmail,
            message: 'Your email isn\'t valid',
          },
        }}
        name="email"
        render={({
          field: {value, onChange, onBlur},
          fieldState: {error},
        }) => (
          <>
            <View className={
              cn('rounded bg-[#272541] boreder pb-3 pt-2.5 px-4 my-2',
                !!error ? 'border-red-500' : 'border-transparent')
            }>
              <TextInput
                placeholder="Enter email"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                autoCapitalize="none"
                className="text-white text-lg transparent"
                placeholderTextColor="gray"
              />
            </View>
            {error && (
              <Text className="text-red-500 text-lg">{error.message} </Text>
            )}
          </>
        )}
      />
      <Controller
        control={control}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password length shold be 6 characters as minimum'
          }
        }}
        name="password"
        render={({
                   field: {value, onChange, onBlur},
                   fieldState: {error},
                 }) => (
          <>
            <View className={
              cn('rounded bg-[#272541] boreder pb-3 pt-2.5 px-4 my-2',
                !!error ? 'border-red-500' : 'border-transparent')
            }>
              <TextInput
                placeholder="Enter password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                autoCapitalize="none"
                className="text-white text-lg transparent"
                placeholderTextColor="gray"
                secureTextEntry
              />
            </View>
            {error && (
              <Text className="text-red-500 text-lg">{error.message} </Text>
            )}
          </>
        )}
      />
    </>
  );
};
