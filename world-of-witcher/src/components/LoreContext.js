import React, { Component } from 'react'
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class LoreProvider extends Component {
    state = {
        loreArr: []
    }

    getLore = (category) => {
        axios.get(`http://witcher3api.com/api/${category}`)
           .then(res => {
               console.log(res.data)
               this.setState(({loreArr: [...res.data]}))
           })
           .catch(err => console.log(err)) 
    }

    render() {
        return (
            <Provider value={{
                loreArr: this.state.loreArr,
                getLore: this.getLore
            }}>
                {this.props.children}
            </Provider>
        )
    }
}


export {LoreProvider, Consumer as LoreConsumer}