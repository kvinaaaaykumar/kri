import React from 'react'
import TodayAdminEnter from './chart/user/TodayAdminEnter'
import TotalAdminEnter from './chart/user/TotalAdminEnter'
import ThisMonthAdminEnter from './chart/user/ThisMonthAdminEnter'
import ThisWeekAdminEnter from './chart/user/ThisWeekAdminEnter'
import TodayGeneralEnter from './chart/user/TodayGeneralEnter'
import ThisWeekGeneralEnter from './chart/user/ThisWeekGeneralEnter'
import ThisMonthGeneralEnter from './chart/user/ThisMonthGeneralEnter'
import TotalGeneralEnter from './chart/user/TotalGeneralEnter'

const ChartUsers = () => {
  return (
    <div>
        <TodayGeneralEnter />
        <ThisWeekGeneralEnter />
        <ThisMonthGeneralEnter />
        <TotalGeneralEnter />
        <TodayAdminEnter />
        <ThisWeekAdminEnter />
        <ThisMonthAdminEnter />
        <TotalAdminEnter />
    </div>
  )
}

export default ChartUsers