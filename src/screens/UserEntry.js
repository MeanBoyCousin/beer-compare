import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

import { container } from '../motion/variants'
import { BeerEntryCard } from '../components/UserEntry/BeerEntryCard'

const UserEntry = ({ drinksState: { drinks, setDrinks }, lightMode }) => {
    const [currentDrink, setCurrentDrink] = useState(1)

    return (
        <motion.div
            key="UserEntryContainer"
            className="container"
            variants={container}
            initial="hidden"
            animate="animate"
            exit="exit"
        >
            <h1 className="text-3xl w-4/5">Beer Compare</h1>
            <h2 className="text-sm pb-2 w-4/5">
                Compare your beers, cut those calories!
            </h2>
            <hr
                className={
                    lightMode
                        ? 'border-primary-dark opacity-disabled mt-2 mb-4 w-full'
                        : 'border-darkmode-primary-dark opacity-disabled mt-2 mb-4 w-full'
                }
            />
            <AnimatePresence initial={false} exitBeforeEnter>
                {currentDrink === 1 ? (
                    <BeerEntryCard
                        key={`BeerEntryCard${currentDrink}`}
                        drinksState={{ drinks, setDrinks }}
                        currentDrink={currentDrink}
                        objectRef="drinkOne"
                        lightMode={lightMode}
                    />
                ) : (
                    <BeerEntryCard
                        key={`BeerEntryCard${currentDrink}`}
                        drinksState={{ drinks, setDrinks }}
                        currentDrink={currentDrink}
                        objectRef="drinkTwo"
                        lightMode={lightMode}
                    />
                )}
            </AnimatePresence>
            <div className="flex justify-evenly w-4/5 mt-4 mb-8 flex-none">
                <button
                    className={
                        currentDrink === 1
                            ? lightMode
                                ? 'disabled-btn'
                                : 'disabled-btn-dark'
                            : lightMode
                            ? 'active-btn'
                            : 'active-btn-dark'
                    }
                    onClick={() => {
                        setCurrentDrink(1)
                    }}
                >
                    Prev Beer
                </button>
                {currentDrink === 1 ? (
                    <button
                        className={lightMode ? 'active-btn' : 'active-btn-dark'}
                        onClick={() => {
                            setCurrentDrink(2)
                        }}
                    >
                        Next Beer
                    </button>
                ) : (
                    <Link
                        className={lightMode ? 'active-btn' : 'active-btn-dark'}
                        to="/pick"
                    >
                        Compare
                    </Link>
                )}
            </div>
        </motion.div>
    )
}

export { UserEntry }
