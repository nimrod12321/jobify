import React from 'react'
import { useAppContext } from '../context/appContext'

const Alert = () => {
  const {alertType, alertText} = useAppContext()
  return (
    <div className={`alert alert_${alertType}`}>
        {alertText}
    </div>
  )
}

export default Alert