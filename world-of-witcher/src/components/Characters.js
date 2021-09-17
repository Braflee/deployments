import React from 'react'
import {LoreConsumer} from './LoreContext'

function Characters() {
    return (
        <LoreConsumer>
            {context => (
                context.loreArr.map(card => {
                    return (
                            <div className='card-cont'>
                                <div className='flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-front' style={{backgroundImage: `url(${card.image})`}}>
                                        </div>
                                        <div className='flip-card-back'>
                                            <h4>Name: {card.name}</h4>
                                            <p>Gender: {card.gender}</p>
                                            <p>Race: {card.race}</p>
                                            <p>Profession: {card.profession}</p>
                                            <p>Nationality: {card.nationality}</p>
                                            <p>First quest appearance: {card.fappearance}</p>
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

export default Characters
