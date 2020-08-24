const containerVariant = {
    hidden: { opacity: 0, x: 30 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            ease: [0, 0, 0.2, 1]
        }
    },
    exit: {
        opacity: 0,
        x: -30,
        transition: {
            duration: 0.25,
            ease: [0.4, 0, 1, 1]
        }
    }
}

const mediumFadeIn = {
    hidden: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.25,
            ease: [0, 0, 0.2, 1]
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: [0.4, 0, 1, 1]
        }
    }
}

const mediumXIn = {
    hidden: { opacity: 0, x: 30 },
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
    hidden: { opacity: 0, x: 30 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.25,
            ease: [0, 0, 0.2, 1]
        }
    },
    exit: {
        opacity: 0,
        x: 30,
        transition: {
            duration: 0.2,
            ease: [0.4, 0, 1, 1]
        }
    }
}

const largeYIn = {
    hidden: { y: -20, opacity: 0 },
    animate: {
        y: -50,
        opacity: 0.7,
        transition: {
            duration: 0.3,
            ease: [0, 0, 0.2, 1]
        }
    }
}

const mediumYInOut = {
    hidden: { opacity: 0, y: 30 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.25,
            ease: [0, 0, 0.2, 1]
        }
    },
    exit: {
        opacity: 0,
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
    hidden: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0, 0, 0.2, 1]
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: [0.4, 0, 1, 1]
        }
    }
}

export {
    containerVariant,
    mediumFadeIn,
    mediumXIn,
    mediumXInOut,
    largeYIn,
    mediumYInOut,
    svgStrokeIn,
    pingVariant
}
