import React from 'react'

import { RadioButton } from '../components/UserEntry/RadioButton'

const UserEntry = ({ drinks, setDrinks }) => {
    const containers = {
        pint: {
            name: 'Pint',
            volume: 568
        },
        halfPint: {
            name: 'Half Pint',
            volume: 284
        },
        twoThirds: {
            name: '2/3rds Pint',
            volume: 378
        },
        oneThirds: {
            name: '1/3rd Pint',
            volume: 189
        },
        '330ml': {
            name: '330ml',
            volume: 330
        },
        '440ml': {
            name: '440ml',
            volume: 440
        },
        '500ml': {
            name: '500ml',
            volume: 500
        }
    }

    return (
        <div>
            <h1>Beer Compare</h1>
            <h2>Compare your beers, cut those calories!</h2>
            <hr />
            <div>
                <p>What percentage is the first beer?</p>
                <input
                    type="number"
                    onBlur={e => {
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
                <p>What size is the drink?</p>
                {Object.values(containers).map(container => {
                    return (
                        <RadioButton
                            stringIndex="one"
                            container={container}
                            drinks={drinks}
                            setDrinks={setDrinks}
                            key={`${container.volume}-one`}
                        />
                    )
                })}
            </div>
            <div>
                <p>What percentage is the second beer?</p>
                <input
                    type="number"
                    onBlur={e => {
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
                <p>What size is the drink?</p>
                {Object.values(containers).map(container => {
                    return (
                        <RadioButton
                            stringIndex="two"
                            container={container}
                            drinks={drinks}
                            setDrinks={setDrinks}
                            key={`${container.volume}-two`}
                        />
                    )
                })}
            </div>
            <button>Compare</button>
        </div>
    )
}

export { UserEntry }
