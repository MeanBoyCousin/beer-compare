import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Switch, Route, useLocation } from 'react-router-dom'

import { ServiceWorkerWrapper } from './components/ServiceWorkerWrapper'
import { ThresholdSettings } from './components/ThresholdSettings'
import { CalCounter } from './components/CalCounter'
import { UserEntry } from './screens/UserEntry'
import { BeerCompare } from './screens/BeerCompare'
import { BeerAdded } from './screens/BeerAdded'
import { About } from './screens/About'
import { Footer } from './components/Footer'
import { MotionRedirect } from './components/MotionRedirect'

const App = () => {
    const location = useLocation()

    // Setup user threshold settings and set/update localStorage when user settings change.
    const [threshold, setThreshold] = useState(
        localStorage.threshold === undefined
            ? { state: false, calories: 800 }
            : JSON.parse(localStorage.threshold)
    )

    useEffect(() => {
        localStorage.threshold = JSON.stringify(threshold)
    }, [threshold])

    // Set localStorage variables for todays date and todays calories.
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

    // Setup calorie counter for the day and update localStorage when new drink added..
    const [dailyCalories, setDailyCalories] = useState(
        Number(localStorage.calories) || 0
    )

    const addToCalories = caloriesToAdd => {
        setDailyCalories(dailyCalories + caloriesToAdd)
    }

    useEffect(() => {
        localStorage.calories = dailyCalories
    }, [dailyCalories])

    // Setup last drink and set localStorage variable.
    const [lastDrinkCalories, setLastDrinkCalories] = useState(
        localStorage.last === undefined ? 0 : JSON.parse(localStorage.last)
    )

    useEffect(() => {
        localStorage.last = lastDrinkCalories
    }, [lastDrinkCalories])

    // Setup state for beer comparisons.
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

    return (
        <div className="overflow-hidden">
            <ServiceWorkerWrapper />
            <div className="w-full flex fixed top-0 z-20">
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
            <AnimatePresence initial={false} exitBeforeEnter>
                <Switch location={location} key={location.key}>
                    <Route exact path="/">
                        <UserEntry drinks={drinks} setDrinks={setDrinks} />
                    </Route>
                    <Route path="/pick">
                        <BeerCompare
                            drinks={drinks}
                            updateCalories={addToCalories}
                            setLast={setLastDrinkCalories}
                        />
                    </Route>
                    <Route path="/added">
                        <BeerAdded
                            calories={dailyCalories}
                            threshold={threshold}
                            updateCalories={addToCalories}
                            setLast={setLastDrinkCalories}
                        />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <MotionRedirect to="/" />
                </Switch>
            </AnimatePresence>
            <Footer />
        </div>
    )
}

export { App }
