import { FC, useEffect, useState } from 'react';
import moment from 'moment-timezone';
import { Text, View } from 'react-native';

export const CurrentDate: FC = () => {
  const datePattern: string = `D MMMM YYYY, HH:mm`;
  const [currentTime, setCurrentTime] = useState<string>(moment().format(datePattern));

  const updateCurrentTime = (): void => {
    setCurrentTime(moment().format(datePattern));
  };

  useEffect(() => {
    const intervalId = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(intervalId);
  }, [currentTime]);

  return (
    <View>
      <Text className='text-white text-2xl mb-5 color-primary'>{ currentTime }</Text>
    </View>
  );
};
