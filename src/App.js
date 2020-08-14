import React, { useState } from 'react'
import { UserEntry } from './screens/UserEntry'

import { calculateCalories } from './helpers/calculateCalories'

const App = () => {
    const [drinks, setDrinks] = useState({
        drinkOne: {
            abv: 0,
            volume: 568
        },
        drinkTwo: {
            abv: 0,
            volume: 568
        }
    })

    console.log(
        calculateCalories(drinks.drinkOne),
        calculateCalories(drinks.drinkTwo)
    )

    return <UserEntry drinks={drinks} setDrinks={setDrinks} />
}

export { App }
