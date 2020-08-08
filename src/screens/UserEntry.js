import React from 'react'

const UserEntry = () => {
    return (
        <div>
            <h1>Beer Compare</h1>
            <h2>Compare your beers, cut those calories!</h2>
            <hr />
            <div>
                <p>What percentage is the first beer?</p>
                <input type="number" />
                <p>What size is the drink?</p>
                <input type="radio" name="volume-one" id="pint" />
                <label htmlFor="pint">Pint</label>
                <input type="radio" name="volume-one" id="half-pint" />
                <label htmlFor="half-pint">Half Pint</label>
                <input type="radio" name="volume-one" id="two-third-pint" />
                <label htmlFor="two-third-pint">2/3rds Pint</label>
                <input type="radio" name="volume-one" id="one-third-pint" />
                <label htmlFor="one-third-pint">1/3rd Pint</label>
                <input type="radio" name="volume-one" id="330ml" />
                <label htmlFor="330ml">330ml Can</label>
                <input type="radio" name="volume-one" id="440ml" />
                <label htmlFor="440ml">440ml Can</label>
                <input type="radio" name="volume-one" id="500ml" />
                <label htmlFor="500ml">500ml Can</label>
                <input type="radio" name="volume-one" id="568ml" />
                <label htmlFor="568ml">568ml Can</label>
            </div>
            <div>
                <p>What percentage is the second beer?</p>
                <input type="number" />
                <p>What size is the drink?</p>
                <input type="radio" name="volume-two" id="pint" />
                <label htmlFor="pint">Pint</label>
                <input type="radio" name="volume-two" id="half-pint" />
                <label htmlFor="half-pint">Half Pint</label>
                <input type="radio" name="volume-two" id="two-third-pint" />
                <label htmlFor="two-third-pint">2/3rds Pint</label>
                <input type="radio" name="volume-two" id="one-third-pint" />
                <label htmlFor="one-third-pint">1/3rd Pint</label>
                <input type="radio" name="volume-two" id="330ml" />
                <label htmlFor="330ml">330ml Can</label>
                <input type="radio" name="volume-two" id="440ml" />
                <label htmlFor="440ml">440ml Can</label>
                <input type="radio" name="volume-two" id="500ml" />
                <label htmlFor="500ml">500ml Can</label>
                <input type="radio" name="volume-two" id="568ml" />
                <label htmlFor="568ml">568ml Can</label>
            </div>
            <button>Compare</button>
            <h1 className="my-class">hello</h1>
        </div>
    )
}

export { UserEntry }
