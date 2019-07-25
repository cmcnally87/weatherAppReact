import React, { Component } from 'react'
import '../App.css'




export class Weather extends Component {



    render() {
        return (
            <div className='weatherDiv'>
                <div className='row'>
                    <div className='col-sm'>
                        { this.props.city && this.props.country && <h3>Weather @ {this.props.city}, {this.props.country} </h3>}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <div className='col-sm wRow'>
                            { this.props.temperature && <h3 style={{display: 'inline'}}>Temperature: {<p style={{display: 'inline'}}> {this.props.temperature}  C</p>}</h3> }
                        </div>
                        <div className='col-sm wRow'>
                            { this.props.humidity && <h3>Humidity: {<p style={{display: 'inline'}}>  {this.props.humidity} </p>}</h3> }
                        </div>
                        <div className='col-sm wRow'>
                            { this.props.description && <h3>Conditions: {<p style={{display: 'inline'}}> {this.props.description}</p>}</h3> }
                        </div>
                        <div className='col-sm wRow'>
                            { this.props.error && <p>Error: {this.props.error}</p> }
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default Weather;
