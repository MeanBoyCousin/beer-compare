import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import { motion, AnimatePresence } from 'framer-motion'

import { pingVariant } from '../motion/variants'

const CalCounter = ({
    calorieState: { dailyCalories, setDailyCalories },
    threshold,
    lightMode
}) => {
    const [pingVisible, setPingVisible] = useState(false)

    useEffect(() => {
        setPingVisible(true)
        const pingTimer = setTimeout(() => {
            setPingVisible(false)
        }, 6000)

        return () => {
            clearTimeout(pingTimer)
        }
    }, [dailyCalories])

    return (
        <div className="relative flex justify-end items-center pb-2 w-4/5 h-10vh box-border">
            <span
                className={
                    lightMode
                        ? 'relative flex justify-center items-center mt-4 mr-4 rounded-md border border-info border-opacity-disabled bg-white shadow-sm'
                        : 'relative flex justify-center items-center mt-4 mr-4 rounded-md border border-darkmode-info border-opacity-disabled bg-darkmode-black-sm shadow-sm'
                }
            >
                <CountUp
                    // prettier-ignore
                    className={
                        lightMode
                            ? threshold.state && dailyCalories >= threshold.calories
                                ? 'text-error font-semibold p-2 border-r border-info border-opacity-disabled transition-all duration-2s'
                                : threshold.state && dailyCalories >= threshold.calories * 0.8
                                ? 'text-error-light p-2 border-r border-info border-opacity-disabled transition-all duration-2s'
                                : 'text-black p-2 border-r border-info border-opacity-disabled transition-all duration-2s'
                            : threshold.state && dailyCalories >= threshold.calories
                            ? 'text-darkmode-error font-semibold p-2 border-r border-darkmode-info border-opacity-disabled transition-all duration-2s'
                            : threshold.state && dailyCalories >= threshold.calories * 0.8
                            ? 'text-darkmode-error-light p-2 border-r border-darkmode-info border-opacity-disabled transition-all duration-2s'
                            : 'text-darkmode-white p-2 border-r border-darkmode-info border-opacity-disabled transition-all duration-2s'
                    }
                    start={0}
                    end={dailyCalories}
                    duration={2}
                    easingFn={(t, b, c, d) => {
                        return c * ((t = t / d - 1) * t * t + 1) + b
                    }}
                    preserveValue={true}
                    redraw={true}
                    separator=","
                    prefix="Today's beers - "
                    suffix=" kcal"
                />
                <AnimatePresence>
                    {pingVisible && (
                        <motion.span
                            className="absolute flex h-3 w-3 ping-offset opacity-70"
                            variants={pingVariant}
                            initial="hidden"
                            animate="animate"
                            exit="exit"
                        >
                            <span
                                className={
                                    lightMode
                                        ? 'animate-ping absolute h-3 w-3 rounded-md bg-info'
                                        : 'animate-ping absolute h-3 w-3 rounded-md bg-darkmode-info'
                                }
                            ></span>
                            <span
                                className={
                                    lightMode
                                        ? 'relative inline-flex rounded-md h-3 w-3 bg-info'
                                        : 'relative inline-flex rounded-md h-3 w-3 bg-darkmode-info'
                                }
                            ></span>
                        </motion.span>
                    )}
                </AnimatePresence>
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className={
                        dailyCalories === 0
                            ? 'trash w-6 h-6 p-2 box-content opacity-disabled transition ease-out duration-medium-out delay-1500 cursor-pointer'
                            : 'trash w-6 h-6 p-2 box-content transition ease-in duration-medium-in cursor-pointer'
                    }
                    onClick={() => {
                        if (dailyCalories !== 0) {
                            setDailyCalories(0)
                            localStorage.calories = 0
                        }
                    }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                </svg>
            </span>
        </div>
    )
}

export { CalCounter }
