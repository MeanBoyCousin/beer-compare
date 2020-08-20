import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { containers } from '../helpers/containers'
import { ABVInput } from '../components/UserEntry/ABVInput'
import { RadioButton } from '../components/UserEntry/RadioButton'

const UserEntry = ({ drinks, setDrinks }) => {
    const [currentBeer, setCurrentBeer] = useState(1)

    return (
        <div className="flex flex-col items-center text-center h-90vh">
            <h1 className="text-4xl pt-2">Beer Compare</h1>
            <h2 className="text-lg pt-2">
                Compare your beers, cut those calories!
            </h2>
            <hr className="border-primary-dark opacity-disabled my-4 w-full" />
            {currentBeer === 1 ? (
                <div className="flex flex-col items-center justify-center flex-grow w-4/5 mb-4">
                    <p className="py-2 text-center text-lg">
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
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center flex-grow w-4/5 mb-4">
                    <p className="py-2 text-center text-lg">
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
                </div>
            )}
            <div className="flex justify-evenly w-4/5 mb-4 mt-2 flex-none">
                <button
                    className={
                        currentBeer === 1
                            ? 'disabled-btn mb-6'
                            : 'active-btn mb-6'
                    }
                    onClick={() => {
                        setCurrentBeer(1)
                    }}
                >
                    Prev Beer
                </button>
                {currentBeer === 1 ? (
                    <button
                        className="active-btn mb-6"
                        onClick={() => {
                            setCurrentBeer(2)
                        }}
                    >
                        Next Beer
                    </button>
                ) : (
                    <Link className="active-btn mb-6" to="/pick">
                        Compare
                    </Link>
                )}
            </div>
        </div>
    )
}

export { UserEntry }
