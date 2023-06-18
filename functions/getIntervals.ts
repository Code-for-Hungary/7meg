export const SECOND = 1000
export const HOUR = 60 * 60 * SECOND
export const DAY = 24 * HOUR
export const YEAR = 365 * DAY
export const MILLIARD = 1000*1000*1000

export const calculateInterval = (increaseDuringThePeriod, periodLengthInMillisec = DAY) => {
  const interval = periodLengthInMillisec / increaseDuringThePeriod
  return interval
}

export const calculateIntervalAndAmount = (increaseDuringThePeriod, periodLengthInMillisec = DAY) => {
  let interval = periodLengthInMillisec / increaseDuringThePeriod
  let amount = 1
  if (interval < 10) {
    amount = 10 / interval
    interval = 10
  }
  return { interval, amount }
}