import React from 'react'
import {LoreConsumer} from './LoreContext'

function Monsters() {
    return (
        <LoreConsumer>
            {context => (
                context.loreArr.map(card => {
                    return (
                        <div className='card-cont'>
                            <div key={card.id}>
                                <div className='flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-front'>
                                            <img src={card.image} alt='charImg' />
                                        </div>
                                        <div className='flip-card-back'>
                                            <h4>Name: {card.name}</h4>
                                            <p>Class: {card.class}</p>
                                            <p>Weaknesses: {card.susceptibility}</p>
                                            <p>Immunities: {card.immunity}</p>
                                            <p>Occurences: {card.occurences}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            )}
        </LoreConsumer>
    )
}

export default Monsters
