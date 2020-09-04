import React from 'react'
import { motion } from 'framer-motion'

import { mediumYUpInOut } from '../../motion/variants'

const IosPrompt = ({ setIosPromptVisible, lightMode }) => {
    return (
        <motion.div
            className={
                lightMode
                    ? 'fixed bottom-0 left-0 z-20 flex flex-col items-center p-2 bg-white rounded-t-md border-t border-info shadow-xs'
                    : 'fixed bottom-0 left-0 z-20 flex flex-col items-center p-2 bg-darkmode-black-xs rounded-t-md border-t border-darkmode-info shadow-xs'
            }
            variants={mediumYUpInOut}
            initial="hidden"
            animate="animate"
            exit="exit"
        >
            <p className="text-md text-center">
                Tap the{' '}
                <span className="inline-flex">
                    <svg
                        fill="currentColor"
                        viewBox="0 0 551.13 551.13"
                        stroke="none"
                        className={
                            lightMode
                                ? 'inline h-5 w-5 text-info'
                                : 'inline h-5 w-5 text-darkmode-info'
                        }
                    >
                        <path d="m465.016 172.228h-51.668v34.446h34.446v310.011h-344.457v-310.011h34.446v-34.446h-51.669c-9.52 0-17.223 7.703-17.223 17.223v344.456c0 9.52 7.703 17.223 17.223 17.223h378.902c9.52 0 17.223-7.703 17.223-17.223v-344.456c0-9.52-7.703-17.223-17.223-17.223z" />
                        <path d="m258.342 65.931v244.08h34.446v-244.08l73.937 73.937 24.354-24.354-115.514-115.514-115.514 115.514 24.354 24.354z" />
                    </svg>
                </span>{' '}
                icon and then 'Add to Home Screen' to install this app.
            </p>
            <button
                className={
                    lightMode ? 'active-btn my-2' : 'active-btn-dark my-2'
                }
                onClick={() => {
                    setIosPromptVisible(false)
                }}
            >
                Dismiss
            </button>
        </motion.div>
    )
}

export { IosPrompt }
