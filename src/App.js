import React from 'react';
import './App.css';
import './components/Titles';
import { Titles } from './components/Titles';
import Form from './components/Form'
import Weather from './components/Weather'



class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const weatherApiKey = 'd9ff1ea8e6576691d7b12ee8f88d044b';
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}uk&appid=${weatherApiKey}&units=metric`)
    const data = await api_call.json();

    if(city && country){
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
  } else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Enter a value"
    })
    
  }
  };

  render () {
    return(
    <div className="App wInput container">
      <Titles />
      <Form getWeather = {this.getWeather} />
      <Weather 
        temperature ={this.state.temperature}
        city ={this.state.city}
        country ={this.state.country}
        humidity ={this.state.humidity}
        description ={this.state.description}
        error= {this.state.error}
      />
    </div>
    );
  };
}

export default App;
