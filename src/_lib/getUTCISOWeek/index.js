import toDate from '../../toDate/index'
import startOfUTCISOWeek from '../startOfUTCISOWeek/index'
import startOfUTCISOWeekYear from '../startOfUTCISOWeekYear/index'
import requiredArgs from '../requiredArgs/index'

var MILLISECONDS_IN_WEEK = 604800000

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var diff =
    startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}
