const humanizeDuration = require('humanize-duration')
// 1 calorie = 0.001163kWh

// 1 hour of a 60watt light bulb = 0.06kWh
const calculateLightBulb = calories => {
    const hours = (calories * 0.001163) / 0.06
    const unix = Math.round(hours * 60 * 60 * 1000)
    return humanizeDuration(unix, {
        largest: 3,
        conjunction: ' and ',
        serialComma: false,
        round: true
    })
}

// 1 hour of 4K Ultra-HD streaming = 0.105kWh
const calculateStreaming = calories => {
    const hours = (calories * 0.001163) / 0.105
    const unix = Math.round(hours * 60 * 60 * 1000)
    return humanizeDuration(unix, {
        largest: 3,
        conjunction: ' and ',
        serialComma: false,
        round: true
    })
}

// 1 hour at 30mph in the average electric car = 9.21kWh
const calculateCar = calories => {
    const hours = (calories * 0.001163) / 9.21
    const unix = Math.round(hours * 60 * 60 * 1000)
    return humanizeDuration(unix, {
        largest: 3,
        conjunction: ' and ',
        serialComma: false,
        round: true
    })
}

const calculateEnergy = {
    LightBulb: {
        function: calculateLightBulb,
        message: `Did you know that you've drunk enough so far today to power a
        60-watt light bulb for `
    },
    Streaming: {
        function: calculateStreaming,
        message: `Did you know that you've drunk enough so far to stream 4K Ultra-HD TV for `
    },
    Car: {
        function: calculateCar,
        message: `Did you know that you've drunk enough so far today to run an electric car at 30mph for `
    }
}

export { calculateEnergy }
