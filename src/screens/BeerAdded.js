import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const svgVariant = {
    hidden: { y: '100%', opacity: 0 },
    animate: {
        y: '-5%',
        opacity: 0.7,
        transition: {
            duration: 1.5,
            ease: [0, 0, 0.2, 1]
        }
    },
    exit: { y: '100%', opacity: 0 }
}

const strokeVariant = {
    hidden: {
        pathLength: 0
    },
    animate: {
        pathLength: 1,
        transition: {
            duration: 3,
            ease: [0, 0, 0.2, 1],
            delay: 1.5
        }
    }
}

const cardVariant = {
    hidden: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: [0, 0, 0.2, 1]
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.25,
            ease: [0.4, 0, 1, 1]
        }
    }
}

const BeerAdded = () => {
    const [message, setMessage] = useState('')

    useEffect(() => {
        const messages = [
            'A wise choice!',
            'Cheers!',
            'Enjoy it!',
            'Every calorie counts!',
            "Make sure it's a cold one!"
        ]

        const randomMessage =
            messages[Math.floor(Math.random() * messages.length)]

        setMessage(randomMessage)
    }, [])

    return (
        <div className="flex flex-col items-center text-center relative">
            <motion.svg
                viewBox="0 0 200 465"
                className="fixed top-0 h-150"
                variants={svgVariant}
                initial="hidden"
                animate="animate"
                exit="exit"
            >
                <motion.path
                    fill="rgb(255, 191, 81)"
                    d="M 168.794 245.281 C 177.523 212.657 187.67 165.085 191.926 108.674 L 7.965 108.674 C 12.22 164.975 22.368 212.657 31.097 245.281 C 40.698 281.178 45.717 318.058 45.936 355.155 L 153.846 355.155 C 154.173 318.058 159.083 281.069 168.794 245.281 Z"
                />
                <motion.path
                    fill="rgb(242, 142, 28)"
                    d="M 153.846 355.155 L 45.936 355.155 C 45.936 356.465 45.936 357.665 45.936 358.974 L 45.936 432.624 L 153.737 432.624 L 153.737 358.974 C 153.846 357.665 153.846 356.465 153.846 355.155 Z"
                />
                <motion.path
                    fill="#FEFCE8"
                    d="M 45.936 432.624 L 45.936 445.936 C 45.936 453.137 51.828 459.029 59.029 459.029 L 99.836 459.029 L 140.644 459.029 C 147.845 459.029 153.737 453.137 153.737 445.936 L 153.737 432.624 L 45.936 432.624 Z"
                />
                <motion.path
                    stroke="#fff"
                    strokeWidth={3}
                    fill="#000"
                    variants={strokeVariant}
                    initial="hidden"
                    animate="animate"
                    d="M 140.753 465.03 L 59.029 465.03 C 48.554 465.03 39.935 456.519 39.935 445.936 L 39.935 432.624 C 39.935 429.351 42.662 426.623 45.936 426.623 L 153.737 426.623 C 157.01 426.623 159.738 429.351 159.738 432.624 L 159.738 445.936 C 159.847 456.41 151.227 465.03 140.753 465.03 Z M 51.937 438.625 L 51.937 445.936 C 51.937 449.864 55.101 453.028 59.029 453.028 L 140.753 453.028 C 144.681 453.028 147.845 449.864 147.845 445.936 L 147.845 438.625 L 51.937 438.625 Z"
                />
                <motion.path
                    fill="#FBF8C6"
                    d="M 193.89 55.865 L 99.945 55.865 L 6.001 55.865 C 6.001 74.195 6.765 91.762 7.965 108.674 L 191.926 108.674 C 193.126 91.871 193.89 74.195 193.89 55.865 Z"
                />
                <motion.path
                    stroke="#fff"
                    strokeWidth={3}
                    fill="#000"
                    variants={strokeVariant}
                    initial="hidden"
                    animate="animate"
                    d="M 191.926 114.675 L 7.965 114.675 C 4.801 114.675 2.182 112.275 1.964 109.111 C 0.655 91.217 0 73.322 0 55.865 C 0 52.591 2.728 49.864 6.001 49.864 L 193.999 49.864 C 197.272 49.864 200 52.591 200 55.865 C 200 73.322 199.345 91.217 198.036 109.111 C 197.6 112.275 195.09 114.675 191.926 114.675 Z M 13.53 102.673 L 186.361 102.673 C 187.234 89.034 187.78 75.286 187.889 61.866 L 12.002 61.866 C 12.111 75.286 12.657 89.034 13.53 102.673 Z"
                />
                <motion.path
                    stroke="#fff"
                    strokeWidth={3}
                    fill="#000"
                    variants={strokeVariant}
                    initial="hidden"
                    animate="animate"
                    d="M 153.846 438.625 L 46.045 438.625 C 42.771 438.625 40.044 435.897 40.044 432.624 L 40.044 358.974 C 40.044 320.895 35.134 283.142 25.314 246.809 C 17.13 216.148 6.328 167.376 1.964 109.111 C 1.855 107.474 2.4 105.837 3.601 104.528 C 4.692 103.328 6.328 102.564 7.965 102.564 L 191.926 102.564 C 193.562 102.564 195.199 103.219 196.29 104.528 C 197.381 105.728 198.036 107.365 197.927 109.111 C 193.562 167.376 182.87 216.148 174.577 246.809 C 164.866 283.142 159.847 320.895 159.847 358.974 L 159.847 432.624 C 159.847 435.897 157.119 438.625 153.846 438.625 Z M 51.937 426.623 L 147.736 426.623 L 147.736 358.974 C 147.736 319.804 152.864 281.069 162.902 243.753 C 170.649 214.73 180.797 169.231 185.379 114.785 L 14.403 114.785 C 18.985 169.231 29.023 214.73 36.879 243.753 C 46.918 281.069 52.046 319.913 52.046 358.974 L 52.046 426.623 Z"
                />
                <motion.path
                    fill="#FFFFFF"
                    d="M 51.937 262.848 C 49.209 262.848 46.699 260.993 46.045 258.156 C 44.845 252.81 43.535 247.463 42.117 242.226 C 39.28 231.86 36.661 221.058 34.261 210.038 C 33.606 206.765 35.57 203.601 38.843 202.946 C 42.117 202.291 45.281 204.255 45.936 207.529 C 48.336 218.331 50.846 228.914 53.573 239.171 C 54.992 244.517 56.41 250.082 57.61 255.537 C 58.374 258.811 56.301 261.975 53.137 262.739 C 52.81 262.848 52.373 262.848 51.937 262.848 Z"
                />
                <motion.path
                    fill="#FFFFFF"
                    d="M 61.429 321.44 C 58.374 321.44 55.756 319.149 55.428 315.985 C 54.555 307.256 53.464 298.418 52.155 289.798 C 51.609 286.525 53.901 283.47 57.174 282.924 C 60.447 282.379 63.502 284.67 64.048 287.943 C 65.466 296.781 66.558 305.837 67.43 314.785 C 67.758 318.058 65.357 321.004 61.975 321.331 C 61.757 321.44 61.538 321.44 61.429 321.44 Z"
                />
                <motion.path
                    fill="#FEFCE8"
                    d="M 187.016 55.865 C 183.743 40.262 169.885 28.587 153.301 28.587 C 149.154 28.587 145.226 29.351 141.517 30.66 C 133.879 16.039 118.603 6.001 100.927 6.001 C 82.597 6.001 66.776 16.803 59.465 32.297 C 54.664 28.369 48.445 25.968 41.68 25.968 C 26.187 25.968 13.53 38.516 13.53 54.119 C 13.53 54.664 13.53 55.319 13.639 55.865 L 24.877 55.865 C 33.388 55.865 40.371 62.739 40.371 71.358 L 40.371 179.051 C 40.371 185.27 45.39 190.398 51.718 190.398 L 51.718 190.398 C 57.938 190.398 63.066 185.379 63.066 179.051 L 63.066 64.157 C 63.066 59.574 66.776 55.974 71.249 55.974 L 71.249 55.974 C 75.832 55.974 79.433 59.684 79.433 64.157 L 79.433 110.529 C 79.433 116.312 84.124 121.004 89.907 121.004 L 89.907 121.004 C 95.69 121.004 100.382 116.312 100.382 110.529 L 100.382 71.358 C 100.382 62.848 107.256 55.865 115.876 55.865 L 187.016 55.865 Z"
                />
                <motion.path
                    stroke="#fff"
                    strokeWidth={3}
                    fill="#000"
                    variants={strokeVariant}
                    initial="hidden"
                    animate="animate"
                    d="M 51.609 196.399 C 42.117 196.399 34.261 188.652 34.261 179.051 L 34.261 71.358 C 34.261 66.121 30.005 61.866 24.768 61.866 L 13.53 61.866 C 10.366 61.866 7.747 59.356 7.529 56.192 C 7.529 55.537 7.42 54.774 7.42 54.119 C 7.42 35.243 22.695 19.967 41.571 19.967 C 47.027 19.967 52.373 21.277 57.174 23.786 C 66.558 9.165 83.033 0 100.709 0 C 118.385 0 134.643 8.947 144.135 23.568 C 147.081 22.913 150.027 22.586 153.082 22.586 C 172.068 22.586 188.762 36.116 192.58 54.664 C 192.908 56.41 192.471 58.265 191.38 59.684 C 190.289 61.102 188.543 61.866 186.688 61.866 L 115.439 61.866 C 110.202 61.866 105.947 66.121 105.947 71.358 L 105.947 110.529 C 105.947 119.585 98.527 127.005 89.471 127.005 C 80.415 127.005 72.995 119.585 72.995 110.529 L 72.995 64.048 C 72.995 62.848 72.013 61.866 70.813 61.866 C 69.613 61.866 68.631 62.848 68.631 64.048 L 68.631 179.051 C 68.958 188.652 61.211 196.399 51.609 196.399 Z M 20.076 49.864 L 24.877 49.864 C 36.661 49.864 46.372 59.465 46.372 71.358 L 46.372 179.051 C 46.372 181.997 48.773 184.397 51.718 184.397 C 54.664 184.397 57.065 181.997 57.065 179.051 L 57.065 64.157 C 57.065 56.301 63.393 49.973 71.249 49.973 C 79.105 49.973 85.434 56.301 85.434 64.157 L 85.434 110.529 C 85.434 113.039 87.398 115.003 89.907 115.003 C 92.417 115.003 94.381 113.039 94.381 110.529 L 94.381 71.358 C 94.381 59.574 103.983 49.864 115.876 49.864 L 178.614 49.864 C 173.813 40.698 164.103 34.588 153.41 34.588 C 150.027 34.588 146.754 35.134 143.699 36.334 C 140.862 37.316 137.698 36.116 136.279 33.497 C 129.405 20.295 115.876 12.002 101.037 12.002 C 85.652 12.002 71.577 20.949 65.03 34.915 C 64.266 36.552 62.739 37.861 60.884 38.189 C 59.138 38.625 57.174 38.189 55.756 36.989 C 51.718 33.715 46.918 31.969 41.789 31.969 C 30.987 31.969 22.04 39.716 20.076 49.864 Z"
                />
            </motion.svg>
            <motion.div
                className="h-90vh flex flex-col justify-center items-center w-full z-10"
                variants={cardVariant}
                initial="hidden"
                animate="animate"
                exit="exit"
            >
                <div className="modal">
                    <p className="text-black text-4xl m-2">{message}</p>
                    <Link className="active-btn m-2" to="/">
                        Another?
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export { BeerAdded }