import React from 'react'
import { motion } from 'framer-motion'

import { containers } from '../../helpers/containers'
import { ABVInput } from './ABVInput'
import { RadioButton } from './RadioButton'

const BeerEntryCard = ({
    drinksState: { drinks, setDrinks },
    currentDrink,
    objectRef,
    lightMode
}) => {
    const beerEntryVariant = {
        hidden: { opacity: 0.2, x: currentDrink === 1 ? '-30px' : '30px' },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.25,
                ease: [0, 0, 0.2, 1]
            }
        },
        exit: {
            opacity: 0.2,
            x: currentDrink === 1 ? '-30px' : '30px',
            transition: {
                duration: 0.2,
                ease: [0.4, 0, 1, 1]
            }
        }
    }

    return (
        <motion.div
            className={
                lightMode
                    ? 'relative flex flex-col items-center justify-center flex-grow my-2 w-4/5 bg-white rounded-md p-2 shadow-xs'
                    : 'relative flex flex-col items-center justify-center flex-grow my-2 w-4/5 bg-darkmode-black-xs rounded-md p-2 shadow-xs'
            }
            variants={beerEntryVariant}
            initial="hidden"
            animate="animate"
            exit="exit"
        >
            <p className="pb-2 text-center text-lg underline">Percentage</p>
            <ABVInput
                key={`beer-abv-${currentDrink}`}
                placeholder="5.6"
                value={drinks[objectRef].abv}
                moveAway={e => {
                    const newAbv = Number(e.currentTarget.value)
                    setDrinks(drinks => ({
                        ...drinks,
                        [objectRef]: {
                            ...drinks[objectRef],
                            abv: newAbv
                        }
                    }))
                }}
                lightMode={lightMode}
            />
            <p className="py-2 text-center text-lg underline">Volume</p>
            <div className="flex flex-wrap mb-2">
                {Object.values(containers).map(container => {
                    return (
                        <RadioButton
                            key={`${container.volume}-${currentDrink}`}
                            stringIndex="one"
                            container={container}
                            click={() => {
                                setDrinks(drinks => ({
                                    ...drinks,
                                    [objectRef]: {
                                        ...drinks[objectRef],
                                        volume: container.volume
                                    }
                                }))
                            }}
                            selected={drinks[objectRef].volume}
                            lightMode={lightMode}
                        />
                    )
                })}
            </div>
            <p className="absolute bottom-0 right-0 p-2 text-sm font-semibold">
                Beer #{currentDrink}
            </p>
        </motion.div>
    )
}

export { BeerEntryCard }
