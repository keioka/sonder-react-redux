const today: Date = new Date(Date.now())
const fullYearToday: string = today.getFullYear()
const dateToday: string = today.getDate()
const monthToday: string = today.getMonth()
const timeModule = {}

timeModule.today = today
timeModule.fullYearToday = fullYearToday
timeModule.dateToday = dateToday
timeModule.monthToday = monthToday + 1

export default timeModule
