import React from 'react'
import {LoreConsumer} from './LoreContext'

function Quests() {
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
                                            <img src={
                                                  card.region === 'White Orchard' ? `https://i.redd.it/7qj85ffidct31.jpg`
                                                : card.region === 'Velen' ? `https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/12/rsz_velen.jpg`
                                                : card.region === 'Kaedwen' ? `http://assets.vg247.com/current//2015/05/the_witcher_3_wild_hunt_walkthrough_01_kaermorhen.jpg`
                                                : card.region === 'Vizima' ? `https://i.pinimg.com/originals/9b/cf/1b/9bcf1bb6e42b9b66ef7de61f76a37260.png`
                                                : card.region === 'Novigrad' ? `https://steamuserimages-a.akamaihd.net/ugc/91603931564521499/96B769B7DFC7A4BFCD3ECC80DDED86B01AB701A2/`
                                                : card.region === 'Skellige' ? `https://cdn.jwplayer.com/v2/media/bKUim216/poster.jpg?width=720`
                                                : card.region === 'Toussaint' ? `https://d2skuhm0vrry40.cloudfront.net/2015/articles/1/8/3/2/7/2/5/digitalfoundry-2016-does-the-witcher-3-blood-and-wine-fulfil-its-original-promise-1464256159775.jpg/EG11/resize/1200x-1/digitalfoundry-2016-does-the-witcher-3-blood-and-wine-fulfil-its-original-promise-1464256159775.jpg`
                                                : `http://assets.vg247.com/current//2015/04/witcher_3_map.jpg`
                                            } alt='charImg' />
                                        </div>
                                        <div className='flip-card-back'>
                                            <h4>Name: {card.name}</h4>
                                            <p>Type: {card.type}</p>
                                            <p>Region: {card.region}</p>
                                            <p>Suggested Level: {card.level}</p>
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

export default Quests
