function calculateInterval(dailyIncrease) {
  const millisecondsInOneDay = 24 * 60 * 60 * 1000
  const interval = millisecondsInOneDay / dailyIncrease
  return interval
}

export const getInflationInterval = (amount) => {
  const yearlyInflationRate = 0.215 // https://www.ksh.hu/
  const amontIncrease = amount * yearlyInflationRate
  const dailyIncrease = amontIncrease / 365
  const interval = calculateInterval(dailyIncrease)
  return interval
}

export const getIntervalFromYearlyAmount = (amount) => {
  const interval = calculateInterval(amount / 365)
  return interval
}
