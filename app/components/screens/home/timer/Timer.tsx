import { FC, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { AppConstants } from '@/app.constants';
import { Foundation } from '@expo/vector-icons';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import cn from 'clsx';

export const Timer: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const circleCount = 7;

  return (
    <View className='justify-center flex-1'>
      <View className='items-center'>
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
            let minutes: string | number = Math.floor(remainingTime / 60);
            minutes = minutes < 10 ? '0' + minutes : minutes;
            let seconds: string | number = remainingTime % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            return <Text
              className='text-white text-6xl font-semibold mt-2'
            >
              {`${minutes}:${seconds}`}
            </Text>;
          }}
        </CountdownCircleTimer>

        <View className='mt-14 flex-row items-center justify-center'>
          { Array.from(Array(circleCount)).map((item, index) => (
            <View className='flex-row items-center' key={`point ${index}`}>
              <View className='w-5 h-5 bg-primary rounded-full' />
              { index + 1 !== circleCount && <View className='w-7 h-0.5 bg-primary' />}
            </View>
          ))
          }
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
