import { DateRange } from 'react-date-range'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DatePicker = ({value,handleSelect}) => {
  console.log(value)
  return (
    <DateRange
      ranges={[value]}
      onChange={handleSelect}
      rangeColors={['#F43F5E']}
      date={value.startDate}
      direction='vertical'
      showDateDisplay={false}
      minDate={value.startDate}
      maxDate={value.endDate}
    />
  )
}

export default DatePicker
