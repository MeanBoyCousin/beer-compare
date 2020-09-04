import React from 'react'

const RadioButton = ({
    stringIndex,
    container: { name, volume },
    click,
    selected,
    lightMode
}) => {
    return (
        <label className="flex flex-col flex-wrap items-center content-center text-center pt-2 px-2 flex-grow w-1/3">
            <input
                type="radio"
                className={
                    selected === volume
                        ? lightMode
                            ? 'text-primary-active border-primary focus:border-info focus:shadow-input form-radio mb-1 shadow-sm active:shadow-sm'
                            : 'text-darkmode-primary-sm border-darkmode-primary bg-darkmode-black focus:border-darkmode-info focus:shadow-darkmode-input form-radio mb-1 shadow-sm active:shadow-sm'
                        : lightMode
                        ? 'border-primary-dark focus:border-info focus:shadow-input form-radio mb-1'
                        : 'border-darkmode-primary-dark bg-darkmode-black focus:border-darkmode-info focus:shadow-darkmode-input form-radio mb-1'
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
