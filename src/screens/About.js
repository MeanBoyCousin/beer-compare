import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { QuestionAndAnswer } from '../components/About/QuestionAndAnswer'
import { faqs } from '../helpers/faqs'

const About = () => {
    const [faqsVisible, setFaqsVisible] = useState(false)

    return (
        <div className="container">
            {faqsVisible ? (
                <>
                    <h2 className="w-4/5 text-center text-xl font-bold my-2">
                        FAQs
                    </h2>
                    <div className="w-4/5 my-2 px-4 text-justify overflow-auto whitespace-pre-line">
                        {faqs.map((faq, index) => {
                            return (
                                <QuestionAndAnswer
                                    key={`faq${index}`}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            )
                        })}
                    </div>
                </>
            ) : (
                <>
                    <h2 className="w-4/5 text-center my-2">
                        Welcome to beer compare, the easy way to compare the
                        calories in beer and keep a track of your drinking
                        sessions!
                    </h2>
                    <h2 className="w-4/5 text-center my-2">
                        Simply follow the steps through this simple app and we
                        will help you to make the right choice as well as keep a
                        track of how much you've had.
                    </h2>
                </>
            )}
            <div className="flex justify-evenly w-4/5 my-2">
                <Link
                    className="active-btn my-2"
                    to="/"
                    onClick={() => {
                        setFaqsVisible(true)
                    }}
                >
                    Home
                </Link>
                <button
                    className="active-btn my-2"
                    onClick={() => {
                        setFaqsVisible(state => {
                            return !state
                        })
                    }}
                >
                    {faqsVisible ? 'Back' : 'FAQs'}
                </button>
            </div>
            <a
                href="https://www.linkedin.com/in/timothy-dunphy-575b541a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-btn my-2"
            >
                App built by Tim Dunphy
            </a>
        </div>
    )
}

export { About }
