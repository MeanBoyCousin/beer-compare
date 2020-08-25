import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

import { containerVariant } from '../motion/variants'
import { BeerEntryCard } from '../components/UserEntry/BeerEntryCard'

const UserEntry = ({ drinks, setDrinks }) => {
    const [currentDrink, setCurrentDrink] = useState(1)

    return (
        <motion.div
            key="UserEntryContainer"
            className="container"
            variants={containerVariant}
            initial="hidden"
            animate="animate"
            exit="exit"
        >
            <h1 className="text-3xl w-4/5">Beer Compare</h1>
            <h2 className="text-sm pb-2 w-4/5">
                Compare your beers, cut those calories!
            </h2>
            <hr className="border-primary-dark opacity-disabled mt-2 mb-4 w-full" />
            <AnimatePresence initial={false} exitBeforeEnter>
                {currentDrink === 1 ? (
                    <BeerEntryCard
                        key={`BeerEntryCard${currentDrink}`}
                        drinks={drinks}
                        setDrinks={setDrinks}
                        currentDrink={currentDrink}
                        objectRef="drinkOne"
                    />
                ) : (
                    <BeerEntryCard
                        key={`BeerEntryCard${currentDrink}`}
                        drinks={drinks}
                        setDrinks={setDrinks}
                        currentDrink={currentDrink}
                        objectRef="drinkTwo"
                    />
                )}
            </AnimatePresence>
            <div className="flex justify-evenly w-4/5 mt-4 mb-8 flex-none">
                <button
                    className={
                        currentDrink === 1 ? 'disabled-btn' : 'active-btn'
                    }
                    onClick={() => {
                        setCurrentDrink(1)
                    }}
                >
                    Prev Beer
                </button>
                {currentDrink === 1 ? (
                    <button
                        className="active-btn"
                        onClick={() => {
                            setCurrentDrink(2)
                        }}
                    >
                        Next Beer
                    </button>
                ) : (
                    <Link className="active-btn" to="/pick">
                        Compare
                    </Link>
                )}
            </div>
        </motion.div>
    )
}

export { UserEntry }
