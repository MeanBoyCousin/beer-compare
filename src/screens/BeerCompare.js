import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { BeerCard } from '../components/BeerCompare/BeerCard'
import { calculateCalories } from '../helpers/calculateCalories'

const BeerCompare = ({ drinks, updateCalories }) => {
    const [selected, setSelected] = useState(0)

    const pickDrink = cardNumber => {
        setSelected(cardNumber)
    }

    const bestChoice =
        calculateCalories(drinks.drinkOne) <= calculateCalories(drinks.drinkTwo)

    return (
        <div className="container pt-4 pb-4 h-90vh box-border">
            <h1 className="text-lg flex items-center flex-grow">
                Pick a beer and then hit submit.
            </h1>
            <BeerCard
                title="Beer One"
                position={1}
                drink={drinks.drinkOne}
                isSelected={selected === 1 ? true : false}
                isBestChoice={bestChoice ? true : false}
                pickDrink={pickDrink}
            />
            <BeerCard
                title="Beer Two"
                position={2}
                drink={drinks.drinkTwo}
                isSelected={selected === 2 ? true : false}
                isBestChoice={bestChoice ? false : true}
                pickDrink={pickDrink}
            />
            <div className="flex justify-evenly w-4/5 flex-grow mb-4 mt-2">
                <Link className="active-btn" to="/">
                    Back
                </Link>
                <Link
                    className={selected === 0 ? 'disabled-btn' : 'active-btn'}
                    to="/"
                    onClick={() => {
                        selected - 1 >= 0 &&
                            updateCalories(
                                calculateCalories(
                                    Object.values(drinks)[selected - 1]
                                )
                            )
                    }}
                >
                    Submit
                </Link>
            </div>
        </div>
    )
}

export { BeerCompare }

// console.log(
//     calculateCalories(drinks.drinkOne),
//     calculateCalories(drinks.drinkTwo)
// )
