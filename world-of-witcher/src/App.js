import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { LoreConsumer } from './components/LoreContext'

import Home from './components/Home'
import Characters from './components/Characters'
import Monsters from './components/Monsters'
import Quests from './components/Quests'

function App(props) {
    return (
        <LoreConsumer>
            {context => (  
                <div>
                    <div className='btn-cont'>
                        <Link to='/'>
                            <div className='home-back'><button className='home-btn'>Home</button></div>
                        </Link>
                        <Link to='/characters'>
                            <div className='char-back'><button className='char-btn' onClick={() => context.getLore(`characters`)}>Characters</button></div>
                        </Link>
                        <Link to='/monsters'>
                            <div className='monst-back'><button className='monst-btn' onClick={() => context.getLore(`creatures`)}>Monsters</button></div>
                        </Link>
                        <Link to='/quests'>
                            <div className='quest-back'><button className='quest-btn' onClick={() => context.getLore(`quests`)}>Quests</button></div>
                        </Link>
                    </div>

                    <Switch>
                        <Route exact path='/'>
                            <div className='home-cont'>
                                <Home />
                            </div>
                        </Route>

                        <Route path='/characters'>
                            <div className='char-cont'>
                                <Characters />
                            </div>
                        </Route>

                        <Route path='/monsters'>
                            <div className='monst-cont'>
                                <Monsters />
                            </div>
                        </Route>

                        <Route path='/quests'>
                            <div className='quest-cont'>
                                <Quests />
                            </div>
                        </Route>
                    </Switch>
                </div>
            )}
        </LoreConsumer>
    )
}

export default App