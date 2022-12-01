import type { NextPage } from 'next'
import { createContext } from 'react'

import { useStopwatch } from 'react-timer-hook'

import Header from '@components/Header'
import useLogRocket from '@libs/useLogRocket'
import DescScene from '@scenes/desc'
import LoseScene from '@scenes/lose'
import PlayScene from '@scenes/play'
import SelectScene from '@scenes/select'
import StartScene from '@scenes/start'

export const TimeContext = createContext({
  hours: 0,
  minutes: 0,
  seconds: 0,
  start: () => {
    return
  },
  pause: () => {
    return
  },
})

const Home: NextPage = () => {
  useLogRocket()
  const { hours, minutes, seconds, start, pause } = useStopwatch({})

  return (
    <TimeContext.Provider value={{ hours, minutes, seconds, start, pause }}>
      <main className='relative p-4'>
        <Header />
        <div className='relative grid place-items-center'>
          <StartScene />
          <DescScene />
          <SelectScene />
          <PlayScene />
          <LoseScene />
        </div>
      </main>
    </TimeContext.Provider>
  )
}

export default Home
