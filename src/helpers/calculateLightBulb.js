// 1 hour of a 60watt light Bulb = 0.06kWh
// 1 calorie = 0.001163kWh

const humanizeDuration = require('humanize-duration')

const calculateLightBulb = calories => {
    const hours = (calories * 0.001163) / 0.06
    const unix = Math.round(hours * 60 * 60 * 1000)
    return humanizeDuration(unix, { largest: 2, delimiter: ' and ' })
}

export { calculateLightBulb }
