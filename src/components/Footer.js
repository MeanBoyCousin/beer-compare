import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

import { isIos, isInStandaloneMode } from '../helpers/iOSPromptCheckers'
import { mediumYInOut } from '../motion/variants'
const Footer = () => {
    const [event, setEvent] = useState(undefined) // For platforms that support native PWA prompt.
    const [isIosBrowser, setIsIosBrowser] = useState(false) // For iOS devices with no native PWA prompt.
    const [iosPromptVisible, setIosPromptVisible] = useState(false)

    useEffect(() => {
        // Set custom prompt event state for platforms with native PWA prompt.
        window.addEventListener('beforeinstallprompt', e => {
            e.preventDefault()
            setEvent(e)
        })

        // Set iOS prompt state.
        if (isIos() && !isInStandaloneMode()) setIsIosBrowser(true)
    }, [])

    return (
        <>
            <div className="relative flex items-center justify-evenly bg-primary-light h-10vh border-t border-opacity-disabled border-primary-dark shadow-sm">
                <Link
                    className="footer-btn hover:bg-primary-light-hover active:bg-primary-light-active"
                    to="/about"
                >
                    What is this?
                </Link>
                {!isInStandaloneMode() && (
                    <button
                        className="footer-btn flex items-center justify-center hover:bg-primary-light-hover active:bg-primary-light-active focus:outline-none"
                        onClick={() => {
                            if (event !== undefined && isIosBrowser === false) {
                                event.prompt()
                                event.userChoice.then(res => {
                                    if (res.outcome === 'accepted') {
                                        console.log('Install accepted')
                                        setEvent(undefined)
                                    } else {
                                        console.log('Install declined')
                                        setEvent(undefined)
                                    }
                                })
                            } else if (
                                event === undefined &&
                                isIosBrowser === true
                            ) {
                                setIosPromptVisible(true)
                            }
                        }}
                    >
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="plus w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                        <p>Install</p>
                    </button>
                )}
            </div>
            <AnimatePresence>
                {iosPromptVisible && (
                    <motion.div
                        className="fixed bottom-0 left-0 z-20 flex flex-col items-center p-2 bg-white rounded-t-md shadow-xs"
                        variants={mediumYInOut}
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
                                    className="inline h-5 w-5 text-info"
                                >
                                    <path d="m465.016 172.228h-51.668v34.446h34.446v310.011h-344.457v-310.011h34.446v-34.446h-51.669c-9.52 0-17.223 7.703-17.223 17.223v344.456c0 9.52 7.703 17.223 17.223 17.223h378.902c9.52 0 17.223-7.703 17.223-17.223v-344.456c0-9.52-7.703-17.223-17.223-17.223z" />
                                    <path d="m258.342 65.931v244.08h34.446v-244.08l73.937 73.937 24.354-24.354-115.514-115.514-115.514 115.514 24.354 24.354z" />
                                </svg>
                            </span>{' '}
                            icon and then 'Add to Home Screen' to install this
                            app.
                        </p>
                        <button
                            className="active-btn my-2"
                            onClick={() => {
                                setIosPromptVisible(false)
                            }}
                        >
                            Dismiss
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export { Footer }
