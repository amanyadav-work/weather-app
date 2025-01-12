import React, { useState, useEffect } from 'react';
import { LuTriangleAlert } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import WeatherNews from './WeatherNews';

const weatherdata = ({weatherAPIkey}) => {

    const [weatherdata, setweatherdata] = useState({});
    const [location, setLocation] = useState({})


    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    setLocation({
                        latitude: lat,
                        longitude: lon
                    });

                }
            );
        }
    }, [])
    const handledata = async () => {
 
        
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${location.latitude}&lon=${location.longitude}&key=${weatherAPIkey}`); // If you're using a local JSON file
        // const response = await fetch(`./WeatherData.json`); // If you're using a local JSON file
        const parsedData = await response.json(); // Correct JSON parsing
        setweatherdata(parsedData.data[0]); // Set the fetched data into the state
    }

    useEffect(() => {
        if (location.latitude && location.longitude) {
            handledata();
        }

    }, [location])

    const capitalize = (text) => {
        const t = text.charAt(0).toUpperCase() + text.slice(1);
        return t;
    }


    const airDescription = weatherdata.aqi < 50 ? "The air quality is considered good, and there is little to no risk to the general population. Pollution levels are low, and people of all ages and health conditions can safely go about their outdoor activities without any concerns. This is ideal air quality, and no precautions are needed." :
        (weatherdata.aqi < 100 ? "Air quality is moderate. While air pollution levels are acceptable, sensitive individuals, such as those with pre-existing respiratory or heart conditions, may begin to experience slight health effects. The general public is unlikely to be affected." :
            (weatherdata.aqi < 150 ? "The air quality is considered unhealthy for sensitive groups. People with respiratory issues (like asthma, COPD, or heart disease), children, and the elderly are at higher risk of experiencing health effects. The general public may not be affected, but sensitive individuals should consider reducing outdoor exposure or limiting physical activity." :
                (weatherdata.aqi < 200 ? "Air quality is considered unhealthy, meaning that everyone may begin to experience health effects, especially those in sensitive groups. Those who are physically active outdoors or who have respiratory or heart conditions may notice worsening symptoms. It's recommended that the general public reduce prolonged outdoor exertion, and sensitive individuals should limit exposure to outdoor air." :
                    (weatherdata.aqi < 300 ? "Air quality is considered very unhealthy, with health warnings for everyone. The air is dangerous, and even healthy individuals may start to experience adverse effects. Sensitive groups are at an even greater risk, and everyone should minimize outdoor activities. Those with respiratory or heart conditions should avoid leaving their homes unless absolutely necessary." :
                        (weatherdata.aqi < 500 && "The air quality is considered hazardous, posing an emergency health situation. All individuals, regardless of age or health status, are at high risk of severe health effects. People are advised to stay indoors and avoid outdoor activities altogether. Individuals with respiratory or heart issues may experience life-threatening symptoms. Public health officials may issue emergency alerts and evacuations in severe cases."))
                )))
    return (
        <>{weatherdata.weather ?
            <div className="d-flex container mt-5 mb-5 gap-3">
                <div className="w-75">
                    <div className="card">
                        <li className="list-group-item d-flex justify-content-between m-4 pb-3 out">
                            <span className="label city-title">{weatherdata.city_name}, {weatherdata.state_code}, {weatherdata.country_code}</span>
                            <span className="value time">{weatherdata.datetime}</span>
                        </li>
                        <div className="mb-3 d-flex flex-row p-4 d-flex align-items-center gap-3">
                            <div className="w-50 ">
                                <div className='d-flex flex-row w-100'>
                                    <img src={`https://cdn.weatherbit.io/static/img/icons/${weatherdata.weather.icon}.png`} className="card-img-top w-25 p-2" alt="..." />
                                    <div className='d-flex flex-column justify-content-center'>

                                        <h5 className="card-title temp d-flex">{weatherdata.temp}°<span className="after-temp">C</span></h5>
                                        <h5 className="card-title temp-feel">Feels Like® {weatherdata.app_temp}°</h5>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title mt-2">{weatherdata.weather.description}</h5>
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Latitude
                                            <span className="badge text-bg-primary rounded-pill">{weatherdata.lat} °</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Longitude
                                            <span className="badge text-bg-primary rounded-pill">{weatherdata.lon} °</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="w-50">
                                <div className=''>
                                    <ul className="list-group list-group-flush ">
                                        <li className="list-group-item d-flex justify-content-between p-2">
                                            <span className="label">Wind Speed</span>
                                            <span className="value">{capitalize(weatherdata.wind_cdir_full)} {weatherdata.wind_spd} m/s</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between p-2">
                                            <span className="label">Relative Humidity</span>
                                            <span className="value">{weatherdata.rh} %</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between p-2">
                                            <span className="label">Sunrise Time</span>
                                            <span className="value">{weatherdata.sunrise}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between p-2">
                                            <span className="label">Sunset Time</span>
                                            <span className="value">{weatherdata.sunset}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between p-2">
                                            <span className="label">Visibility</span>
                                            <span className="value">{weatherdata.vis}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between p-2">
                                            <span className="label">Air Quality Index</span>
                                            <span className="value">{weatherdata.aqi} {weatherdata.aqi < 50 ? "- Good" : (weatherdata.aqi < 100 ? "Moderate" : (weatherdata.aqi < 150 ? "- Unhealthy for Patients" : (weatherdata.aqi < 200 ? "- Unhealthy" : (weatherdata.aqi < 300 ? "- Very Unhealthy" : (weatherdata.aqi < 500 && "- Hazardous"))
                                            )))}</span>
                                        </li>

                                    </ul>
                                </div></div>

                        </div>
                    </div>

                    <div className='bottom d-flex gap-3 mt-3 mb-4'>
                        <div className="card w-50">
                            <div className="card-header">
                                Other Details
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush ">
                                    <li className="list-group-item d-flex justify-content-between p-2">
                                        <span className="label">Precipitation</span>
                                        <span className="value">{weatherdata.precip} mm</span>
                                    </li>

                                    <li className="list-group-item d-flex justify-content-between p-2">
                                        <span className="label">Cloud Coverage</span>
                                        <span className="value">{weatherdata.clouds} %</span>
                                    </li>

                                    <li className="list-group-item d-flex justify-content-between p-2">
                                        <span className="label">UV Index</span>
                                        <span className="value">{weatherdata.uv}</span>
                                    </li>

                                    <li className="list-group-item d-flex justify-content-between p-2">
                                        <span className="label">Dew Point</span>
                                        <span className="value">{weatherdata.dewpt}</span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="card w-50">
                            <div className="card-header p-4" style={{
                                backgroundColor: weatherdata.aqi < 50 ? "#8BC34A" : (weatherdata.aqi < 100 ? "#fff173" : (weatherdata.aqi < 150 ? "#FF9800" : (weatherdata.aqi < 200 ? "#ff9890" : (weatherdata.aqi < 300 ? "#fffc15" : (weatherdata.aqi < 500 && "#B71C1C"))))),
                                color: weatherdata.aqi < 50 ? "#1B5E20" : (weatherdata.aqi < 100 ? "#669a00" : (weatherdata.aqi < 150 ? "#742900" : (weatherdata.aqi < 200 ? "#4d1919" : (weatherdata.aqi < 300 ? "#000" : (weatherdata.aqi < 500 && "#FFFFFF")))))
                            }}>
                                <span className="value">{weatherdata.aqi < 100 ? <FaCheckCircle /> : <LuTriangleAlert />} AQI {weatherdata.aqi < 50 ? "- Good" : (weatherdata.aqi < 100 ? "Moderate" : (weatherdata.aqi < 150 ? "- Unhealthy for Patients" : (weatherdata.aqi < 200 ? "- Unhealthy" : (weatherdata.aqi < 300 ? "- Very Unhealthy" : (weatherdata.aqi < 500 && "- Hazardous"))
                                )))}</span>
                            </div>
                            <div className="card-body p-4">
                                <p className="card-text">{airDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="w-25">
                    <h2 className='h5 border-bottom pb-2 mb-1'>Popular Weather News</h2>
                    <WeatherNews newsAPIkey="322a3a77e5184ff68d9605fab5ef11b2" />
                </div>

            </div>
            : <div className="d-flex justify-content-center min-vh-100 align-items-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        }



        </>
    )
}

export default weatherdata
