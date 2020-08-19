import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'

const CalCounter = ({ calories, setDailyCalories }) => {
    const [pingVisible, setPingVisible] = useState(false)

    useEffect(() => {
        setPingVisible(true)
        const pingTimer = setTimeout(() => {
            setPingVisible(false)
        }, 6000)

        return () => {
            clearTimeout(pingTimer)
        }
    }, [calories])

    return (
        <div className="relative z-20 flex justify-end items-center pb-2 h-10vh box-border">
            <span className="relative flex justify-center items-center mt-4 mr-4 rounded-md border border-info border-opacity-disabled bg-white shadow-sm">
                <CountUp
                    className="p-2 border-r border-info"
                    start={0}
                    end={calories}
                    duration={2}
                    easingFn={(t, b, c, d) => {
                        return c * ((t = t / d - 1) * t * t + 1) + b
                    }}
                    preserveValue={true}
                    separator=","
                    prefix="Today's beers - "
                    suffix=" kcal"
                />
                {pingVisible && (
                    <span className="absolute flex h-3 w-3 ping-offset opacity-70">
                        <span className="animate-ping absolute h-3 w-3 rounded-md bg-info"></span>
                        <span className="relative inline-flex rounded-md h-3 w-3 bg-info"></span>
                    </span>
                )}
                <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={
                        calories === 0
                            ? 'trash w-6 h-6 p-2 box-content opacity-disabled transition ease-out duration-medium-out delay-1500'
                            : 'trash w-6 h-6 p-2 box-content transition ease-in duration-medium-in'
                    }
                    onClick={() => {
                        if (calories !== 0) {
                            setDailyCalories(0)
                            localStorage.calories = 0
                        }
                    }}
                >
                    <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </span>
        </div>
    )
}

export { CalCounter }
