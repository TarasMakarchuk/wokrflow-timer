import { FC, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { AppConstants } from '@/app.constants';
import { Foundation } from '@expo/vector-icons';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import cn from 'clsx';

export const Timer: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View className='justify-center flex-1'>
      <View className='self-center'>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={3121}
          colors={['#3A3570', '#664FF3']}
          colorsTime={[7, 0]}
          trailColor='#2F2F4C'
          onComplete={() => setIsPlaying(false)}
          size={250}
          strokeWidth={10}
        >
          {({remainingTime}) => {
            const minutes = Math.floor(remainingTime / 60);
            let seconds: string | number = remainingTime % 60;
            seconds = seconds <= 10 ? '0' + seconds : seconds;

            return <Text
              className='text-white text-6xl font-semibold mt-2'
            >
              {`${minutes}:${seconds}`}
            </Text>;
          }}
        </CountdownCircleTimer>
        <View>
        </View>
      </View>

      <Pressable
        style={{
          shadowColor: AppConstants.primaryColor,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.6,
          shadowRadius: 8,
          elevation: 20,
        }}
        onPress={() => setIsPlaying(!isPlaying)}
        className= {cn('self-center bg-primary w-[65px] h-[65px] items-center justify-center rounded-full mt-10', {
          'pl-1.5': !isPlaying
        })}
      >
        <Foundation
          name={ isPlaying ? 'pause' : 'play' }
          color='white'
          size={45}
        />
      </Pressable>
    </View>
  );
};
