import React from 'react'

const Toggle = ({ offLabel, onLabel, initial, setThreshold }) => {
    return (
        <label
            htmlFor="toggle"
            className="flex items-center cursor-pointer p-2"
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
                            ? 'flex items-center justify-evenly w-12 h-6 bg-success rounded-full shadow-inner'
                            : 'flex items-center justify-evenly w-12 h-6 bg-error rounded-full shadow-inner'
                    }
                >
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="check w-4 h-4 text-white"
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
                        className="x w-4 h-4 text-white"
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
                            ? 'absolute top-0 left-toggle-full w-6 h-6 bg-white rounded-full shadow-sm transition-all duration-small'
                            : 'absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow-sm transition-all duration-small'
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
