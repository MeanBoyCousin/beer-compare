import React from 'react'

const Toggle = ({ offLabel, onLabel, initial, setThreshold, lightMode }) => {
    return (
        <label
            htmlFor="toggle"
            className="flex items-center cursor-pointer p-2 no-tap-highlight"
        >
            <div className="relative">
                <input
                    id="toggle"
                    type="checkbox"
                    className="hidden"
                    onClick={() => {
                        setThreshold(threshold => ({
                            ...threshold,
                            state: !threshold.state
                        }))
                    }}
                />
                <div
                    className={
                        initial.state
                            ? lightMode
                                ? 'bg-success flex items-center justify-evenly w-12 h-6 rounded-full shadow-inner'
                                : 'bg-darkmode-success flex items-center justify-evenly w-12 h-6 rounded-full shadow-inner'
                            : lightMode
                            ? 'bg-error flex items-center justify-evenly w-12 h-6 rounded-full shadow-inner'
                            : 'bg-darkmode-error flex items-center justify-evenly w-12 h-6 rounded-full shadow-inner'
                    }
                >
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className={
                            lightMode
                                ? 'check w-5 h-5 text-white'
                                : 'check w-5 h-5 text-darkmode-white'
                        }
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className={
                            lightMode
                                ? 'x w-5 h-5 text-white'
                                : 'x w-5 h-5 text-darkmode-white'
                        }
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <div
                    className={
                        initial.state
                            ? lightMode
                                ? 'bg-white absolute top-0 left-toggle-full w-6 h-6 rounded-full shadow-sm transition-all duration-small'
                                : 'bg-darkmode-white absolute top-0 left-toggle-full w-6 h-6 rounded-full shadow-sm transition-all duration-small'
                            : lightMode
                            ? 'bg-white absolute top-0 left-0 w-6 h-6 rounded-full shadow-sm transition-all duration-small'
                            : 'bg-darkmode-white absolute top-0 left-0 w-6 h-6 rounded-full shadow-sm transition-all duration-small'
                    }
                ></div>
            </div>
            <div className="ml-2 select-none">
                {initial.state ? onLabel : offLabel}
            </div>
        </label>
    )
}

export { Toggle }
