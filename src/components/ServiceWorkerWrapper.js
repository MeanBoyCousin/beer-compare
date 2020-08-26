import React, { useState, useEffect } from 'react'
import * as serviceWorker from '../serviceWorker'
import { motion, AnimatePresence } from 'framer-motion'

import { mediumYDownInOut } from '../motion/variants'

const ServiceWorkerWrapper = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [newWorker, setNewWorker] = useState(undefined)

    useEffect(() => {
        // Initial service worker registration.
        serviceWorker.register({
            onUpdate: registration => {
                setModalVisible(true)
                setNewWorker(registration.waiting)
            }
        })
    }, [])

    return (
        <AnimatePresence>
            {modalVisible && (
                <motion.div
                    key="ServiceWorkerWrapper"
                    className="fixed top-0 flex flex-col z-30 items-center p-2 w-full bg-white rounded-b-md border-b border-info shadow-xs"
                    variants={mediumYDownInOut}
                    initial="hidden"
                    animate="animate"
                    exit="exit"
                >
                    <p className="text-xl text-center py-2">
                        An update is available!
                    </p>
                    <button
                        className="active-btn my-2"
                        onClick={() => {
                            newWorker.postMessage({ type: 'SKIP_WAITING' })
                            setModalVisible(false)
                            window.location.reload()
                        }}
                    >
                        Update
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export { ServiceWorkerWrapper }
