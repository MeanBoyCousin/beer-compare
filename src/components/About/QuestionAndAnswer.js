import React, { useState } from 'react'

const QuestionAndAnswer = ({ question, answer, lightMode }) => {
    const [answerVisible, setAnswerVisible] = useState(false)

    return (
        <div className="my-2">
            <h3
                className="text-sm font-bold underline mb-2 cursor-pointer no-tap-highlight"
                onClick={e => {
                    setAnswerVisible(state => {
                        return !state
                    })
                    const element = e.currentTarget
                    setTimeout(() => {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        })
                    }, 0)
                }}
            >
                {question}
            </h3>
            <hr
                className={
                    lightMode
                        ? 'border-primary-dark opacity-disabled my-2 w-full'
                        : 'border-darkmode-primary-dark opacity-disabled my-2 w-full'
                }
            />
            {answerVisible && (
                <>
                    <p className="text-xs">{answer}</p>
                    <hr
                        className={
                            lightMode
                                ? 'border-primary-dark opacity-disabled my-2 w-full'
                                : 'border-darkmode-primary-dark opacity-disabled my-2 w-full'
                        }
                    />
                </>
            )}
        </div>
    )
}

export { QuestionAndAnswer }
