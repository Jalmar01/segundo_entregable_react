import { useState } from "react"
import './styles/weatherCard.css';

const WeatherCard = ({ weather, temp }) => {
const [isCelsius, setIsCelsius] = useState(true)

    const handleChangeTemp = () => setIsCelsius(!isCelsius)

    return (
        <article className="weather">
            <header className="weather__header">
                <h1 className="weather__title">Weather App</h1>
                <h2 className="weather__subtitle">{weather?.name}, {weather?.sys.country}</h2>
            </header>
            <section className="weather__body">
                <div className="weather__img-container">
                    <img src={weather ? `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png` : ""} alt="image" />
                </div>
                <div className="weather__info">
                    <h3 className="weather__info-title">"{weather?.weather[0].description}"</h3>
                    <ul className="weather__list">
                        <li className="weather__list-item">
                            <span className="weather__list-label">Wind Speed:</span>
                            <span className="weather__list-value">{weather?.wind.speed}m/s</span>
                        </li>
                        <li className="weather__list-item">
                            <span className="weather__list-label">Clouds:</span>
                            <span className="weather__list-value">{weather?.clouds.all}%</span>
                        </li>
                        <li className="weather__list-item">
                            <span className="weather__list-label">Pressure:</span>
                            <span className="weather__list-value">{weather?.main.pressure}hpa</span>
                        </li>
                    </ul>
                </div>
            </section>
            <footer className="weather__footer">
                <h2 className="weather__footer-temp">{isCelsius ? `${temp?.celsius} °C` :`${temp?.farenheit} °F`}</h2>
                <button className="weather__footer-btn" onClick={handleChangeTemp}> Change to {isCelsius ? '°F' : '°C'} </button>
            </footer>
            <link rel="stylesheet" href="https://github.com/Jalmar01/segundo_entregable_react" />
        </article>
    )
}

export default WeatherCard