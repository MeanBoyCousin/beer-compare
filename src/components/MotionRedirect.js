import React from 'react'
import { motion } from 'framer-motion'
import { Redirect } from 'react-router'

const MotionRedirect = ({ ...props }) => (
    <motion.div exit="undefined">
        <Redirect {...props} />
    </motion.div>
)

export { MotionRedirect }
