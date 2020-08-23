import React, { useRef } from 'react'

const ABVInput = ({ placeholder, value, moveAway }) => {
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
                className="form-input text-center active:border-primary-light-active active:shadow-sm"
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
