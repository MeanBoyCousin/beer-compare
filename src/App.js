import React, { useState, useEffect } from 'react'
import { Switch, Route, useLocation, Redirect } from 'react-router-dom'

import { CalCounter } from './components/CalCounter'
import { UserEntry } from './screens/UserEntry'
import { BeerCompare } from './screens/BeerCompare'
import { BeerAdded } from './screens/BeerAdded'

const App = () => {
    const location = useLocation()

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
    const [dailyCalories, setDailyCalories] = useState(
        Number(localStorage.calories) || 0
    )

    const updateCalories = caloriesToAdd => {
        setDailyCalories(dailyCalories + caloriesToAdd)
    }

    useEffect(() => {
        localStorage.calories = dailyCalories
    }, [dailyCalories])

    useEffect(() => {
        const today = new Date().getDate()
        if (
            Number(localStorage.date) !== today ||
            localStorage.calories === undefined
        ) {
            localStorage.date = new Date().getDate()
            localStorage.calories = 0
            setDailyCalories(0)
        }
    }, [])

    return (
        <>
            <CalCounter
                calories={dailyCalories}
                setDailyCalories={setDailyCalories}
            />
            <Switch location={location} key={location.key}>
                <Route exact path="/">
                    <UserEntry drinks={drinks} setDrinks={setDrinks} />
                </Route>
                <Route path="/pick">
                    <BeerCompare
                        drinks={drinks}
                        updateCalories={updateCalories}
                    />
                </Route>
                <Route path="/added">
                    <BeerAdded />
                </Route>
                <Redirect from="*" to="/" />
            </Switch>
        </>
    )
}

export { App }
