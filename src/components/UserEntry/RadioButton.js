import React from 'react'

const RadioButton = ({
    stringIndex,
    container: { name, volume },
    click,
    selected
}) => {
    return (
        <label className="flex flex-col flex-wrap items-center content-center text-center py-2 px-2 flex-grow w-1/3">
            <input
                type="radio"
                className={
                    selected === volume
                        ? 'form-radio mb-1 text-primary-active border-primary shadow-sm focus:shadow-sm focus:border-primary-active'
                        : 'form-radio mb-1 border-primary-dark'
                }
                name={`volume-${stringIndex}`}
                id={`${volume}-${stringIndex}`}
                defaultChecked={selected === volume ? true : false}
                onClick={click}
            />
            <span>{name}</span>
        </label>
    )
}

export { RadioButton }
