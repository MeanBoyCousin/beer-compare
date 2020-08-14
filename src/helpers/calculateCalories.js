const calculateCalories = ({ abv, volume }) => {
    return Math.ceil(((abv * 2.64) / 29.5735) * volume)
}

export { calculateCalories }
