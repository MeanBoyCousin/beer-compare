import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import { App } from './App'

import './assets/styles/tailwind.bundle.css'

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)

serviceWorker.register()
