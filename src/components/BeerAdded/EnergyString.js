import React, { useState, useEffect } from 'react'

import { calculateEnergy } from '../../helpers/calculateEnergy'

const EnergyString = ({ calories }) => {
    const [energyFuncIndex, setEnergyFuncIndex] = useState(undefined)

    useEffect(() => {
        setEnergyFuncIndex(
            Math.floor(Math.random() * Object.keys(calculateEnergy).length)
        )
    }, [])

    return (
        <>
            {energyFuncIndex !== undefined && (
                <p className="text-black text-xs mt-2">
                    {Object.values(calculateEnergy)[energyFuncIndex].message}
                    <span className="font-semibold">
                        {Object.values(calculateEnergy)[
                            energyFuncIndex
                        ].function(calories)}
                        !?
                    </span>
                </p>
            )}
        </>
    )
}

export { EnergyString }
