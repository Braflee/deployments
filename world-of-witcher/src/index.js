import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import {LoreProvider} from './components/LoreContext'
import './App.css'

import App from './App'

ReactDOM.render(
    <Router>
        <LoreProvider>
            <App />
        </LoreProvider>
    </Router>, document.getElementById('root'))