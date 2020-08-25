const containerVariant = {
    hidden: { opacity: 0.2, x: 30 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            ease: [0, 0, 0.2, 1]
        }
    },
    exit: {
        opacity: 0.2,
        x: -30,
        transition: {
            duration: 0.25,
            ease: [0.4, 0, 1, 1]
        }
    }
}

const mediumFadeInOut = {
    hidden: { opacity: 0.2 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.25,
            ease: [0, 0, 0.2, 1]
        }
    },
    exit: {
        opacity: 0.2,
        transition: {
            duration: 0.2,
            ease: [0.4, 0, 1, 1]
        }
    }
}

const mediumXIn = {
    hidden: { opacity: 0.2, x: 30 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.25,
            ease: [0, 0, 0.2, 1]
        }
    }
}

const mediumXInOut = {
    hidden: { opacity: 0.2, x: 30 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.25,
            ease: [0, 0, 0.2, 1]
        }
    },
    exit: {
        opacity: 0.2,
        x: -30,
        transition: {
            duration: 0.2,
            ease: [0.4, 0, 1, 1]
        }
    }
}

const largeYIn = {
    hidden: { opacity: 0.2, y: -20 },
    animate: {
        opacity: 0.7,
        y: -50,
        transition: {
            duration: 0.3,
            ease: [0, 0, 0.2, 1]
        }
    }
}

const mediumYInOut = {
    hidden: { opacity: 0.2, y: 30 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.25,
            ease: [0, 0, 0.2, 1]
        }
    },
    exit: {
        opacity: 0.2,
        y: 30,
        transition: {
            duration: 0.2,
            ease: [0.4, 0, 1, 1]
        }
    }
}

const svgStrokeIn = {
    hidden: {
        pathLength: 0
    },
    animate: {
        pathLength: 1,
        transition: {
            duration: 3,
            ease: [0, 0, 0.2, 1]
        }
    }
}

const pingVariant = {
    hidden: { opacity: 0.2 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0, 0, 0.2, 1]
        }
    },
    exit: {
        opacity: 0.2,
        transition: {
            duration: 0.4,
            ease: [0.4, 0, 1, 1]
        }
    }
}

export {
    containerVariant,
    mediumFadeInOut,
    mediumXIn,
    mediumXInOut,
    largeYIn,
    mediumYInOut,
    svgStrokeIn,
    pingVariant
}
