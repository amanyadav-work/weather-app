# Weather App Overview
This app provides real-time weather data and news related to weather conditions from your nearest location. It includes key weather parameters, air quality index, and a dynamic description of the air quality based on current conditions.

## Features

- **Weather Data**: 
  - **Wind Speed**: Displays wind speed in meters per second and direction.
  - **Relative Humidity**: Shows the percentage of humidity in the air.
  - **Sunrise Time**: Shows the time of sunrise in your location.
  - **Sunset Time**: Displays the time of sunset in your location.
  - **Visibility**: Indicates how far one can see in the current weather conditions.
  - **Precipitation**: Shows the amount of rainfall (if any).
  - **Cloud Coverage**: Shows the percentage of the sky covered by clouds.
  - **UV Index**: Provides the UV radiation level.
  - **Dew Point**: Displays the temperature at which the air becomes saturated with moisture.
  - **API Data Fallback**: If the weather or news API's data limit is reached, the app switches to using locally stored JSON data as a fallback. This ensures the app continues to function even when the API request limit is exceeded.


- **Air Quality Index**: 
  - Provides the air quality index and a description of the air quality, such as “Very Unhealthy,” depending on the current levels.

- **Weather News**: 
  - Displays the latest news and updates regarding weather conditions.

- **Dynamic Air Quality Description**: 
  - The air quality section provides an automatic description based on the current Air Quality Index.

## Technology Stack

- **React**: The app is built using React, a JavaScript library for building user interfaces.
- **Bootstrap**: The app uses React-Bootstrap for responsive design and components.
- **Weather and News API**: Real-time weather and air quality data is fetched from a weather API. The weather news is fetched dynamically.

