import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

import { isIos, isInStandaloneMode } from '../helpers/iOSPromptCheckers'
import { IosPrompt } from './Footer/IosPrompt'

const Footer = ({ lightMode }) => {
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
            <div
                className={
                    lightMode
                        ? 'fixed bottom-0 w-full flex items-center justify-evenly bg-primary-light h-10vh border-t border-opacity-disabled border-primary-dark shadow-sm'
                        : 'fixed bottom-0 w-full flex items-center justify-evenly bg-darkmode-black-xs h-10vh border-t border-opacity-disabled border-darkmode-primary-dark shadow-sm'
                }
            >
                <Link
                    className={
                        lightMode
                            ? 'footer-btn hover:bg-primary-light-hover active:bg-primary-light-active'
                            : 'footer-btn hover:bg-darkmode-black-sm active:bg-darkmode-black-md'
                    }
                    to="/about"
                >
                    What is this?
                </Link>
                {!isInStandaloneMode() && (
                    <button
                        className={
                            lightMode
                                ? 'footer-btn flex items-center justify-center hover:bg-primary-light-hover active:bg-primary-light-active focus:outline-none'
                                : 'footer-btn flex items-center justify-center hover:bg-darkmode-black-sm active:bg-darkmode-black-md focus:outline-none'
                        }
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
                    <IosPrompt
                        setIosPromptVisible={setIosPromptVisible}
                        lightMode={lightMode}
                    />
                )}
            </AnimatePresence>
        </>
    )
}

export { Footer }
