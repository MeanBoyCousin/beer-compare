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
        <div className="container pt-4 pb-4 box-border">
            <h1 className="text-xl flex items-center flex-none">
                Pick a beer and then hit drink!
            </h1>
            <BeerCard
                title="Beer One"
                key="beer-one"
                position={1}
                drink={drinks.drinkOne}
                isSelected={selected === 1 ? true : false}
                isBestChoice={bestChoice ? true : false}
                pickDrink={pickDrink}
            />
            <BeerCard
                title="Beer Two"
                key="beer-two"
                position={2}
                drink={drinks.drinkTwo}
                isSelected={selected === 2 ? true : false}
                isBestChoice={bestChoice ? false : true}
                pickDrink={pickDrink}
            />
            <div className="flex justify-evenly w-4/5 mb-4 mt-2 flex-none">
                <Link className="active-btn" to="/">
                    Back
                </Link>
                <Link
                    className={
                        selected === 0
                            ? 'disabled-btn pointer-events-none'
                            : 'active-btn'
                    }
                    to="/added"
                    onClick={() => {
                        selected - 1 >= 0 &&
                            updateCalories(
                                calculateCalories(
                                    Object.values(drinks)[selected - 1]
                                )
                            )
                    }}
                >
                    Drink
                </Link>
            </div>
        </div>
    )
}

export { BeerCompare }
