import React, { Children } from 'react'
import DashboardProvider from './provider'

const DashboardLayout = (Children) => {
  return (
        <DashboardProvider> 
    <div>{Children}</div>
    </DashboardProvider> 
  )
}

export default DashboardLayout
