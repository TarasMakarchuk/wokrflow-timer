import { FC } from 'react';
import { View } from 'react-native';
import { TypeNav } from './menu.interface';
import { menuDta } from '@/components/ui/layout/bottom-menu/menu.data';
import { MenuItem } from '@/components/ui/layout/bottom-menu/MenuItem';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IBottomMenu {
  nav: TypeNav;
  currentRoute?: string;
}

export const BottomMenu: FC<IBottomMenu> = (props) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      className='pt-5 px-3 flex-row justify-between items-center w-full'
      style={{ paddingBottom: bottom + 10}}
    >
      {
        menuDta.map(item =>
          <MenuItem
            item={item}
            key={item.path}
            { ...props }
          />
        )
      }
    </View>
  );
};
