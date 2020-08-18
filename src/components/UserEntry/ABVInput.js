import React from 'react'

const ABVInput = ({ placeholder, moveAway }) => {
    return (
        <input
            type="number"
            inputMode="decimal"
            className="form-input text-center mb-4 focus:border-primary-light-active focus:shadow-sm"
            placeholder={placeholder}
            onBlur={moveAway}
        />
    )
}

export { ABVInput }
