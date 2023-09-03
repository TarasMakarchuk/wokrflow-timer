import { FC, useEffect, useState } from 'react';
import cn from 'clsx';
import { Pressable, Text, View } from 'react-native';
import { AppConstants } from '@/app.constants';
import { Entypo, Foundation } from '@expo/vector-icons';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { StatusEnum } from './timer.interface';
import { CurrentDate } from './current-date/CurrentDate';

const flowDuration: number = 1 * 10;
const sessionCount: number = 10;
const breakDuration: number = 1 * 10;

// TODO: Add arrow next and previous
// TODO: Add rest time

export const Timer: FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [status, setStatus] = useState<StatusEnum>(StatusEnum.REST);
  const [currentSession, setCurrentSession] = useState<number>(1);
  const [key, setKey] = useState<number>(0);
  const isAllSessionsCompleted: boolean = currentSession === sessionCount;
  const isSmallIndicator: boolean = sessionCount > 7;

  useEffect(() => {
    if (isPlaying && status === StatusEnum.REST) {
      setKey(prev => prev + 1);
    }
  }, [isPlaying]);

  return (
    <View className='justify-center flex-1'>
      <View className='items-center'>
        <CurrentDate />
        {/*TODO: fix bug color*/}
        <CountdownCircleTimer
          key={key}
          isPlaying={isPlaying}
          duration={flowDuration}
          colors={['#3A3570', '#664FF3']}
          colorsTime={[flowDuration, 0]}
          trailColor='#2F2F4C'
          onComplete={() => {
            setIsPlaying(false);
            setCurrentSession(prev => prev + 1);
            setStatus(StatusEnum.REST);

            if (isAllSessionsCompleted) {
              // TODO: add animation completed congratulate
              setStatus(StatusEnum.COMPLETED);
            }

          }}
          size={240}
          strokeWidth={10}
          onUpdate={remainingTime => {
            if(!!remainingTime) setStatus(StatusEnum.WORK)
          }}
        >
          {({remainingTime}) => {
            let minutes: string | number = Math.floor(remainingTime / 60);
            let seconds: string | number = remainingTime % 60;

            if (status === StatusEnum.REST) {
              minutes = Math.floor(flowDuration / 60);
              seconds = flowDuration % 60;
            }

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            return (
              <View className='mt-5 items-center justify-center z-0'>
                <Text className='text-white text-7xl font-semibold'>
                  {`${minutes}:${seconds}`}
                </Text>
                <Text className='text-center text-4xl mt-0.5 text-white'>
                  { status }
                </Text>
                <Pressable onPress={() => {
                  if (currentSession > 0) {
                    setStatus(StatusEnum.REST);
                    setKey(0);
                    setIsPlaying(false);
                    setCurrentSession(1);
                  }
                }}
                 className='opacity-40 mt-5 z-10'>
                  <Entypo
                    name="ccw"
                    size={30}
                    color="white"
                  />
                </Pressable>
              </View>
            );
          }}
        </CountdownCircleTimer>

        <View className="mt-10 flex-row items-center justify-center">
          {Array.from(Array(sessionCount)).map((item, index) => (
            <View className="flex-row items-center" key={`point ${index}`}>
              <View
                className={cn('rounded-full border-[3px]',
                  index + 1 === currentSession
                    ? `bg-green-500 border-[#523FC0] ${isSmallIndicator ? 'w-[17px] h-[17px]' : 'w-[22px] h-[22px]'}`
                    : `bg-[#2C2B3C] border-transparent ${isSmallIndicator ? 'w-[15px] h-[15px]' : 'w-5 h-5'}`,
                  {
                    'bg-primary opacity-70':
                      index + 1 <= currentSession &&
                      index + 1 !== currentSession,
                  },
                  isSmallIndicator ? 'w-[15px] h-[15px]' : 'w-5 h-5',
                )}
              />
              { index + 1 !== sessionCount && <View className={cn('h-0.5 bg-[#2C2B3C]', {
                'bg-primary opacity-70': index + 2 <= currentSession,
              },
                isSmallIndicator ? 'w-3' : 'w-5',
              )} />}
            </View>
          ))
          }
        </View>
      </View>

      <View className='flex-row items-center mt-10 justify-center'>
        <Pressable onPress={() => {
          if (currentSession !== 1) {
            setCurrentSession(prev => prev - 1);
            setKey(prev => prev - 1);
            setIsPlaying(false);
          }
        }}
                   className='opacity-40'>
          <Entypo
            name='chevron-left'
            size={34}
            color='white'
          />
        </Pressable>
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
          className={cn('mx-8 bg-primary w-[65px] h-[65px] items-center justify-center rounded-full', {
            'pl-1.5': !isPlaying,
          })}
        >
          <Foundation
            name={isPlaying ? 'pause' : 'play'}
            color="white"
            size={45}
          />
        </Pressable>
        <Pressable onPress={
          () => {
            if (currentSession !== sessionCount + 1) {
              setCurrentSession(prev => prev + 1);
              setKey(prev => prev + 1);
              setIsPlaying(false);
            }}
        }
                   className='opacity-40'>
          <Entypo
            name='chevron-right'
            size={34}
            color='white'
          />
        </Pressable>
      </View>
    </View>
  );
};
