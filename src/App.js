import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Switch, Route, useLocation } from 'react-router-dom'

import { ServiceWorkerWrapper } from './components/ServiceWorkerWrapper'
import { Settings } from './components/Settings'
import { CalCounter } from './components/CalCounter'
import { UserEntry } from './screens/UserEntry'
import { BeerCompare } from './screens/BeerCompare'
import { BeerAdded } from './screens/BeerAdded'
import { About } from './screens/About'
import { Footer } from './components/Footer'
import { MotionRedirect } from './components/MotionRedirect'

const App = () => {
    const location = useLocation()

    // Set state for color mode.
    const [lightMode, setLightMode] = useState(
        localStorage.colorMode === undefined
            ? true
            : JSON.parse(localStorage.colorMode)
    )

    useEffect(() => {
        localStorage.colorMode = JSON.stringify(lightMode)

        // Set body transitions and color based on color mode.
        document.body.classList.add(
            'transition-colors',
            'duration-large-in',
            'ease-ease'
        )
        if (lightMode) {
            document.body.classList.remove(
                'bg-darkmode-black',
                'text-darkmode-white'
            )
            document.body.classList.add('bg-primary-lighter', 'text-black')
        } else {
            document.body.classList.remove('bg-primary-lighter', 'text-black')
            document.body.classList.add(
                'bg-darkmode-black',
                'text-darkmode-white'
            )
        }
    }, [lightMode])

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
        <div className="relative overflow-hidden">
            <ServiceWorkerWrapper />
            <div className="w-full flex fixed top-0 z-20">
                <Settings
                    thresholdState={{ threshold, setThreshold }}
                    lightModeState={{ lightMode, setLightMode }}
                />
                <CalCounter
                    calorieState={{ dailyCalories, setDailyCalories }}
                    threshold={threshold}
                    lightMode={lightMode}
                />
            </div>
            <AnimatePresence initial={false} exitBeforeEnter>
                <Switch location={location} key={location.key}>
                    <Route exact path="/">
                        <UserEntry
                            drinksState={{ drinks, setDrinks }}
                            lightMode={lightMode}
                        />
                    </Route>
                    <Route path="/pick">
                        <BeerCompare
                            drinks={drinks}
                            updateCalories={addToCalories}
                            setLast={setLastDrinkCalories}
                            lightMode={lightMode}
                        />
                    </Route>
                    <Route path="/added">
                        <BeerAdded
                            calories={dailyCalories}
                            threshold={threshold}
                            updateCalories={addToCalories}
                            setLast={setLastDrinkCalories}
                            lightMode={lightMode}
                        />
                    </Route>
                    <Route path="/about">
                        <About lightMode={lightMode}/>
                    </Route>
                    <MotionRedirect to="/" />
                </Switch>
            </AnimatePresence>
            <Footer lightMode={lightMode} />
        </div>
    )
}

export { App }
