import React, { useState } from 'react'
import "./styles/WeatherCard.css"

const WeatherCard = ({Weather,temp}) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const handleChangeTemp =() => setIsCelsius(!isCelsius)
  return (
    <article className='weather'>
         <h1 className='weather__title'>Weather App</h1>
         <h2 className='weather__location'>{Weather?.name}{Weather?.sys.country}</h2>
         <section className='weather__body'>
            <header className='weather__img-container'>
                <img
                className='weather__img'
                 src={`https://openweathermap.org/img/wn/${Weather?.weather[0].icon}@4x.png`} alt="img" />
            </header>
            <article className='weather__info'>
                <h3 className='weather__condition'>"{Weather?.weather[0].description}"</h3>
                <ul className='weather__list'>
                <li className='weather__item'>
                  <span className='weather__label'>Wind Speed</span>
                  <span className='weather__value'>{Weather?.wind.speed}M/s</span></li>
                <li className='weather__item'>
                  <span className='weather__label'>Clouds</span>
                  <span className='weather__value'>{Weather?.clouds.all}%</span></li>
                <li className='weather__item'>
                  <span className='weather__label'>Pressure</span>
                  <span className='weather__value'>{Weather?.pressure}hPa</span>
                  </li>
                </ul>
            </article>
            <h2 className='weather__temp'>{isCelsius ? `${temp?.celsius}°C` : `${temp?.fahrenheit}°F`}</h2>
            <button className='weather__btn' onClick={handleChangeTemp}>Change to{isCelsius ? '°f' : '°C'} </button>
         </section>

    </article>
  )
}

export default WeatherCard