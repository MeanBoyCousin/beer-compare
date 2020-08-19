import React from 'react'
import { motion } from 'framer-motion'

import { containers } from '../../helpers/containers'
import { calculateCalories } from '../../helpers/calculateCalories'

const BeerCard = ({
    title,
    position,
    drink,
    isSelected,
    isBestChoice,
    pickDrink
}) => {
    const commonCardClasses =
        'w-64 h-0 m-4 flex flex-col items-center justify-evenly transition-all ease-ease duration-medium-in bg-white rounded-md'

    const containerName = Object.values(containers).filter(
        container => container.volume === drink.volume
    )[0].name

    return (
        <div
            className={
                isSelected && isBestChoice
                    ? `shadow-success animate-pulse ${commonCardClasses} flex-grow-2`
                    : isSelected && !isBestChoice
                    ? `shadow-error animate-pulse ${commonCardClasses} flex-grow-2`
                    : `shadow-xs hover:shadow-sm ${commonCardClasses} flex-grow`
            }
            onClick={() => {
                pickDrink(position)
            }}
        >
            <p className="pt-2 text-lg">{title}</p>
            <p className="pt-2 text-lg">
                {drink.abv}% - {containerName}
            </p>
            <p className="pt-2 font-bold text-xl">
                {calculateCalories(drink)} kcal
            </p>
            {isSelected && (
                <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    className={
                        isBestChoice
                            ? 'badge-check w-16 h-16 pt-2 text-success'
                            : 'badge-check w-16 h-16 pt-2 text-error'
                    }
                >
                    <motion.path
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        initial={{ pathLength: 0 }}
                        animate={{
                            pathLength: 1,
                            transition: {
                                duration: 1,
                                ease: [0, 0, 0.2, 1],
                                delay: 0.25
                            }
                        }}
                    />
                </svg>
            )}
        </div>
    )
}

export { BeerCard }
