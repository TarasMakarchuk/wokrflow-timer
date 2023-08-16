import { FC } from 'react';
import { Pressable } from 'react-native';
import type { IMenuItem, TypeNav } from './menu.interface';
import { AntDesign } from '@expo/vector-icons';
import { AppConstants } from '@/app.constants';

interface IMenuItemProps {
  item: IMenuItem;
  nav: TypeNav;
  currentRoute?: string;
}

export const MenuItem: FC<IMenuItemProps> = ({ currentRoute, nav, item }) => {
  const isActive = currentRoute === item.path

  return (
    <Pressable className='w-[24%]' onPress={() => nav(item.path)}>
      <AntDesign name={item.iconName as string} size={26} color={isActive ? AppConstants.primaryColor : '#8D8A97'} />
    </Pressable>
  );
};
