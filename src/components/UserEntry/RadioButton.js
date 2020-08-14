import React from 'react'

const RadioButton = ({
    stringIndex,
    container: { name, volume },
    drinks,
    setDrinks
}) => {
    return (
        <>
            <input
                type="radio"
                name={`volume-${stringIndex}`}
                id={`${volume}-${stringIndex}`}
                defaultChecked={
                    drinks.drinkOne.volume === volume ? true : false
                }
                onClick={() => {
                    setDrinks(drinks => ({
                        ...drinks,
                        drinkOne: {
                            ...drinks.drinkOne,
                            volume: volume
                        }
                    }))
                }}
            />
            <label htmlFor={`${volume}-${stringIndex}`}>{name}</label>
        </>
    )
}

export { RadioButton }
