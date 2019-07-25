import React, { Component } from 'react'

export class Titles extends Component {
    render() {

        const fName = 'Ciaran';
        return (

            <div className='heading'>
                <h1>Weather Finder</h1>
                <p>Hello {fName}</p>
                
            </div>
        )
    }
}

export default Titles;
