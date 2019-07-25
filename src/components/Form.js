import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-sm'>
                <div className="wForm ">
                    <form className="form-inline wInput" onSubmit={this.props.getWeather}>
                        
                            <input className="form-control" type="text" name='city' placeholder='City...'/>
                            <input className="form-control" type="text" name='country' placeholder='Country...'/>
                            <button className='btn btn-info'>Get Weather</button>
                        
                    
                    </form>
                </div>
                </div>
            </div>
        )
    }
}

export default Form;
