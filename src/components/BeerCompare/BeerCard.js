import React from 'react'

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
        'w-64 p-4 m-4 flex flex-col items-center justify-center transition-all ease-ease duration-small flex-grow bg-white rounded-md'

    return (
        <div
            className={
                isSelected && isBestChoice
                    ? `shadow-success ${commonCardClasses} animate-pulse`
                    : isSelected && !isBestChoice
                    ? `shadow-error ${commonCardClasses} animate-pulse`
                    : `shadow-xs hover:shadow-sm ${commonCardClasses}`
            }
            onClick={() => {
                pickDrink(position)
            }}
        >
            <h2 className="pt-2">{title}</h2>
            <p className="pt-2">
                {drink.abv}% - {drink.volume}ml
            </p>
            <p className="pt-2 font-bold text-xl">
                {calculateCalories(drink)} kcal
            </p>

            <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className={
                    isBestChoice
                        ? 'badge-check w-12 h-12 pt-2 text-success'
                        : 'badge-check w-12 h-12 pt-2 text-error'
                }
            >
                {isSelected && (
                    <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                    ></path>
                )}
            </svg>
        </div>
    )
}

export { BeerCard }
