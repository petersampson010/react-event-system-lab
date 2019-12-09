import React from 'react'

export default class EyesOnMe extends React.Component {

    handler = () => console.log('Good!')
    yahandler = () => console.log('Hey! Eyes on me!')
    render() {
        return (
            <button onFocus={this.handler} onBlur={this.yahandler}/>
        )
    }
}
