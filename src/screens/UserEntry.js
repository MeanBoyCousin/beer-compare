import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

import { containerVariant } from '../motion/variants'
import { containers } from '../helpers/containers'
import { ABVInput } from '../components/UserEntry/ABVInput'
import { RadioButton } from '../components/UserEntry/RadioButton'

const UserEntry = ({ drinks, setDrinks }) => {
    const [currentBeer, setCurrentBeer] = useState(1)

    const beerEntryVariant = {
        hidden: { opacity: 0, x: currentBeer === 1 ? '-125%' : '125%' },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.25,
                ease: [0, 0, 0.2, 1]
            }
        },
        exit: {
            opacity: 0,
            x: currentBeer === 1 ? '-125%' : '125%',
            transition: {
                duration: 0.2,
                ease: [0.4, 0, 1, 1]
            }
        }
    }

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
                {currentBeer === 1 ? (
                    <motion.div
                        key="beer-entry-one"
                        className="flex flex-col items-center justify-center flex-grow w-4/5 bg-white rounded-md p-2 shadow-xs"
                        variants={beerEntryVariant}
                        initial="hidden"
                        animate="animate"
                        exit="exit"
                    >
                        <p className="pb-2 text-center text-lg">
                            What percentage is the first beer to compare?
                        </p>
                        <ABVInput
                            key="beer-one"
                            placeholder="6.2"
                            value={drinks.drinkOne.abv}
                            moveAway={e => {
                                const newAbv = Number(e.currentTarget.value)
                                setDrinks(drinks => ({
                                    ...drinks,
                                    drinkOne: {
                                        ...drinks.drinkOne,
                                        abv: newAbv
                                    }
                                }))
                            }}
                        />
                        <p className="py-2 text-center text-lg">
                            What size is the drink?
                        </p>
                        <div className="flex flex-wrap mb-2">
                            {Object.values(containers).map(container => {
                                return (
                                    <RadioButton
                                        stringIndex="one"
                                        container={container}
                                        click={() => {
                                            setDrinks(drinks => ({
                                                ...drinks,
                                                drinkOne: {
                                                    ...drinks.drinkOne,
                                                    volume: container.volume
                                                }
                                            }))
                                        }}
                                        selected={drinks.drinkOne.volume}
                                        key={`${container.volume}-one`}
                                    />
                                )
                            })}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="beer-entry-two"
                        className="flex flex-col items-center justify-center flex-grow w-4/5 bg-white rounded-md p-2 shadow-xs"
                        variants={beerEntryVariant}
                        initial="hidden"
                        animate="animate"
                        exit="exit"
                    >
                        <p className="pb-2 text-center text-lg">
                            What percentage is the second beer to compare?
                        </p>
                        <ABVInput
                            key="beer-two"
                            placeholder="5.6"
                            value={drinks.drinkTwo.abv}
                            moveAway={e => {
                                const newAbv = Number(e.currentTarget.value)
                                setDrinks(drinks => ({
                                    ...drinks,
                                    drinkTwo: {
                                        ...drinks.drinkTwo,
                                        abv: newAbv
                                    }
                                }))
                            }}
                        />
                        <p className="py-2 text-center text-lg">
                            What size is the drink?
                        </p>
                        <div className="flex flex-wrap mb-2">
                            {Object.values(containers).map(container => {
                                return (
                                    <RadioButton
                                        stringIndex="two"
                                        container={container}
                                        click={() => {
                                            setDrinks(drinks => ({
                                                ...drinks,
                                                drinkTwo: {
                                                    ...drinks.drinkTwo,
                                                    volume: container.volume
                                                }
                                            }))
                                        }}
                                        selected={drinks.drinkTwo.volume}
                                        key={`${container.volume}-two`}
                                    />
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="flex justify-evenly w-4/5 mt-4 mb-8 flex-none">
                <button
                    className={
                        currentBeer === 1 ? 'disabled-btn' : 'active-btn'
                    }
                    onClick={() => {
                        setCurrentBeer(1)
                    }}
                >
                    Prev Beer
                </button>
                {currentBeer === 1 ? (
                    <button
                        className="active-btn"
                        onClick={() => {
                            setCurrentBeer(2)
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
