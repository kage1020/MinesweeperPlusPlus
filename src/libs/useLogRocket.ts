import { useEffect } from 'react'

import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'

const useLogRocket = () => {
  useEffect(() => {
    if (!window || !window.document || !process.env.NEXT_PUBLIC_LOG_ROCKET_ID) return
    LogRocket.init(process.env.NEXT_PUBLIC_LOG_ROCKET_ID)
    setupLogRocketReact(LogRocket)
  }, [])
}

export default useLogRocket
