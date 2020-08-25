import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { mediumFadeInOut, mediumXInOut } from '../motion/variants'
import { Toggle } from './ThresholdSettings/Toggle'

const ThresholdSettings = ({ threshold, setThreshold }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const calorieInput = useRef()

    return (
        <>
            <div className="relative flex justify-start items-center pb-2 w-1/5 h-10vh box-border">
                <button
                    className="settings-btn mt-4 ml-4 p-2 hover:shadow-sm active:shadow-md active:outline-none"
                    onClick={() => {
                        setModalVisible(modal => {
                            return !modal
                        })
                    }}
                >
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="cog w-6 h-6 hover:animate-spin"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </button>
            </div>
            <AnimatePresence>
                {modalVisible && (
                    <motion.div
                        className="fixed top-0 left-0 z-30 flex items-center justify-center w-full h-full bg-black-disabled"
                        variants={mediumFadeInOut}
                        initial="hidden"
                        animate="animate"
                        exit="exit"
                    >
                        <motion.div
                            className="modal"
                            variants={mediumXInOut}
                            initial="hidden"
                            animate="animate"
                            exit="exit"
                        >
                            <h2 className="text-center text-sm p-2">
                                Use the below settings to specify a threshold
                                for your calories. You will then be warned when
                                you are nearing or over that value.
                            </h2>
                            <Toggle
                                offLabel="Turn on"
                                onLabel="Turn off"
                                initial={threshold}
                                setThreshold={setThreshold}
                            />
                            {threshold.state ? (
                                <>
                                    <form
                                        onSubmit={e => {
                                            e.preventDefault()
                                            calorieInput.current.blur()
                                        }}
                                    >
                                        <input
                                            ref={calorieInput}
                                            type="number"
                                            inputMode="decimal"
                                            className="form-input text-center mt-2 transition-all duration-medium-in active:border-primary-light-active active:shadow-sm"
                                            placeholder={568}
                                            defaultValue={threshold.calories}
                                            onBlur={e => {
                                                const newCalories = Number(
                                                    e.currentTarget.value
                                                )
                                                setThreshold(threshold => ({
                                                    ...threshold,
                                                    calories: newCalories
                                                }))
                                            }}
                                        />
                                    </form>
                                    <p className="text-center text-xs p-2 transition-all duration-medium-in">
                                        Set your calorie limit.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <input
                                        disabled={true}
                                        type="number"
                                        inputMode="decimal"
                                        className="form-input text-center mt-2 opacity-disabled transition-all duration-medium-in active:border-primary-light-active active:shadow-sm"
                                        placeholder={568}
                                        defaultValue={threshold.calories}
                                    />
                                    <p className="text-center text-xs p-2 opacity-disabled transition-all duration-medium-in">
                                        Set your calorie limit.
                                    </p>
                                </>
                            )}
                            <button
                                className="active-btn m-2"
                                onClick={() => {
                                    setModalVisible(modal => {
                                        return !modal
                                    })
                                }}
                            >
                                Confirm
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export { ThresholdSettings }
