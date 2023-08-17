import { FC } from 'react';
import { View } from 'react-native';
import { TypeNav } from './menu.interface';
import { menuDta } from './menu.data';
import { MenuItem } from './MenuItem';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IBottomMenu {
  nav: TypeNav;
  currentRoute?: string;
}

export const BottomMenu: FC<IBottomMenu> = props => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      className='pt-5 px-3 flex-row justify-between items-center w-full bg-[#1E1C2E]'
      style={{ paddingBottom: bottom + 20 }}
    >
      {
        menuDta.map(item =>
          <MenuItem
            item={ item }
            key={ item.path }
            { ...props }
          />
        )
      }
    </View>
  );
};
