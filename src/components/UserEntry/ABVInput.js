import React, { useRef } from 'react'

const ABVInput = ({ placeholder, value, moveAway, lightMode }) => {
    const abvInput = useRef()

    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                abvInput.current.blur()
            }}
        >
            <input
                ref={abvInput}
                type="number"
                inputMode="decimal"
                step={0.1}
                className={
                    lightMode
                        ? 'form-input text-center bg-white active:border-primary-light-active active:shadow-sm focus:border-info focus:shadow-input'
                        : 'form-input text-center bg-darkmode-black active:border-primary-light-active active:shadow-sm active:bg-darkmode-black-sm focus:border-darkmode-info focus:shadow-darkmode-input'
                }
                placeholder={placeholder}
                defaultValue={value}
                onFocus={e => {
                    e.target.value = null
                }}
                onBlur={moveAway}
            />
        </form>
    )
}

export { ABVInput }
