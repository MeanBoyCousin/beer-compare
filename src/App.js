import React, { useState, useEffect } from 'react'
import { Switch, Route, useLocation, Redirect } from 'react-router-dom'

import { ThresholdSettings } from './components/ThresholdSettings'
import { CalCounter } from './components/CalCounter'
import { UserEntry } from './screens/UserEntry'
import { BeerCompare } from './screens/BeerCompare'
import { BeerAdded } from './screens/BeerAdded'
import { About } from './screens/About'
import { Footer } from './components/Footer'

const App = () => {
    const location = useLocation()

    const [threshold, setThreshold] = useState(
        localStorage.threshold === undefined
            ? { state: false, calories: 800 }
            : JSON.parse(localStorage.threshold)
    )

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
        localStorage.threshold = JSON.stringify(threshold)
    }, [threshold])

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
            <div className="w-full flex sticky top-0 z-20">
                <ThresholdSettings
                    threshold={threshold}
                    setThreshold={setThreshold}
                />
                <CalCounter
                    calories={dailyCalories}
                    setDailyCalories={setDailyCalories}
                    threshold={threshold}
                />
            </div>
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
                    <BeerAdded calories={dailyCalories} threshold={threshold} />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Redirect from="*" to="/" />
            </Switch>
            <Footer />
        </>
    )
}

export { App }
