import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { container } from '../motion/variants'
import { BeerCard } from '../components/BeerCompare/BeerCard'
import { calculateCalories } from '../helpers/calculateCalories'

const BeerCompare = ({ drinks, updateCalories, setLast, lightMode }) => {
    const [selected, setSelected] = useState(0)

    const pickDrink = cardNumber => {
        setSelected(cardNumber)
    }

    return (
        <motion.div
            key="BeerCompareContainer"
            className="container pt-4 pb-4 box-border"
            variants={container}
            initial="hidden"
            animate="animate"
            exit="exit"
        >
            <p className="text-3xl w-4/5">Pick your beer!</p>
            <BeerCard
                key="beer-one"
                title="Beer One"
                position={1}
                drink={drinks.drinkOne}
                isSelected={selected === 1 ? true : false}
                isBestChoice={
                    calculateCalories(drinks.drinkOne) <=
                    calculateCalories(drinks.drinkTwo)
                        ? true
                        : false
                }
                pickDrink={pickDrink}
                lightMode={lightMode}
            />
            <BeerCard
                key="beer-two"
                title="Beer Two"
                position={2}
                drink={drinks.drinkTwo}
                isSelected={selected === 2 ? true : false}
                isBestChoice={
                    calculateCalories(drinks.drinkOne) >=
                    calculateCalories(drinks.drinkTwo)
                        ? true
                        : false
                }
                pickDrink={pickDrink}
                lightMode={lightMode}
            />
            <div className="flex justify-evenly w-4/5 mt-4 mb-8 flex-none">
                <Link
                    className={lightMode ? 'active-btn' : 'active-btn-dark'}
                    to="/"
                >
                    Back
                </Link>
                <Link
                    className={
                        selected === 0
                            ? lightMode
                                ? 'disabled-btn pointer-events-none'
                                : 'disabled-btn-dark pointer-events-none'
                            : `${lightMode ? 'active-btn' : 'active-btn-dark'}`
                    }
                    to="/added"
                    onClick={() => {
                        if (selected - 1 >= 0) {
                            const selectedCalories = calculateCalories(
                                Object.values(drinks)[selected - 1]
                            )
                            updateCalories(selectedCalories)
                            setLast(selectedCalories)
                        }
                    }}
                >
                    Drink!
                </Link>
            </div>
        </motion.div>
    )
}

export { BeerCompare }
